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

export interface PredictedEnergySurplusResponse {
  time: string;
  surplus: number;
}

export interface PredictedSupplyDemandTrendResponse {
  time: string;
  supply: number;
  demand: number;
}

export interface PredictedPeakDemandResponse {
  time: string;
  peakDemand: number;
}

export interface RiskData {
  time: string;
  risk: number;
}

export interface ExpenditureRevenueForecastResponsePrediction {
  time: string;
  expenditure: number;
  revenue: number;
}

export interface TurnoverResponse {
  time: string;
  turnover: number;
}

export interface AddTransaction {
  txId: string;
  powerType: string;
  gridAddress: string;
  powerAmount: number;
}

export interface RegisterChargingStation {
  stationId: number;
  stationName: string;
  latitude: number;
  longitude: number;
  powerRating: number;
}

export interface RegisterGrid {
  gridId: number;
  gridName: string;
  location: string;
  latitude: number;
  longitude: number;
  totalPowerCapacity: number;
}

export interface RegisterPowerGenerationPoint {
  plantId: number;
  plantName: string;
  plantType: string;
  latitude: number;
  longitude: number;
  powerProduction: number;
}
