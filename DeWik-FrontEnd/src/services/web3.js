import { ethers } from "ethers";

export const getProvider = async () => {
    if (!window.ethereum) {
        throw new Error('No Ethereum provider found. Install MetaMask!');
    }

    try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        return new ethers.BrowserProvider(window.ethereum);
    } catch (error) {
        console.error('User denied account access');
        throw error;
    }
};

export const getContract = async (abi, contractAddress) => {
    try {
        const provider = await getProvider();
        const signer = await provider.getSigner();
        
        // Log for debugging
        console.log('Connected address:', await signer.getAddress());
        
        const contract = new ethers.Contract(contractAddress, abi, signer);
        
        // Log available functions
        console.log('Available contract functions:', contract);
        
        return contract;
    } catch (error) {
        console.error('Error creating contract instance:', error);
        throw error;
    }
};