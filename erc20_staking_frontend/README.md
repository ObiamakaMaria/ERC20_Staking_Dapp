# ERC20 Staking DApp Frontend

A modern, responsive frontend for an ERC20 staking DApp built with React, Vite, and wagmi.

## Features

- Wallet connection using WalletConnect
- Stake and unstake ERC20 tokens
- Claim staking rewards
- View staking history using The Graph
- Responsive design with Tailwind CSS

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A deployed ERC20 staking contract
- A deployed Subgraph for the staking contract
- A WalletConnect project ID

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd erc20_staking_frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory with the following variables:
```env
VITE_STAKING_CONTRACT_ADDRESS=0x... # Your deployed contract address
VITE_SUBGRAPH_URL=http://localhost:8000/subgraphs/name/your-subgraph # Your Subgraph URL
VITE_PROVIDER=your-walletconnect-project-id # Your WalletConnect project ID
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Usage

1. Connect your wallet using the "Connect Wallet" button
2. View your staked balance and available rewards
3. Stake tokens by entering an amount and clicking "Stake"
4. Unstake tokens by clicking "Unstake"
5. Claim rewards by clicking "Claim Rewards"
6. View your staking history in the right panel

## Technologies Used

- React
- Vite
- TypeScript
- wagmi
- viem
- Tailwind CSS
- The Graph
- WalletConnect

## License

MIT
