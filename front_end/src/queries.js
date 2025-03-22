import { gql } from 'graphql-request';

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

// Add more queries as needed