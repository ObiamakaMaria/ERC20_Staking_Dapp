import { useEffect, useState } from 'react';
import client from './graphql/client';
import { GET_EMERGENCY_WITHDRAWN_EVENTS, GET_STAKED_EVENTS } from './graphql/queries';
import ConnectWallet from './components/ConnectWallet';
import StakingEvents from './components/StakingEvents';
import StakeButton from './components/StakeButton';

function App() {
  // const [emergencyWithdrawnEvents, setEmergencyWithdrawnEvents] = useState([]);
  // const [stakedEvents, setStakedEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const emergencyWithdrawnData = await client.request(GET_EMERGENCY_WITHDRAWN_EVENTS);
        const stakedData = await client.request(GET_STAKED_EVENTS);

        setEmergencyWithdrawnEvents(emergencyWithdrawnData.emergencyWithdrawns);
        setStakedEvents(stakedData.stakeds);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
    <h1>Staking Contract Interface</h1>
    <ConnectWallet />
    <StakeButton />
    <StakingEvents />
  </div>
  );
}

export default App;


