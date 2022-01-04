// https://eth-rinkeby.alchemyapi.io/v2/Ixslc7rIFNVhmktXGpqktFjYag2stB4d

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.11",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/Ixslc7rIFNVhmktXGpqktFjYag2stB4d",
      accounts: [
        "fb2bb65528ff792d4b347a81659a15544d7e2233d1f84480dfdfa0dd7a281009",
      ],
    },
  },
};
