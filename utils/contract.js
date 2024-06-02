import {ethers} from "ethers";
import CustomDexAbi from "../deploys/artifacts/contracts/DEx.sol/CustomDex.json"
import CustomTokenAbi from "../deploys/artifacts/contracts/DEx.sol/CustomToken.json"
import { contractAddress } from "./context";

export const tokenContract = async (addr)=> {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const {ethereum} = window

    if(ethereum){
        const signer = provider.getSigner();
        const contractReader = new ethers.Contract(addr, CustomTokenAbi.abi, signer);
        return contractReader;
    }
}

export const contract = async()=> {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const {ethereum} = window

    if(ethereum){
        const signer = provider.getSigner();
        const contractReader = new ethers.Contract(contractAddress, CustomDexAbi.abi, signer);
        return contractReader;
    }
}