// // migrations/2_deploy_contracts.js
// const MyFirstContract = artifacts.require("MyFirstContract");

// module.exports = function(deployer) {
//   deployer.deploy(MyFirstContract, "Hello, Blockchain!");
// };

const MyContract = artifacts.require("SimpleStorage");

module.exports = function(deployer) {
  deployer.deploy(MyContract);
};
