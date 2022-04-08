# MVHQ Gas Class Office Hours 
Material for the Office Hours in MVHQ on the 08.04.2022. Includes hardhat Config and Gas simulation script.

**Step 1**: Software Installation
- Download and install NodeJS from https://nodejs.org/en/download/
- Download and install Visual Studio Code from https://code.visualstudio.com/


**Step 2**: Hardhat setup
- Download the scripts from the repo and extract the folder onto the Desktop.
- Open cmd or Powershell and navigate INTO the extracted folder with the command:
        ```cd ...```
        Everything you do below is folder specific, if you would like to start over, 
        Simply delete the folder and start over.
- Initialise NodeJS with the command:
        ```npm init```
- Install hardhat with the command:
        ```npm install --save-dev hardhat```
- Install all hardhat dependencies with the comand:
        ```npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers @openzeppelin/hardhat-upgrades```
    
**Step 3**: Configure the simulation scripts simulateGas.js and hardhatconfig.js with methods:     


- Print something in the command line

```
console.log("something");

```

- Declare contract:

```
const targetContract = new ethers.Contract("0x0000000000000000000000000000000000000000", abi);
```

- Impersonate accounts

```
await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: ["0x0000000000000000000000000000000000000000"],
});
address1 = await ethers.provider.getSigner("0x0000000000000000000000000000000000000000");
```

- Set timestamp of the next block

```

await network.provider.send("evm_setNextBlockTimestamp", [0000000000]);

```
- Whenever your transaction has a VALUE (payable amount in GWEI) set overrides as last function argument.


```

overrides = {};
overrides.value = ethers.BigNumber.from((mintPrice * 1000000000000000000).toString());


```

- Estimate the gas consumption on a transaction (DOES NOT mine the transaction)

```

estimation = await targetContract.connect(address1).estimateGas.functionName(FunctionArguments);

```


- Mine a transaction through an impersonation

```
transaction = await targetContract.connect(address1).functionname(functionArguments, overides);
transaction.wait();

```


**Step 4**: Run the simulation with the command:
        ```npx hardhat test simulateGas```
