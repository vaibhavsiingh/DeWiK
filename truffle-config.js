const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config(); // Load environment variables from .env file

module.exports = {
  networks: {
    holesky: {
      provider: () => new HDWalletProvider(
        process.env.MNEMONIC,                          // Your mnemonic (or you can use a private key instead)
        `https://eth-holesky.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`  // Holesky RPC URL from Alchemy
      ),
      network_id: 17000,   // Holesky's chain ID
      gas: 5500000,        // Gas limit
      confirmations: 2,    // Number of confirmations to wait between deployments
      timeoutBlocks: 200,  // Timeout for deployment
      skipDryRun: true     // Skip dry run before migrations
    }
  },
  compilers: {
    solc: {
      version: "0.5.1",    // Solidity compiler version
    }
  }
};
