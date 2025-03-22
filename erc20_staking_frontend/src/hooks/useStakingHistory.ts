import { useQuery } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { graphqlClient } from '../config/graphql'

const STAKING_HISTORY_QUERY = gql`
  query GetStakingHistory($address: String!) {
    user(id: $address) {
      stakes {
        id
        amount
        timestamp
        isActive
        accumulatedRewards
        lastRewardCalculation
        stake {
          id
          amount
          timestamp
          blockNumber
          transactionHash
          rewardRate
        }
      }
      totalStaked
      pendingRewards
      totalRewardsClaimed
      lastRewardCalculation
    }
  }
`

export function useStakingHistory(address?: string) {
  return useQuery({
    queryKey: ['stakingHistory', address],
    queryFn: async () => {
      if (!address) return null
      const data = await graphqlClient.request(STAKING_HISTORY_QUERY, {
        address: address.toLowerCase(),
      })
      return data.user
    },
    enabled: !!address,
  })
} 