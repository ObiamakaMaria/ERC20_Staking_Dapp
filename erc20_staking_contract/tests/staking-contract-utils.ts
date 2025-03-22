import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { changetype } from "assemblyscript"
import {
  EmergencyWithdrawn,
  OwnershipTransferred,
  Paused,
  RewardRateUpdated,
  RewardsClaimed,
  Staked,
  StakingInitialized,
  StakingPaused,
  StakingUnpaused,
  TokenRecovered,
  Unpaused,
  Withdrawn
} from "../generated/StakingContract/StakingContract"
import { User } from "../generated/schema"

export function createEmergencyWithdrawnEvent(
  user: Address,
  amount: BigInt,
  penalty: BigInt,
  timestamp: BigInt,
  newTotalStaked: BigInt
): EmergencyWithdrawn {
  let emergencyWithdrawnEvent = changetype<EmergencyWithdrawn>(newMockEvent())

  emergencyWithdrawnEvent.parameters = new Array()

  emergencyWithdrawnEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  emergencyWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  emergencyWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "penalty",
      ethereum.Value.fromUnsignedBigInt(penalty)
    )
  )
  emergencyWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  emergencyWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalStaked",
      ethereum.Value.fromUnsignedBigInt(newTotalStaked)
    )
  )

  return emergencyWithdrawnEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createRewardRateUpdatedEvent(
  oldRate: BigInt,
  newRate: BigInt,
  timestamp: BigInt,
  totalStaked: BigInt
): RewardRateUpdated {
  let rewardRateUpdatedEvent = changetype<RewardRateUpdated>(newMockEvent())

  rewardRateUpdatedEvent.parameters = new Array()

  rewardRateUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldRate",
      ethereum.Value.fromUnsignedBigInt(oldRate)
    )
  )
  rewardRateUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newRate",
      ethereum.Value.fromUnsignedBigInt(newRate)
    )
  )
  rewardRateUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  rewardRateUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "totalStaked",
      ethereum.Value.fromUnsignedBigInt(totalStaked)
    )
  )

  return rewardRateUpdatedEvent
}

export function createRewardsClaimedEvent(
  user: Address,
  amount: BigInt,
  timestamp: BigInt,
  newPendingRewards: BigInt,
  totalStaked: BigInt
): RewardsClaimed {
  let rewardsClaimedEvent = changetype<RewardsClaimed>(newMockEvent())

  rewardsClaimedEvent.parameters = new Array()

  rewardsClaimedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  rewardsClaimedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  rewardsClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  rewardsClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingRewards",
      ethereum.Value.fromUnsignedBigInt(newPendingRewards)
    )
  )
  rewardsClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "totalStaked",
      ethereum.Value.fromUnsignedBigInt(totalStaked)
    )
  )

  return rewardsClaimedEvent
}

export function createStakedEvent(
  user: Address,
  amount: BigInt,
  timestamp: BigInt,
  newTotalStaked: BigInt,
  currentRewardRate: BigInt
): Staked {
  let stakedEvent = changetype<Staked>(newMockEvent())

  stakedEvent.parameters = new Array()

  stakedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalStaked",
      ethereum.Value.fromUnsignedBigInt(newTotalStaked)
    )
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam(
      "currentRewardRate",
      ethereum.Value.fromUnsignedBigInt(currentRewardRate)
    )
  )

  return stakedEvent
}

export function createStakingInitializedEvent(
  stakingToken: Address,
  initialRewardRate: BigInt,
  timestamp: BigInt
): StakingInitialized {
  let stakingInitializedEvent = changetype<StakingInitialized>(newMockEvent())

  stakingInitializedEvent.parameters = new Array()

  stakingInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "stakingToken",
      ethereum.Value.fromAddress(stakingToken)
    )
  )
  stakingInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "initialRewardRate",
      ethereum.Value.fromUnsignedBigInt(initialRewardRate)
    )
  )
  stakingInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return stakingInitializedEvent
}

export function createStakingPausedEvent(timestamp: BigInt): StakingPaused {
  let stakingPausedEvent = changetype<StakingPaused>(newMockEvent())

  stakingPausedEvent.parameters = new Array()

  stakingPausedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return stakingPausedEvent
}

export function createStakingUnpausedEvent(timestamp: BigInt): StakingUnpaused {
  let stakingUnpausedEvent = changetype<StakingUnpaused>(newMockEvent())

  stakingUnpausedEvent.parameters = new Array()

  stakingUnpausedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return stakingUnpausedEvent
}

export function createTokenRecoveredEvent(
  token: Address,
  amount: BigInt,
  timestamp: BigInt
): TokenRecovered {
  let tokenRecoveredEvent = changetype<TokenRecovered>(newMockEvent())

  tokenRecoveredEvent.parameters = new Array()

  tokenRecoveredEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  tokenRecoveredEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  tokenRecoveredEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return tokenRecoveredEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}

export function createWithdrawnEvent(
  user: Address,
  amount: BigInt,
  timestamp: BigInt,
  newTotalStaked: BigInt,
  currentRewardRate: BigInt,
  rewardsAccrued: BigInt
): Withdrawn {
  let withdrawnEvent = changetype<Withdrawn>(newMockEvent())

  withdrawnEvent.parameters = new Array()

  withdrawnEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalStaked",
      ethereum.Value.fromUnsignedBigInt(newTotalStaked)
    )
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "currentRewardRate",
      ethereum.Value.fromUnsignedBigInt(currentRewardRate)
    )
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "rewardsAccrued",
      ethereum.Value.fromUnsignedBigInt(rewardsAccrued)
    )
  )

  return withdrawnEvent
}

/**
 * Helper function to get or create a user entity
 * @param userAddress - The address of the user as Bytes
 * @returns User entity
 * @throws Error if userAddress is invalid
 */
export function getOrCreateUser(userAddress: Bytes): User {
  // Validate input
  if (userAddress.length == 0) {
    throw new Error("Invalid user address: address cannot be empty")
  }

  // Try to load existing user
  let user = User.load(userAddress)
  
  // If user doesn't exist, create new one
  if (!user) {
    user = new User(userAddress)
    user.totalStaked = BigInt.fromString("0")
    user.lastStakeTimestamp = BigInt.fromString("0")
    user.pendingRewards = BigInt.fromString("0")
    user.totalRewardsClaimed = BigInt.fromString("0")
  }
  
  return user
}

/**
 * Helper function to create a mock event with basic metadata
 * @returns A new mock event with block and transaction metadata
 */
export function createMockEvent(): ethereum.Event {
  let mockEvent = newMockEvent()
  mockEvent.block.number = BigInt.fromString("1")
  mockEvent.block.timestamp = BigInt.fromString("1")
  mockEvent.transaction.hash = Bytes.fromHexString("0x1234")
  return mockEvent
}
