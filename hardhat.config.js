require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {
          "optimizer": {
            "enabled": true,
            "runs": 200,
          }
        }
      },
      {
        version: "0.8.9",
        settings: {
          "optimizer": {
            "enabled": true,
            "runs": 200,
          }
        }
      },
      {
        version: "0.8.8",
        settings: {
          "optimizer": {
            "enabled": true,
            "runs": 200,
          }
        }
      }
    ]
  },

  networks: {
    hardhat: {
      forking: {
        live: false,
        url: "https://eth-mainnet.alchemyapi.io/v2/vg3WQJGQlJ_PaoMQJPKHM4gnDtxf6a6F",  //TOCHANGE
        blockNumber:14521500  //TO CHANGE
      }
    },
  },
};