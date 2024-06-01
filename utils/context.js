import {ethers, BigNumber} from "ethers";
import {contract, tokenContract} from "./contract"
import {toEth} from "./utils"


export const contractAddress = "0x6b2bae86f2D01a7a128040dc0f32d0e82CE9f144";


export async function swapEthToToken(tokenName, amount){
    try {
        const tx = {value: toEth(amount)}

        const contractObj = await contract();
        const data = await contractObj.swapEthToToken(tokenName, tx);

        const receipt = await data.wait();
        return receipt;

    } catch (error) {
        return parseErrorMsg(error);
    }
}

export async function hashValidateAllowance(owner, tokenName, amount){
    try {
        const contractObj = await contract();
        const address = contractObj.getTokenAddress(tokenName);

        const tokenContractObj = await tokenContract(address);
        const data = await tokenContractObj.allowance(owner, contractAddress);
        
        const result = BigNumber.from(data.toString()).gte(
            BigNumber.from(toWei(amount))
        )

        return result;
        
    } catch (error) {
        return parseErrorMsg(error);
    }
}

export async function swapTokenToEth(tokenName, amount) {
    try {
        const contractObj = await contract();
        const data = await contractObj.swapTokenToEth(tokenName, toWei(amount));
        
        const receipt = await data.await();
        return receipt;

    } catch (error) {
        return parseErrorMsg(error);
    }
}

export async function swapTokenToToken(srcToken, destToken, amount){
    try {
        const contractObj = await contract();

        const data = await contractObj.swapTokenToToken(srcToken, destToken, toWei(amount));
        const receipt = data.wait();
        return receipt

    } catch (error) {
        return parseErrorMsg(error);
    }
}

export async function getTokenBalance(tokenName, address){
    const contractObj = await contract();
    console.log(address ,tokenName, "cntct objs")

    const balance = await contractObj.getBalance(tokenName, address);
    return balance;
}

export async function getTokenAddress(tokenName){
    try {
        const contractObj = await contract();
        console.log( tokenName, "cntct obj")
        const address = await contractObj.getTokenAddress(tokenName);
        return address;
    } catch (error) {
        return parseErrorMsg(error)
    }
}

export async function increaseAllowance(tokenName, amount){

    try {
        const contractObj = await contract();
        const address = contractObj.getTokenAddress(tokenName);

        const tokenContractObj = await tokenContract(address);
        const data = await tokenContractObj.approve(contractAddress, toWei(amount));
        
        const receipe = await data.wait();
        return receipe;
    } catch (error) {
        return parseErrorMsg(error)
    }
}

export async function getAllHistory(){
    try {
        const contractObj = await contract();

        const getAllHistory = await contractObj.getAllHistory();

        const historyTransaction = getAllHistory.map((item, i)=> {
            return {
                historyId: item.historyId.toNumber(),
                tokenA: item.tokenA,
                tokenB: item.tokenB,
                inputValue: toEth(item?.inputValue),
                outputValue: toEth(item?.outputValue),
                userAddress: item.userAddress
            }
        })
        
        return historyTransaction;
    } catch (error) {
        return parseErrorMsg(error)
    }
}

function toWei(amount){
    const toWei = ethers.utils.parseUnits(amount.toString());
    return toWei;
}

function parseErrorMsg(error){
    const json = JSON.parse(JSON.stringify(error));
    return json?.reason || json?.error?.message;
}