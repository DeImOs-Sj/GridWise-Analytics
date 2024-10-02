export interface TransactionResponse {
  time: string;
  demand: number;
  supply: number;
}

export interface EnergyResponse {
  time: string;
  energyTraded: number;
}

export interface RevenueResponse {
  time: string;
  revenueGenerated: number;
}

export interface RiskResponse {
  time: string;
  averageRisk: number;
}
