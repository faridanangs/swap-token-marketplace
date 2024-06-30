import { ethers, BigNumber } from "ethers";
import { contract, tokenContract } from "./contract"
import { toEth } from "./utils"
import { useAccount } from "wagmi";


export const contractAddress = "0xC20e7780F595dDF9f56f57b1f03C3FB6B9700405";


export async function swapEthToToken(tokenName, amount) {
    try {

        const tx = { value: toWei(amount) }

        const contractObj = await contract();
        const data = await contractObj.swapEthToToken(tokenName, tx);

        const receipt = await data.wait();
        return receipt;

    } catch (error) {
        return parseErrorMsg(error);
    }
}

export async function hashValidateAllowance(owner, tokenName, amount) {
    try {
        const contractObj = await contract();
        const addressT = await contractObj.getTokenAddress(tokenName);

        const tokenContractObj = await tokenContract(addressT);
        const data = await tokenContractObj.allowance(owner, owner);

        const result = BigNumber.from(data.toString()).gte(
            BigNumber.from(toWei(amount))
        )

        return result;

    } catch (error) {
        return parseErrorMsg(error);
    }
}

export async function getTotalSupply(tokenName) {
    try {
        const contractObj = await contract();
        const data = await contractObj.getTotalSupply(tokenName);
        console.log(data)
        return data;
    } catch (error) {
        return parseErrorMsg(error)
    }
}

function removeTrailingZeros(value) {
    let result = value.toString().replace(/\.?0+$/, '');
    return BigInt(result)
}

export async function swapTokenToEth(tokenName, amount) {
    try {

        const contractObj = await contract();
        const data = await contractObj.swapTokenToEth(tokenName, removeTrailingZeros(amount));

        const receipt = await data.await();

        return receipt;

    } catch (error) {
        return parseErrorMsg(error);
    }
}

export async function swapTokenToToken(srcToken, destToken, amount) {
    try {
        const contractObj = await contract();

        const data = await contractObj.swapTokenToToken(srcToken, destToken, amount);
        console.log(data, "data")
        const receipt = data.wait();
        console.log(receipt, "receipe")

        return receipt

    } catch (error) {
        return parseErrorMsg(error);
    }
}

export async function getTokenBalance(tokenName, address) {
    const contractObj = await contract();

    const balance = await contractObj.getBalance(tokenName, address);
    return balance;
}

export async function getTokenAddress(tokenName) {
    try {
        const contractObj = await contract();
        const address = await contractObj.getTokenAddress(tokenName);
        return address;
    } catch (error) {
        return parseErrorMsg(error)
    }
}

export async function increaseAllowance(tokenName, amount) {
    const { address } = useAccount()
    try {
        const contractObj = await contract();
        const addressT = await contractObj.getTokenAddress(tokenName);

        const tokenContractObj = await tokenContract(addressT);
        const data = await tokenContractObj.approve(address, toWei(amount));

        const receipe = await data.wait();
        return receipe;
    } catch (error) {
        return parseErrorMsg(error)
    }
}

export async function getAllHistory() {
    try {
        const contractObj = await contract();

        const getAllHistory = await contractObj.getAllHistory();

        const historyTransaction = getAllHistory.map((item, i) => {
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

function toWei(amount) {
    const toWei = ethers.utils.parseUnits(amount.toString(), 18);
    return toWei;
}

function parseErrorMsg(error) {
    const json = JSON.parse(JSON.stringify(error));
    return json?.reason || json?.error?.message;
}