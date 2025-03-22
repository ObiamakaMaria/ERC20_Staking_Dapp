import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from './config/wagmi'
import { StakingInterface } from './components/StakingInterface'

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-5xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              ERC20 Staking DApp
            </h1>
            <p className="text-center text-gray-300 mb-8">Stake your tokens and earn rewards</p>
            <StakingInterface />
          </div>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
