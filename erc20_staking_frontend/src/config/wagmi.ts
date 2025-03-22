import { http, createConfig } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { walletConnect, injected } from 'wagmi/connectors'

const projectId = import.meta.env.VITE_PROVIDER

if (!projectId) {
  throw new Error('Missing WalletConnect Project ID')
}

export const config = createConfig({
  chains: [sepolia],
  connectors: [
    injected(),
    walletConnect({
      projectId,
      showQrModal: true,
    }),
  ],
  transports: {
    [sepolia.id]: http(),
  },
}) 