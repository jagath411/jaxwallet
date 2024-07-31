const { ethers } = require("hardhat");

const main = async () => {
  const Transactions = await ethers.getContractFactory("Transactions");

  // Deploy the contract
  const transactions = await Transactions.deploy();

  // Wait for deployment to finish
  await transactions.deployed();
  console.log("Transactions deployed to:", transactions.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
