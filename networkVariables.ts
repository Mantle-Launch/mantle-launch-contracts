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
  scrollSepolia:534351
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

export const ScrollSepoliaTestnet: ChainAddresses = {
  oolongRouterAddress: "0x17AFD0263D6909Ba1F9a8EAC697f76532365Fb95",
  oolongFactoryAddress: "0xB856587fe1cbA8600F75F1b1176E44250B11C788",
  wethAddress: "0x5300000000000000000000000000000000000004",
};

export const chainIdToAddresses: {
  [id: number]: { [contractName: string]: string };
} = {
  [chainIds.mantleTestnet]: MantleTestnet,
  [chainIds.hardhat]: MantleTestnet,
  [chainIds.goerli]: GoerliTestnet,
  [chainIds.scrollSepolia]: ScrollSepoliaTestnet,
};
