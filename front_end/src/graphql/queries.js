import { gql } from 'graphql-request';

export const GET_STAKED_EVENTS = gql`
  query GetStakedEvents {
    stakeds {
      id
      user
      amount
      timestamp
      newTotalStaked
      currentRewardRate
      blockNumber
      blockTimestamp
      transactionHash
    }
  }
`;

export const GET_WITHDRAWN_EVENTS = gql`
  query GetWithdrawnEvents {
    withdrawns {
      id
      user
      amount
      timestamp
      newTotalStaked
      currentRewardRate
      rewardsAccrued
      blockNumber
      blockTimestamp
      transactionHash
    }
  }
`;

export const GET_REWARDS_CLAIMED_EVENTS = gql`
  query GetRewardsClaimedEvents {
    rewardsClaimeds {
      id
      user
      amount
      timestamp
      newPendingRewards
      totalStaked
      blockNumber
      blockTimestamp
      transactionHash
    }
  }
`;

export const GET_EMERGENCY_WITHDRAWN_EVENTS = gql`
  query GetEmergencyWithdrawnEvents {
    emergencyWithdrawns {
      id
      user
      amount
      penalty
      timestamp
      newTotalStaked
      blockNumber
      blockTimestamp
      transactionHash
    }
  }
`;

export const GET_REWARD_RATE_UPDATED_EVENTS = gql`
  query GetRewardRateUpdatedEvents {
    rewardRateUpdateds {
      id
      oldRate
      newRate
      timestamp
      totalStaked
      blockNumber
      blockTimestamp
      transactionHash
    }
  }
`;