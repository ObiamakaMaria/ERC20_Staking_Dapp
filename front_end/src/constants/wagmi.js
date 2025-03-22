import { createConfig, http } from 'wagmi';
import { sepolia } from 'wagmi/chains';
// import { walletConnect } from 'wagmi/connectors';

export const supportedNetworks = [sepolia];

export const config = createConfig({
  chains: supportedNetworks,
  connectors: [
    // walletConnect({ projectId: import.meta.env.VITE_REOWN_PROJECT_ID }),
  ],
  transports: {
    [sepolia.id]: http(),
  },
});
