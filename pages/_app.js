import "../styles/globals.css"
import React from "react";
import merge from "lodash/merge";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit"
import { configureChains, createClient, WagmiConfig} from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { mainnet, polygonMumbai} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
;

const ganacheChain = {
  id:1337,
  name: "Ganache",
  network: "ganache",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: "http://127.0.0.1:7545",
  },
  blockExplorers: {
    default: {name: "Etherscan", url: "http://127.0.0.1:7545"},
  },
  testnet: true
}

const {chains, provider} = configureChains(
  [polygonMumbai, mainnet, ganacheChain],
  [
    jsonRpcProvider({
      rpc: (chain)=> {
        if(chain.id === ganacheChain.id){
          return {http: ganacheChain.rpcUrls.default};
        }
        return null
      }
    }),
    infuraProvider({
      apiKey: "f0267a8d7d5642caa8735db53507eefd",
      priority: 1,
    },
  )
  ]
)

const {connectors} = getDefaultWallets({
  chains,
  appName: "Custom Dex",
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: "#18181b",
    accentColorForeground: "#fff"
  }
})

const _app = ({Component, pageProps}) => {
  return (
    <WagmiConfig client={wagmiClient}>
     <RainbowKitProvider chains={chains} theme={myTheme}>
        <Component {...pageProps}/>
      </RainbowKitProvider>
    </WagmiConfig>
  )
};

export default _app;
