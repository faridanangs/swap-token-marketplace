import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import toast, {Toaster} from "react-hot-toast";
import {
  ClipboardCheckIcon,
  PlusIcon,
  ClipboardIcon
}from "@heroicons/react/outline"

// INTERNAL IMPORT
import { getTokenAddress, getTokenBalance,increaseAllowance} from "../utils/context"
import {TransactionStatus} from "./index"

const TokenBalance = ({name, walletAddress}) => {
  const [balance, setBalance] = useState("-");
  const [tokenAddress, setTokenAddress] = useState();

  const [copyIcon, setCopyIcon] = useState({icon: ClipboardIcon})
  const [txPending, setTxPending] = useState(false);

  const notifyError = (msg)=> toast.error(msg, {duration: 5000});
  const ntrifySuccess = ()=> toast.error("Transaction completed");

  useEffect(()=> {
    if(name && walletAddress){
      fetchTokenAddress();
      fetchTokenBalance();
    }else setBalance("-");
  }, [name, walletAddress]);

  async function fetchTokenBalance(){
    const bal = await getTokenBalance(name, walletAddress);
    console.log(bal);
    const fBal = ethers.utils.formatEther(bal.toString());
    setBalance(fBal.toString())
  }

  async function fetchTokenAddress(){
    const addr = await getTokenAddress(name);
    console.log(addr, "addr")
     setTokenAddress(addr);
  }


  return (
      <div className="flex mx-2 rounded-l rounded-r-lg border-[#7765f3] border-[1px]">
        <div className="flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg">
          <p className="text-sm">{name}</p>
          <p className="bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100">{balance}</p>
        </div>

        <div className="flex items-center bg-[#7765f2] w-fit p-2 px-3 rounded-r-lg">
          <copyIcon.icon className="h-6 cursor-pointer"
            onClick={()=> {
              navigator.clipboard.writeText(tokenAddress);
              setCopyIcon({icon: ClipboardCheckIcon})
            }}
          />
        </div>

        {txPending && <TransactionStatus/>}
        <Toaster/>
      </div>
  )

};

export default TokenBalance;
