import React, { useEffect, useRef, useState } from "react";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import toast,{Toaster} from "react-hot-toast";
import {ClipboardCheckIcon,
  ClipboardIcon,
  PlusIcon,
}from "@heroicons/react/outline"

// internal import
import {TransactionStatus} from "./index"
import {getTokenAddress, getTokenBalance, increaseAllowance} from "../utils/context"

const SingleCard = ({index, name, walletAddress}) => {
  const [balance, setBalance] = useState("-")
  const [tokenAddress, setTokenAddress] = useState()

  const [copyIcon, setCopyIcon] = useState({icon: ClipboardIcon})
  const [txPending, setTxPending] = useState(false)

  const notifyError = (m)=> toast.error(m, {duration: 5000})
  const notifySuccess = ()=> toast.success("Transaction Success")

  useEffect(()=> {
    if(name && walletAddress){
      fetchTokenAddress();
      fetchTokenBalance();
    }else setBalance("-");
  }, [walletAddress, name]);

  async function fetchTokenAddress(){
    const addr = await getTokenAddress(name);
    setTokenAddress(addr);
  }

  async function fetchTokenBalance(){
    const blnce = await getTokenBalance(name, walletAddress);
    const fBal = ethers.utils.formatUnits(blnce.toString(), 18);
    setBalance(fBal.toString());
  }

  return <article className="flex flex-col bg-[#212429]">
    <a href="#" rel="noopener noreferrer" aria-label="Lorem ipsum">
      <img src={`img/${index + 1}.png`} alt="Image" className="object-cover w-full h-62 bg-gray-500" />
    </a>
    <div className="flex flex-col flex-1 p-6">
    <a href="#" rel="noopener noreferrer" aria-label="Lorem ipsum">
    </a>
    <a href="#" rel="noopener noreferrer" className="text-xs tracki uppercase hover:underline text-[#7765f3]">
    {name} 10 M Supply
    </a>
    <h3 className="flex-1 py-2 text-lg font-semibold text-white">
      get {name} token, Limited supply available
    </h3>
    <div className="flex mx-2 pt-[10px]">
      <div className="flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg">
        <p className="text-sm">{name}</p>
        <p className="bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100">{balance}</p>
      </div>
      <div className="flex items-center p-2 px-2 rounded-r-lg bg-slate-400">
        <copyIcon.icon className="h-6 cursor-pointer" 
          onClick={()=> {
            navigator.clipboard.writeText(tokenAddress);
            setCopyIcon({icon: ClipboardCheckIcon});
          }}
        />
      </div>
    </div>
    </div>
  </article>
};

export default SingleCard;




