import React, { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"
import toast, { Toaster } from "react-hot-toast";
import LogoHeader from "../public/image.png"

// internal Import
import { Menu, Logo, TokenBalance } from "./index"
import Image from "next/image";

const Header = () => {
  const [tokenBalComp, setTokenBalComp] = useState()

  const { address } = useAccount();

  const notifyConnectWallet = () => toast.error("Connect Wallet", { duration: 5000 });

  useEffect(() => {
    setTokenBalComp(
      <>
        <TokenBalance name={"USDC"} walletAddress={address} />
        <TokenBalance name={"BNB"} walletAddress={address} />
        <TokenBalance name={"SHIBA INU"} walletAddress={address} />
      </>
    )

    if (!address) notifyConnectWallet();
  }, [address])


  return (
    <header className="p-4 text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex">
          <Image src={LogoHeader} rel="noopener noreferrer" alt="Logo" width={60} height={40} aria-label="Back to homepage" className="flex items-center rounded-full" />
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <a href="" className="flex items-center px-4 -mb-1 dark:border-transparent text-[#fbefef] text-xl
                border-[#7765f3]
              ">Swap</a>
            </li>
            <li className="flex">
              <a href="#" rel="noopener nopreferrer" className="flex items-center px-4 -mb-1 dark:border-transparent
              ">NFTs</a>
            </li>
            <li className="flex">
              <a href="#" rel="noopener nopreferrer" className="flex items-center px-4 -mb-1 dark:border-transparent
              ">Pool</a>
            </li>
          </ul>
        </div>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <TokenBalance name={"USDC"} walletAddress={address} />
          <TokenBalance name={"BNB"} walletAddress={address} />
          <ConnectButton />
        </div>
        <button className="p-4 lg:hidden">
          <Menu />
        </button>
      </div>
      <Toaster />
    </header>
  )
};

export default Header;
