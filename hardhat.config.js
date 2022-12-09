require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.17",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/your-api-key",
      accounts: ["your-private-key"],
    },
  },
};
