import { ethers } from "ethers";

interface ChainAddresses {
  [contractName: string]: string;
}

const chainIds = {
  ganache: 5777,
  goerli: 5,
  hardhat: 31337,
  kovan: 42,
  mainnet: 1,
  rinkeby: 4,
  bscTestnet: 97,
  bscMainnet: 56,
  MaticTestnet: 80001,
  MaticMainnet: 137,
  ropsten: 3,
  mantleTestnet: 5001,
};

export const MantleTestnet: ChainAddresses = {
  oolongRouterAddress: "0x4df04E20cCd9a8B82634754fcB041e86c5FF085A",
  oolongFactoryAddress: "0xab740666e226cb5b6b451eb943b0257a7cb3ce0a",
  wethAddress: "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
};

export const GoerliTestnet: ChainAddresses = {
  oolongRouterAddress: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  oolongFactoryAddress: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
  wethAddress: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
};

export const chainIdToAddresses: {
  [id: number]: { [contractName: string]: string };
} = {
  [chainIds.mantleTestnet]: MantleTestnet,
  [chainIds.hardhat]: MantleTestnet,
  [chainIds.goerli]: GoerliTestnet,
};
