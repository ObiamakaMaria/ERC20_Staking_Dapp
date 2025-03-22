import React from 'react';
import { useAccount, useConfig } from 'wagmi';
import { Contract } from 'ethers';
import { stakingContractABI, stakingContractAddress } from '../constants/contract';
import { getEthersSigner } from '../utils/ethersAdapter';

function StakeButton() {
  const { address } = useAccount();
  const wagmiConfig = useConfig();

  const handleStake = async () => {
    if (!address) {
      alert('Please connect your wallet');
      return;
    }

    try {
      // Get the ethers.js signer
      const signer = await getEthersSigner(wagmiConfig);

      // Create a contract instance with the signer
      const contract = new Contract(
        stakingContractAddress,
        stakingContractABI,
        signer
      );

      // Call the stake function
      const tx = await contract.stake(100); // Replace with the amount to stake
      console.log('Stake transaction initiated:', tx.hash);

      // Wait for the transaction to be mined
      const receipt = await tx.wait();
      if (receipt.status === 1) {
        console.log('Stake transaction successful');
        alert('Stake successful!');
      } else {
        throw new Error('Transaction failed');
      }
    } catch (error) {
      console.error('Error staking:', error);
      alert('Failed to stake');
    }
  };

  return (
    <button onClick={handleStake}>Stake</button>
  );
}

export default StakeButton;