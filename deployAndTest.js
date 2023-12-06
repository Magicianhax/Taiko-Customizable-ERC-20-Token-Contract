// scripts/deployAndTest.js
const { deployContract, runTests } = require('./helpers'); // You can create a helpers file with deployment and testing functions
const taikoConfig = require('../taiko-config');

async function main() {
  // Deploy the contract to Taiko Testnet
  const contractAddress = await deployContract(taikoConfig);

  // Run tests on the deployed contract
  await runTests(contractAddress, taikoConfig);
}

main();
