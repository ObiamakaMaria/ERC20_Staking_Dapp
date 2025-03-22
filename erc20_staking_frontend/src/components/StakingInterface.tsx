import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { useStaking } from '../hooks/useStaking'
import { useStakingHistory } from '../hooks/useStakingHistory'
import { formatEther } from 'viem'

interface Stake {
  id: string
  amount: string
  timestamp: string
  isActive: boolean
  accumulatedRewards: string
  lastRewardCalculation: string
  stake: {
    id: string
    amount: string
    timestamp: string
    blockNumber: string
    transactionHash: string
    rewardRate: string
  }
}

interface User {
  stakes: Stake[]
  totalStaked: string
  pendingRewards: string
  totalRewardsClaimed: string
  lastRewardCalculation: string
}

export function StakingInterface() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const { stake, unstake, claimRewards, stakedBalance, rewards } = useStaking()
  const { data: userData } = useStakingHistory(address)

  if (!isConnected) {
    return (
      <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
        <h2 className="text-2xl font-semibold mb-6 text-white">Connect Wallet</h2>
        <div className="space-y-4">
          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => connect({ connector })}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Connect {connector.name}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
        <h2 className="text-2xl font-semibold mb-6 text-white">Staking</h2>
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-gray-300">Connected Address:</p>
            <p className="font-mono text-sm text-purple-300">{address}</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-gray-300">Total Staked:</p>
            <p className="text-2xl font-bold text-purple-300">
              {userData ? formatEther(userData.totalStaked) : '0'} TOKEN
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-gray-300">Pending Rewards:</p>
            <p className="text-2xl font-bold text-pink-300">
              {userData ? formatEther(userData.pendingRewards) : '0'} TOKEN
            </p>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => stake("1")}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Stake
            </button>
            <button
              onClick={() => unstake()}
              className="w-full bg-gradient-to-r from-red-500 to-rose-500 text-white py-3 px-6 rounded-xl hover:from-red-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Unstake
            </button>
            <button
              onClick={() => claimRewards()}
              className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-white py-3 px-6 rounded-xl hover:from-yellow-600 hover:to-amber-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Claim Rewards
            </button>
            <button
              onClick={() => disconnect()}
              className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white py-3 px-6 rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Disconnect
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
        <h2 className="text-2xl font-semibold mb-6 text-white">Staking History</h2>
        <div className="space-y-4 max-h-[500px] overflow-y-auto">
          {userData?.stakes.map((stake: Stake) => (
            <div key={stake.id} className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="font-semibold text-purple-300">
                Amount: {formatEther(stake.amount)} TOKEN
              </p>
              <p className="text-sm text-gray-400">
                Timestamp: {new Date(Number(stake.timestamp) * 1000).toLocaleString()}
              </p>
              <p className="text-sm text-gray-400">
                Status: {stake.isActive ? 'Active' : 'Inactive'}
              </p>
              <p className="text-sm text-gray-400">
                Accumulated Rewards: {formatEther(stake.accumulatedRewards)} TOKEN
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 