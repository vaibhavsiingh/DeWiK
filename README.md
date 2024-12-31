# DeWik_V2


# Decentralized Wikipedia-Like Platform 

This project is a decentralized platform built on the Ethereum blockchain, designed to store and retrieve content in a distributed manner. It integrates **IPFS** for content storage and utilizes **The Graph** to index and query data efficiently. Smart contracts are deployed on the **Holesky testnet**, and **Pinata** is used for IPFS file management.

## Table of Contents
1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Smart Contract Development](#smart-contract-development)
6. [IPFS Integration with Pinata](#ipfs-integration-with-pinata)
7. [Subgraph Deployment](#subgraph-deployment)
8. [Testing on Holesky Testnet](#testing-on-holesky-testnet)
9. [Contributing](#contributing)
10. [License](#license)

---
### Important Links
- **[Deployed on Vercel](https://dewik.vercel.app/)**  
- **[Subgraph Endpoint](https://api.studio.thegraph.com/query/90743/dewik-v3/version/latest)**

---

### Preview of DeWik  
<p align="center">
  <img src="https://github.com/user-attachments/assets/67bef177-8250-42ee-81ca-5caf70f9d2a3" alt="DeWik Preview" width="600">
</p>

---

### DeWik Subgraph  
<p align="center">
  <img src="https://github.com/user-attachments/assets/8c1150ba-94ae-42b9-8031-3929e069f45f" alt="DeWik Subgraph 1" width="400">
  <img src="https://github.com/user-attachments/assets/561025d9-ed32-4bbd-8b7e-db4d7d04c183" alt="DeWik Subgraph 2" width="400">
</p>

---

## Overview

The project is a decentralized alternative to Wikipedia, where users can upload, store, and retrieve content in a distributed manner. The platform makes use of smart contracts to manage content metadata and integrates **IPFS** to handle storage off-chain. By using **The Graph's Subgraph Studio**, the system indexes blockchain data to enable fast querying for decentralized applications (dApps).

This platform leverages the **Holesky testnet** for smart contract deployment, ensuring a safe environment for testing before mainnet deployment. The **Pinata** service is used for managing IPFS uploads, providing a decentralized solution for content storage.

## Tech Stack

- **Smart Contracts**: Developed using Solidity and deployed with the Truffle framework.
- **Ethereum Network**: Holesky testnet for development and testing.
- **Frontend**: Built with React and integrated with Web3.js or Ethers.js to interact with the blockchain.
- **IPFS Storage**: Pinata is used as the gateway for managing files uploaded to IPFS.
- **Indexing and Querying**: The Graph Subgraph Studio is utilized to create a subgraph for fast data retrieval from the blockchain.

## Prerequisites

To work with this project, you need the following:

- **Node.js**: Required for JavaScript/TypeScript-based development.
- **Truffle**: Used for compiling, deploying, and managing smart contracts.
- **Metamask**: A wallet to interact with the Ethereum testnet.
- **Infura or Alchemy**: Services that provide RPC endpoints to connect with the Ethereum network.
- **Pinata API Keys**: For uploading and managing content stored on IPFS via Pinata.

## Installation

Clone the project repository and install the required dependencies. Configure your environment with necessary credentials such as Pinata API keys, Ethereum RPC URL, and your wallet’s private key for interacting with the testnet. This setup ensures proper integration with IPFS, Holesky, and The Graph.

## Smart Contract Development

The smart contracts are written in **Solidity** and handle key functions like content creation, metadata management, and user interactions. **Truffle** is used for compiling and deploying these contracts to the Holesky testnet. After deployment, the contracts can be interacted with through the frontend using Web3.js or Ethers.js.

## IPFS Integration with Pinata

For decentralized content storage, the platform uses **IPFS** with **Pinata**. Users can upload content like text, images, or other media to IPFS via Pinata’s API. The content hash generated from IPFS is stored in smart contracts for reference. This ensures that the content remains decentralized, immutable, and tamper-proof.

## Subgraph Deployment

The project uses **The Graph Subgraph Studio** to create an index of the deployed smart contracts. This allows for efficient querying of blockchain data related to content storage, retrieval, and user interactions. The subgraph is deployed and maintained using The Graph's CLI tools, enabling developers to easily fetch specific data in a decentralized manner.

## Testing on Holesky Testnet

The **Holesky testnet** is used for testing the smart contracts before moving to a live environment on the Ethereum mainnet. This ensures that any bugs or inefficiencies are addressed in a safe, low-stakes environment. Test ETH from faucets can be used to cover gas fees during deployment and interactions with the contracts.

## Contributing

We welcome contributions to this project. Fork the repository, create a feature branch, and submit a pull request for review. Make sure to follow best practices in blockchain development and ensure code quality.

## License

This project is licensed under the MIT License, ensuring that it is open-source and freely available to the developer community.
