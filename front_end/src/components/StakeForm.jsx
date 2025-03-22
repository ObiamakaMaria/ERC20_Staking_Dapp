import React, { useState } from 'react';
import { useAccount, useConfig } from 'wagmi';
import { Contract, parseEther } from 'ethers';
import { stakingContractABI, stakingContractAddress } from '../constants/contract';
import { getEthersSigner } from '../utils/ethersAdapter';

function StakeForm() {
  const { address } = useAccount();
  const wagmiConfig = useConfig();
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleStake = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!address) {
      setError('Please connect your wallet');
      setIsLoading(false);
      return;
    }

    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      setError('Please enter a valid amount');
      setIsLoading(false);
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

      // Convert amount to wei (assuming 18 decimals)
      const amountInWei = parseEther(amount);

      // Call the stake function
      const tx = await contract.stake(amountInWei);
      console.log('Stake transaction initiated:', tx.hash);

      // Wait for the transaction to be mined
      const receipt = await tx.wait();
      if (receipt.status === 1) {
        console.log('Stake transaction successful');
        setAmount('');
        alert('Stake successful!');
      } else {
        throw new Error('Transaction failed');
      }
    } catch (error) {
      console.error('Error staking:', error);
      setError(error.message || 'Failed to stake');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleStake} className="space-y-6">
      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
          Amount to Stake
        </label>
        <div className="relative">
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount to stake"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
            step="any"
            min="0"
            required
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500">TOKENS</span>
          </div>
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-sm mt-2">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-4 px-6 rounded-xl text-white font-medium text-lg transition-all duration-300
          ${isLoading 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
          }`}
      >
        {isLoading ? 'Staking...' : 'Stake Tokens'}
      </button>
    </form>
  );
}

export default StakeForm; 