import { useEffect, useState } from 'react';
import client from '../graphql/client';
import {
  GET_STAKED_EVENTS,
  GET_WITHDRAWN_EVENTS,
  GET_REWARDS_CLAIMED_EVENTS,
  GET_EMERGENCY_WITHDRAWN_EVENTS,
  GET_REWARD_RATE_UPDATED_EVENTS,
} from '../graphql/queries';

function StakingEvents() {
  const [stakedEvents, setStakedEvents] = useState([]);
  const [withdrawnEvents, setWithdrawnEvents] = useState([]);
  const [rewardsClaimedEvents, setRewardsClaimedEvents] = useState([]);
  const [emergencyWithdrawnEvents, setEmergencyWithdrawnEvents] = useState([]);
  const [rewardRateUpdatedEvents, setRewardRateUpdatedEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const stakedData = await client.request(GET_STAKED_EVENTS);
        const withdrawnData = await client.request(GET_WITHDRAWN_EVENTS);
        const rewardsClaimedData = await client.request(GET_REWARDS_CLAIMED_EVENTS);
        const emergencyWithdrawnData = await client.request(GET_EMERGENCY_WITHDRAWN_EVENTS);
        const rewardRateUpdatedData = await client.request(GET_REWARD_RATE_UPDATED_EVENTS);

        setStakedEvents(stakedData.stakeds);
        setWithdrawnEvents(withdrawnData.withdrawns);
        setRewardsClaimedEvents(rewardsClaimedData.rewardsClaimeds);
        setEmergencyWithdrawnEvents(emergencyWithdrawnData.emergencyWithdrawns);
        setRewardRateUpdatedEvents(rewardRateUpdatedData.rewardRateUpdateds);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Staking Events</h1>

      <h2>Staked Events</h2>
      <ul>
        {stakedEvents.map((event) => (
          <li key={event.id}>
            <p>User: {event.user}</p>
            <p>Amount: {event.amount}</p>
            <p>Timestamp: {new Date(event.timestamp * 1000).toLocaleString()}</p>
          </li>
        ))}
      </ul>

      <h2>Withdrawn Events</h2>
      <ul>
        {withdrawnEvents.map((event) => (
          <li key={event.id}>
            <p>User: {event.user}</p>
            <p>Amount: {event.amount}</p>
            <p>Timestamp: {new Date(event.timestamp * 1000).toLocaleString()}</p>
          </li>
        ))}
      </ul>

      <h2>Rewards Claimed Events</h2>
      <ul>
        {rewardsClaimedEvents.map((event) => (
          <li key={event.id}>
            <p>User: {event.user}</p>
            <p>Amount: {event.amount}</p>
            <p>Timestamp: {new Date(event.timestamp * 1000).toLocaleString()}</p>
          </li>
        ))}
      </ul>

      <h2>Emergency Withdrawn Events</h2>
      <ul>
        {emergencyWithdrawnEvents.map((event) => (
          <li key={event.id}>
            <p>User: {event.user}</p>
            <p>Amount: {event.amount}</p>
            <p>Penalty: {event.penalty}</p>
            <p>Timestamp: {new Date(event.timestamp * 1000).toLocaleString()}</p>
          </li>
        ))}
      </ul>

      <h2>Reward Rate Updated Events</h2>
      <ul>
        {rewardRateUpdatedEvents.map((event) => (
          <li key={event.id}>
            <p>Old Rate: {event.oldRate}</p>
            <p>New Rate: {event.newRate}</p>
            <p>Timestamp: {new Date(event.timestamp * 1000).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StakingEvents;