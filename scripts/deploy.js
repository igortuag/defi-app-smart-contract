const main = async () => {
  const transactionFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionContract = await transactionFactory.deploy();

  await transactionContract.deployed();

  console.log("Contract deployed to:", transactionContract.address);
};
