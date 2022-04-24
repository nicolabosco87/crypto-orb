import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    polygon: {
      url: "https://polygon-rpc.com/",
      accounts:
        process.env.POLYGON_PRIVATE_KEY !== undefined
          ? [process.env.POLYGON_PRIVATE_KEY]
          : [],
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts:
        process.env.POLYGON_PRIVATE_KEY !== undefined
          ? [process.env.POLYGON_PRIVATE_KEY]
          : [],
    },
    local: {
      url: `http://127.0.0.1:8545/`,
      accounts:
        process.env.LOCAL_PRIVATE_KEY !== undefined
          ? [process.env.LOCAL_PRIVATE_KEY]
          : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.POLYGON_API_KEY,
  },
};

export default config;
