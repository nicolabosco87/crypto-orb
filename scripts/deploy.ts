import * as path from "path";

import { artifacts, ethers } from "hardhat";

// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { Contract } from "ethers";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const CryptoOrb = await ethers.getContractFactory("CryptoOrb");
  const CryptoOrbToken = await CryptoOrb.deploy();
  await CryptoOrbToken.deployed();

  console.log("CryptoOrb deployed to:", CryptoOrbToken.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(CryptoOrbToken);
}

function saveFrontendFiles(token: Contract) {
  const fs = require("fs");
  const contractsDir = path.join(__dirname, "/../frontend/src/contracts");

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify({ Token: token.address }, undefined, 2)
  );

  const TokenArtifact = artifacts.readArtifactSync("CryptoOrb");

  fs.writeFileSync(
    contractsDir + "/CryptoOrb.json",
    JSON.stringify(TokenArtifact, null, 2)
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
