import dotenv from "dotenv";
dotenv.config();
import { parseEther } from "@ethersproject/units";

import { HardhatUserConfig } from "hardhat/types";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "hardhat-abi-exporter";
import "hardhat-tracer";

const config: HardhatUserConfig = {
  solidity: {

    compilers: [
      {
        version: "0.8.7",
        settings: {
            optimizer: {
              enabled: true,
              runs: 5000,
          },
        },
          
      },
      {
        version: "0.8.13",
        settings: {
            optimizer: {
              enabled: true,
              runs: 5000,
          },
        },
      },
    ],
    // version: "0.8.7",
  
  },
  namedAccounts: {
    deployer: 0,
  },
  defaultNetwork: "mantleTestnet",
  networks: {
    local: {
      url: "http://127.0.0.1:8545",
      accounts: [process.env.DEPLOYER_PRIVATE_KEY!],
    },
    hardhat: {
      forking: {
        url: "https://rpc.testnet.mantle.xyz",
      },
      accounts: [
        {
          privateKey: process.env.DEPLOYER_PRIVATE_KEY!,
          balance: parseEther("100").toString(),
        },
      ],
    },
    mantleTestnet: {
      url: "https://rpc.testnet.mantle.xyz",
      accounts: [process.env.DEPLOYER_PRIVATE_KEY!],
    },
    // goerli: {
    //   url: process.env.GOERLI_RPC_URL!,
    //   accounts: [process.env.DEPLOYER_PRIVATE_KEY!],
    // },
    scrollSepolia: {
      url: "https://sepolia-rpc.scroll.io"!,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY!],
    },
  },
  mocha: {
    timeout: 200000,
  },
};

export default config;
