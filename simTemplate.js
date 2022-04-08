const { config } = require("chai");
const { ethers, network } = require("hardhat");

const abi = [];
const contractAddress = "";
const contractOwner = "";
const minter = "";
const mintPrice = 0;  

describe("Starting Simulation", function () {
    
    it("Simulation 1", async function () {
        // Impersonating contract OWNER
        // await hre.network.provider.request({
        //     method: "hardhat_impersonateAccount",
        //     params: [contractOwner],
        // });
        // addr1 = await ethers.provider.getSigner(contractOwner);

        // Declaring contract
        const target = new ethers.Contract(contractAddress, abi);
        
        // SetSaleState Function
        //presaleChange = await target.connect(addr1).setAuctionSaleStartTime(1642010400);
        //presaleChange.wait();

        // Impersonating MINTER
        await hre.network.provider.request({
            method: "hardhat_impersonateAccount",
            params: [minter],
        });
        addr2 = await ethers.provider.getSigner(minter);

        // Setting transaction VALUE
        overrides = {};
        overrides.value = ethers.BigNumber.from((mintPrice * 1000000000000000000).toString());

        // Set the timestamp in the next block
        //await network.provider.send("evm_setNextBlockTimestamp", [1642010500]);

        // Mine a mint  
        // Mine a mint  

        // presaleChange = await target.connect(addr2).purchase(5, overrides); 
        // presaleChange.wait();

        // CHANGE MINT FUNTION AND ARGS
        estimation = await target.connect(addr2).estimateGas.purchase(1, overrides);

        console.log("       --------");
        console.log("  Now, JJ.....What are we minting?!?!?")
        console.log("  Gas consumption estimate: " + estimation);
    });
});
