import { useContractRead, useContractWrite, useWaitForTransaction } from 'wagmi'
import { parseEther, formatEther } from 'viem'
import { STAKING_CONTRACT_ABI, STAKING_CONTRACT_ADDRESS } from '../config/contracts'

export function useStaking() {
  const { data: stakedBalance, refetch: refetchStakedBalance } = useContractRead({
    address: STAKING_CONTRACT_ADDRESS,
    abi: STAKING_CONTRACT_ABI,
    functionName: 'stakedBalance',
    watch: true,
  })

  const { data: rewards, refetch: refetchRewards } = useContractRead({
    address: STAKING_CONTRACT_ADDRESS,
    abi: STAKING_CONTRACT_ABI,
    functionName: 'getRewards',
    watch: true,
  })

  const { write: stakeWrite } = useContractWrite({
    address: STAKING_CONTRACT_ADDRESS,
    abi: STAKING_CONTRACT_ABI,
    functionName: 'stake',
    onSuccess: () => {
      refetchStakedBalance()
      refetchRewards()
    },
  })

  const { write: unstakeWrite } = useContractWrite({
    address: STAKING_CONTRACT_ADDRESS,
    abi: STAKING_CONTRACT_ABI,
    functionName: 'unstake',
    onSuccess: () => {
      refetchStakedBalance()
      refetchRewards()
    },
  })

  const { write: claimWrite } = useContractWrite({
    address: STAKING_CONTRACT_ADDRESS,
    abi: STAKING_CONTRACT_ABI,
    functionName: 'claimRewards',
    onSuccess: () => {
      refetchRewards()
    },
  })

  const stake = async (amount: string) => {
    try {
      await stakeWrite({
        args: [parseEther(amount)],
      })
    } catch (error) {
      console.error('Error staking:', error)
      throw error
    }
  }

  const unstake = async () => {
    try {
      await unstakeWrite()
    } catch (error) {
      console.error('Error unstaking:', error)
      throw error
    }
  }

  const claimRewards = async () => {
    try {
      await claimWrite()
    } catch (error) {
      console.error('Error claiming rewards:', error)
      throw error
    }
  }

  return {
    stake,
    unstake,
    claimRewards,
    stakedBalance: stakedBalance ? formatEther(stakedBalance) : '0',
    rewards: rewards ? formatEther(rewards) : '0',
  }
} 