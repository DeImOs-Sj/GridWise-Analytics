export interface EnergySurplusResponse {
  time: string;
  surplus: number;
}
export interface SupplyDemandTrendResponse {
  time: string;
  supply: number;
  demand: number;
}
export interface P2pTransactionsResponse {
  time: string;
  energyTraded: number;
}
export interface SupplyDemandMismatchResponse {
  time: string;
  mismatch: number;
}
export interface ExpenditureRevenueForecastResponse {
  time: string;
  expenditure: number;
  revenue: number;
}
