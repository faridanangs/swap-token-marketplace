import React, { useEffect, useRef, useState } from "react";
import {
  hashValidateAllowance,
increaseAllowance, swapEthToToken, 
swapTokenToEth, swapTokenToToken
}from "../utils/context"

import {CogIcon, ArrowSmDownIcon}from "@heroicons/react/outline"
import SwapField from "./SwapField";
import TransactionStatus from "./TransactionStatus";
import toast, {Toaster} from "react-hot-toast";
import {DEFAULT_VALUE, ETH} from "../utils/saleToken"
import {toEth, toWei} from "../utils/utils"
import {useAccount}from "wagmi"


const SwapComponent = () => {
  const [srcToken, setSrcToken] = useState(ETH)
  const [destToken, setDestToken] = useState(DEFAULT_VALUE)

  const [inputValue, setInputValue] = useState()
  const [outputValue, setOutputValue] = useState()

  const inputValueRef = useRef();
  const outputValueRef = useRef()

  const isReversed = useRef(false);

  const INCREASE_ALLOWANCE = "Increase Allowance";
  const ENTER_AMOUNT = "Enter an amount";
  const CONNECT_WALLET = "Connect wallet";
  const SWAP = "Swap";

  const srcTokenObj = {
    id: "srcToken",
    value: inputValue,
    setValue: setInputValue,
    defaultValue: srcToken,
    ignoreValue: destToken,
    setToken: setSrcToken,
  }

  const destTokenObj = {
    id: "destToken",
    value: outputValue,
    setValue: setOutputValue,
    defaultValue: destToken,
    ignoreValue: srcToken,
    setToken: setDestToken,
  }

  const [srcTokenComp, setSrcTokenComp] = useState()
  const [destTokenComp, setDestTokenComp] = useState()

  const [swapBtnTxt, setSwapBtnTxt] = useState(ENTER_AMOUNT)
  const [txPending, setTxPending] = useState(false)

  const notifyError = (msg)=> toast.error(msg, {duration: 5000});
  const notifySuccess = ()=> toast.success("Transaction Success");

  const {address} = useAccount();

  useEffect(()=> {
    if(!address) setSwapBtnTxt(CONNECT_WALLET);
    else if (!inputValue || !outputValue) setSwapBtnTxt(ENTER_AMOUNT);
    else setSwapBtnTxt(SWAP);
  }, [address, outputValue, inputValue]);

  useEffect(()=> {
    if(
      document.activeElement !== outputValueRef.current &&
      document.activeElement.ariaLabel !== "srcToken" &&
      !isReversed.current
    ){
      populateOutputValue(inputValue);
      console.log(inputValue, "test out")
    }

    setSrcTokenComp(<SwapField obj={srcTokenObj} ref={inputValueRef}/>);
   
    if(inputValue?.length === 0) setOutputValue("");

  }, [inputValue, destToken])


  useEffect(()=> {
    if(
      document.activeElement !== inputValueRef.current &&
      document.activeElement.ariaLabel !== "destToken" &&
      !isReversed.current
    ){
      populateInputValue(outputValue);
      console.log(outputValue, "test inp")
    } 

    setDestTokenComp(<SwapField obj={destTokenObj} ref={outputValueRef} />)

    if(outputValue?.length === 0) setInputValue("");

    // resetting the isReversed value if its set
    if(isReversed.current) isReversed.current = false;

  }, [outputValue, srcToken])


 
  return (
    <div className="rounded-l border-[1px] border-[#7765f3] w-[100%] p-4 px-6 rounded-xl bg-[#4d3acb]">
      <div className="flex items-center justify-between py-4 px-1">
        <p className="text-xl">Swap</p>
        <CogIcon className="h-6"/>
      </div>
      <div className="relative p-4 bg-[#212429] border-[2px] py-6 rounded-xl mb-2 border-transparent hover:border-zinc-600">
        {srcTokenComp}
        <ArrowSmDownIcon
          className="absolute left-1/2 -translate-x-1/2 -bottom-6 h-10 p-1 bg-[#212429]
            border-4 border-zinc-900 text-zinc-300 rounded-xl cursor-pointer hover:scale-110
          "
          onClick={handleReverseExchange}
        />
      </div>
      <div className="p-4 py-6 rounded-xl mt-2 border-transparent hover:border-zinc-600 bg-[#212429] border-[2px]">
        {destTokenComp}
      </div>
      <button className={getSwapBtnClassName()}
        onClick={()=> {
          if(swapBtnTxt === INCREASE_ALLOWANCE) handleIncreaseAllowance();
          else if(swapBtnTxt === SWAP) handleSwap();
        }}
      >
        {swapBtnTxt}
      </button>
      {
        txPending && <TransactionStatus/>
      }
      <Toaster/>
    </div>
  )

  async function handleSwap(){
    if(srcToken === ETH && srcToken !== ETH) performSwap();
    else {
      // check wheter three is allowance when the swap deals with tokenToEth / tokenToToken
      setTxPending(true);
      const result = await hashValidateAllowance(address, srcToken, inputValue);
      setTxPending(false);

      if(result) performSwap();
      else handleInsufficienceAllowance();
    }
  }
 
  async function handleIncreaseAllowance(){
    setTxPending(true);
    await increaseAllowance(srcToken, inputValue);
    setTxPending(false);

    // set the swap btn to "Swap" again
    setSwapBtnTxt(SWAP);
  }

  function handleReverseExchange(e){
    // setting the isReversed value to prevent the input/output values
    // being calculated in their respective side - effects
    isReversed.current = true
    
    // 1. swap tokens (srcToken <-> destToken)
    // 2. swap values (inputValue <-> outputValue)

    setInputValue(outputValue);
    setOutputValue(inputValue)

    setSrcToken(destToken);
    setDestToken(srcToken);
  }
  
  function getSwapBtnClassName() {
    let className = "p-4 w-full rounded-xl my-4";
    className += swapBtnTxt === ENTER_AMOUNT || swapBtnTxt === CONNECT_WALLET
      ? " text-zinc-400 bg-zinc-800 pointer-events-none "
      : " bg-blue-700";

    className += swapBtnTxt === INCREASE_ALLOWANCE ? " bg-yellow-600" : "";
    return className;
  }

  function populateOutputValue(){
    if(
      destToken === DEFAULT_VALUE || srcToken === DEFAULT_VALUE || !inputValue
    ) return;

    try {
      if(srcToken !== ETH && destToken !== ETH) setOutputValue(inputValue);
      else if(srcToken === ETH && destToken !== ETH) {
        const outValue = toEth(toWei(inputValue, 14));
        setOutputValue(outValue);
      }else if( srcToken !== ETH && destToken === ETH ){
        const outValue = toEth(toWei(inputValue, 14));
        setOutputValue(outValue);
      }
    } catch (error) {
      setOutputValue("0")
    }
  }


  function populateInputValue(){
    if(destToken === DEFAULT_VALUE || srcToken === DEFAULT_VALUE || !outputValue) return;

    try {
      if(destToken !== ETH && srcToken !== ETH) setInputValue(outputValue);
      else if(destToken !== ETH && srcToken === ETH) {
        const outValue = toEth(toWei(outputValue, 14));
        setInputValue(outValue);
      }else if(srcToken !== ETH && destToken === ETH){
        const outValue = toEth(toWei(outputValue, 14));
        setInputValue(outValue);
      }
    } catch (error) {
      setInputValue("0")
    }
  }

  async function performSwap(){
   setTxPending(true);

   let receipt;

   if(srcToken === ETH && destToken !== ETH){
    receipt = await swapEthToToken(destToken, inputValue);
   }else if (srcToken !== ETH && destToken === ETH){
    receipt = await swapTokenToEth(srcToken, inputValue);
   }else {
    receipt = await swapTokenToToken(srcToken, destToken, inputValue);
   }

   setTxPending(false);

   if(receipt && receipt.hashOwnProperty("transactionHash")) notifyError(receipt);
   else notifySuccess()
  }

  function handleInsufficienceAllowance(){
    notifyError("Insufficience allowance. Click 'Increase allowance' to increase it.")
    setSwapBtnTxt(INCREASE_ALLOWANCE);
  }

};

export default SwapComponent;
