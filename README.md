# MVHQ Gas Class Office Hours 
Material for the Office Hours in MVHQ on the 08.04.2022. Includes hardhat Config and Gas simulation script.

Step 1: Software Installation
- Download and install NodeJS from https://nodejs.org/en/download/
- Download and install Visual Studio Code from https://code.visualstudio.com/


Step 2: Hardhat setup
- Download the scripts from the repo and extract the folder onto the Desktop.
- Open cmd or Powershell and navigate INto the extracted folder with the command:
        ```cd ...```
        Everything you do below is folder specific, if you would like to start over, 
        Simply delete the folder and start over.
- Initialise NodeJS with the command:
        ```npm init```
- Install hardhat with the command:
        ```npm install --save-dev hardhat```
- Install all hardhat dependencies with the comand:
        ```npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers @openzeppelin/hardhat-upgrades```
    
Step 3: Configure the simulation scripts simulateGas.js and hardhatconfig.js with functions:  

- Impersonate accounts:
    ```await hre.network.provider.request({
            method: "hardhat_impersonateAccount",
            params: [contractOwner],
        });
        addr1 = await ethers.provider.getSigner(contractOwner);```





Step 4: Run the simulation with the command:
        ```npx hardhat test simulateGas```
