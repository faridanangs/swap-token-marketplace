import React from "react";
import {SwapComponent}from "./index"

const HeroSection = () => {
  return (
    <section className="text-gray-100 bg-[#1a1a1a]">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center py-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-3 sm:text-6xl">
            Token
            {""} <span className="text-[#7765f3]"></span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Swap, earn, and build on the leading decentralized crypto crading protocol
            <br className="hidden md:inline lg:hidden" />
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a href="#" rel="noopener noreferrer" className="bg-[#7765f3] px-8 py-3 text-lg font-semibold rounded text-gray-900">
              Get Start
            </a>
            <a href="#" rel="noopener noreferrer" className="border-gray-100 px-8 py-3 text-xl font-semibold rounded">
              Swap ERC20
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <SwapComponent/>
        </div>
      </div>
    </section>
  )
};

export default HeroSection;
