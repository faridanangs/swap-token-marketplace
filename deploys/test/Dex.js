const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Swap Token", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Lock = await ethers.getContractFactory("CustomDex");
    const lock = await Lock.deploy();

    return { lock, owner, otherAccount };
  }

    it("Check Token BNB Balance and Total Supply", async function () {
      const { lock, owner } = await loadFixture(deployOneYearLockFixture);

      expect(await lock.getBalance("BNB", owner)).to.equal(0);
      expect(await lock.getTotalSupply("BNB")).to.equal(1000000000000000000000000n);
      expect(await lock.getTokenAddress("BNB")).to.equal("0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968");
      expect(await lock.getTokenAddress("TRON")).to.equal("0x603E1BD79259EbcbAaeD0c83eeC09cA0B89a5bcC");
      
    })

    it("Swap 10 Ether to 100,000,000,000,000,000,000,000 Token BNB", async () => {
      const { lock, owner } = await loadFixture(deployOneYearLockFixture);
    
      // Mengonversi 10 Ether ke BigInt menggunakan parseUnits
      const valueInWei = ethers.parseUnits("10", "ether");
    
      const tx = await lock.swapEthToToken("BNB", { value: valueInWei })
      await tx.wait();

      expect(await lock.getBalance("BNB", owner)).to.equal(100000000000000000000000n);
    });

    it("Retrieve 10 Eth Balance from Contract", async ()=> {
      const { lock } = await loadFixture(deployOneYearLockFixture);

      const valueInWei = ethers.parseUnits("10", "ether");
    
      const tx = await lock.swapEthToToken("BNB", { value: valueInWei })
      await tx.wait();
      
      expect(await lock.getEthBalance()).to.equal(10000000000000000000n);
    })

    it("Swap 100,000,000,000,000,000 Token BNB to 10 Ether", async () => {
      const { lock, owner } = await loadFixture(deployOneYearLockFixture);
    
      const valueInWei = ethers.parseEther("10");
      const tx = await lock.swapEthToToken("BNB", { value: valueInWei })
      await tx.wait();
    
      const tx2 = await lock.swapTokenToEth("BNB", 90000000000000000000000n)
      await tx2.wait();

      expect(await lock.getEthBalance()).to.equal(ethers.parseEther("1"));

    });
});
