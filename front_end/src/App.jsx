import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import client from './graphql/client';
import { GET_EMERGENCY_WITHDRAWN_EVENTS, GET_STAKED_EVENTS } from './graphql/queries';
import ConnectWallet from './components/ConnectWallet';
import StakingEvents from './components/StakingEvents';
import StakeButton from './components/StakeButton';
import Layout from './components/Layout';
import StakeForm from './components/StakeForm';

function App() {
  const [emergencyWithdrawnEvents, setEmergencyWithdrawnEvents] = useState([]);
  const [stakedEvents, setStakedEvents] = useState([]);

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
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={
            <div className="w-full space-y-16">
              {/* Hero Section */}
              <section className="text-center animate-fade-in">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
                  <div className="relative">
                    <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                      Welcome to Staking DApp
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                      Connect your wallet to start staking your tokens and earn rewards in a secure and efficient way
                    </p>
                    <div className="flex justify-center">
                      <div className="transform transition-all duration-300 hover:scale-105">
                        <ConnectWallet />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Staking Section */}
              <section className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl blur-3xl"></div>
                <div className="relative max-w-3xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                      Stake Your Tokens
                    </h2>
                    <p className="text-lg text-gray-600">
                      Start earning rewards by staking your tokens in our secure platform
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-8 shadow-2xl border border-blue-100/50">
                    <div className="transform transition-all duration-500 hover:scale-[1.02]">
                      <StakeButton />
                    </div>
                  </div>
                </div>
              </section>

              {/* Events Section */}
              <section className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-3xl blur-3xl"></div>
                <div className="relative max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                      Staking Events
                    </h2>
                    <p className="text-lg text-gray-600">
                      Track your staking activities and rewards in real-time
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-white to-purple-50/50 rounded-3xl p-8 shadow-2xl border border-purple-100/50">
                    <div className="transform transition-all duration-500 hover:scale-[1.02]">
                      <StakingEvents />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          } />
          
          <Route path="/stake" element={
            <div className="w-full max-w-3xl mx-auto">
              <section className="text-center animate-fade-in">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
                  <div className="relative">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      Stake Your Tokens
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Start earning rewards by staking your tokens in our secure platform
                    </p>
                    <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-8 shadow-2xl border border-blue-100/50">
                      <div className="transform transition-all duration-500 hover:scale-[1.02]">
                        <StakeForm />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          } />
          
          <Route path="/rewards" element={
            <div className="w-full max-w-4xl mx-auto">
              <section className="text-center animate-fade-in">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-3xl"></div>
                  <div className="relative">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      Your Rewards
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Track and manage your staking rewards
                    </p>
                    <div className="bg-gradient-to-br from-white to-purple-50/50 rounded-3xl p-8 shadow-2xl border border-purple-100/50">
                      <div className="transform transition-all duration-500 hover:scale-[1.02]">
                        <StakingEvents />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


