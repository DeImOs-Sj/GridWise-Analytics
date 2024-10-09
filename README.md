# UEI Gridwise Analytics

## Project Overview

The **UEI Gridwise Analytics** project is designed to assist Charlie, the Assistant Chief of the Distribution Company, in managing the city’s energy grid effectively. This project leverages Solana’s blockchain technology to create a transparent, reliable, and efficient system for tracking energy surplus, P2P transactions, and overall grid performance. Our analytics dashboard provides critical insights through various charts and graphs, enabling informed decision-making regarding energy production, consumption, and distribution.

## Problem Statement

Charlie requires a dashboard that accurately displays:

- The energy surplus from distributed sources.
- Trends in P2P transactions over time, including:
  - Peak demand and supply.
  - Supply-demand mismatch.
  - Quantum of energy traded.
- Predictions for expenditures and revenues.
- The amount of renewable energy consumed.

## Assumptions

1. **Integration with Solana**: The UEI system is integrated with Solana, utilizing its capabilities for secure and transparent data management.
2. **Smart Contracts for Tracking**: Energy units are tracked using Solana smart contracts, which are responsible for registering grid data and transactions.
3. **Dummy Data for Testing**: Sample transactions and dummy data are created to simulate real-world scenarios and validate the functionality of the analytics dashboard.



### Data Flow

1. **Smart Contract Registration**: Grids are registered through a smart contract deployed on the Solana blockchain, allowing for secure and tamper-proof data storage.
2. **Data Retrieval**: The backend system queries the blockchain for transaction data related to energy units, including supply, demand, and transaction history.
3. **Data Processing**: The fetched data is processed to extract relevant metrics that inform Charlie's decision-making.

## Dashboard Analytics

The analytics dashboard aggregates data from the Solana ledger and presents it in a user-friendly format. Key features include:

- **Charts and Graphs**: Various visualizations such as bar charts, line graphs, and pie charts illustrate:
  - Energy surplus trends.
  - P2P transaction statistics over time.
  - Comparisons of peak demand and supply.
  - Renewable energy consumption metrics.
- **Real-Time Updates**: The dashboard provides real-time updates on grid performance and transaction data, enabling timely interventions.

## Sample Transactions and Dummy Data

We have created a Solana blockchain-based ledger containing sample transactions to demonstrate the functionality of the system. This includes:

- **Grid Registrations**: Dummy data representing grid registrations through the smart contract.
- **Transaction History**: Sample transactions showcasing energy trades, P2P exchanges, and surplus energy distributions.

### Example Data Structure

```json
[
  {
    "transactionId": "abc123",
    "timestamp": "2024-10-10T10:00:00Z",
    "energyTraded": 100,
    "gridId": "grid1",
    "type": "P2P",
    "price": 0.05
  },
  {
    "transactionId": "def456",
    "timestamp": "2024-10-10T11:00:00Z",
    "energyTraded": 150,
    "gridId": "grid2",
    "type": "Supply",
    "price": 0.07
  }
]
