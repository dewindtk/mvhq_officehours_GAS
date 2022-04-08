require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-waffle");

YOURAPIKEY = "xbNNi6QORYH95QoC6vIDF81fdb52fTbe"

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
        url: "https://eth-mainnet.alchemyapi.io/v2/"+YOURAPIKEY,  //TOCHANGE
        blockNumber: 13988073  //TO CHANGE
      }
    },
  },
};