import { HardhatRuntimeEnvironment, Network } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { utils } from "ethers";
import { chainIdToAddresses } from "../networkVariables";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();
  // get current chainId
  const chainId = parseInt( await hre.getChainId() );
  console.log("chain id is "+chainId)
  const addresses = chainIdToAddresses[ chainId ];
  

  const standardTokenFactory = await deploy("StandardTokenFactory", {
    from: deployer,
    log: true,
  } );
  

  //latest changes from mayur

  const feeToSetter = "0x20613aBe93e4611Cf547b4395E4248c6129c8697";

  const landingPoolFactory = await deploy( "LendingPoolFactory", {
    args: [
      feeToSetter
    ],
    from: deployer,
    log: true,
  } );

  const stackingPoolFactory = await deploy( "StakingPoolFactory", {
    args: [
      feeToSetter
    ],
    from: deployer,
    log: true,
  } );

  const mSwapPoolFactory = await deploy( "MSwapFactory", {
    args: [
      feeToSetter
    ],
    from: deployer,
    log: true,
  } );
  
  const liquidityTokenFactory = await deploy("LiquidityTokenFactory", {
    from: deployer,
    log: true,
  } );
  
  await deploy("CreateManage", {
    args: [
      deployer,
      addresses.oolongRouterAddress,
      standardTokenFactory.address,
      liquidityTokenFactory.address,
    ],
    from: deployer,
    log: true,
  } );
  
  const lpLocker = await deploy("LPLocker", {
    args: [deployer, utils.parseEther("0.01")],
    from: deployer,
    log: true,
  } );
  
  const presaleFactory = await deploy("PresaleFactory", {
    from: deployer,
    log: true,
  } );
  
  await deploy("PresaleManage", {
    args: [
      deployer,
      lpLocker.address,
      addresses.oolongFactoryAddress,
      addresses.oolongRouterAddress,
      addresses.wethAddress,
      presaleFactory.address,
    ],
    from: deployer,
    log: true,
  } );
  
  await deploy("TokenLocker", {
    args: [deployer, utils.parseEther("0.01")],
    from: deployer,
    log: true,
  });
};

export default func;
func.tags = [
  "StandardTokenFactory",
  "LiquidityTokenFactory",
  "CreateManage",
  "LPLocker",
  "PresaleFactory",
  "PresaleManage",
  "TokenLocker",
];
