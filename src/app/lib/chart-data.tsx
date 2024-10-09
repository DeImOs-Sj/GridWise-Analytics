// Energy Surplus (in MWh)
export const energySurplusResponse = [
  { time: "2024-09-01", surplus: 120 },
  { time: "2024-09-02", surplus: 150 },
  { time: "2024-09-03", surplus: 130 },
  { time: "2024-09-04", surplus: 140 },
  { time: "2024-09-05", surplus: 110 },
  { time: "2024-09-06", surplus: 160 },
  { time: "2024-09-07", surplus: 145 },
  { time: "2024-09-08", surplus: 170 },
  { time: "2024-09-09", surplus: 180 },
  { time: "2024-09-10", surplus: 155 },
];

// Supply vs. Demand Trend (in MWh)
export const supplyDemandTrendResponse = [
  { time: "2024-09-01", supply: 220, demand: 200 },
  { time: "2024-09-02", supply: 240, demand: 230 },
  { time: "2024-09-03", supply: 230, demand: 210 },
  { time: "2024-09-04", supply: 250, demand: 240 },
  { time: "2024-09-05", supply: 210, demand: 220 },
  { time: "2024-09-06", supply: 260, demand: 250 },
  { time: "2024-09-07", supply: 255, demand: 240 },
  { time: "2024-09-08", supply: 270, demand: 260 },
  { time: "2024-09-09", supply: 280, demand: 270 },
  { time: "2024-09-10", supply: 260, demand: 250 },
];

// P2P Energy Transactions (in MWh)
export const p2pTransactionsResponse = [
  { time: "2024-09-01", energyTraded: 50 },
  { time: "2024-09-02", energyTraded: 70 },
  { time: "2024-09-03", energyTraded: 65 },
  { time: "2024-09-04", energyTraded: 75 },
  { time: "2024-09-05", energyTraded: 55 },
  { time: "2024-09-06", energyTraded: 80 },
  { time: "2024-09-07", energyTraded: 78 },
  { time: "2024-09-08", energyTraded: 90 },
  { time: "2024-09-09", energyTraded: 95 },
  { time: "2024-09-10", energyTraded: 85 },
];

// Supply-Demand Mismatch (in MWh)
export const supplyDemandMismatchResponse = [
  { time: "2024-09-01", mismatch: 20 },
  { time: "2024-09-02", mismatch: 10 },
  { time: "2024-09-03", mismatch: 20 },
  { time: "2024-09-04", mismatch: 10 },
  { time: "2024-09-05", mismatch: -10 },
  { time: "2024-09-06", mismatch: 10 },
  { time: "2024-09-07", mismatch: 15 },
  { time: "2024-09-08", mismatch: 10 },
  { time: "2024-09-09", mismatch: 10 },
  { time: "2024-09-10", mismatch: 10 },
];

// Expenditure and Revenue Forecast (in USD)
export const expenditureRevenueForecastResponse = [
  { time: "2024-09-01", expenditure: 10000, revenue: 15000 },
  { time: "2024-09-02", expenditure: 11000, revenue: 16000 },
  { time: "2024-09-03", expenditure: 10500, revenue: 15500 },
  { time: "2024-09-04", expenditure: 11500, revenue: 16500 },
  { time: "2024-09-05", expenditure: 10200, revenue: 15200 },
  { time: "2024-09-06", expenditure: 12000, revenue: 17000 },
  { time: "2024-09-07", expenditure: 11800, revenue: 16800 },
  { time: "2024-09-08", expenditure: 12500, revenue: 17500 },
  { time: "2024-09-09", expenditure: 13000, revenue: 18000 },
  { time: "2024-09-10", expenditure: 12200, revenue: 17200 },
];

export const predictedEnergySurplusResponse = [
  { time: "2024-09-11", surplus: 165 },
  { time: "2024-09-12", surplus: 175 },
  { time: "2024-09-13", surplus: 160 },
  { time: "2024-09-14", surplus: 170 },
  { time: "2024-09-15", surplus: 185 },
  { time: "2024-09-16", surplus: 190 },
  { time: "2024-09-17", surplus: 195 },
  { time: "2024-09-18", surplus: 200 },
  { time: "2024-09-19", surplus: 205 },
  { time: "2024-09-20", surplus: 210 },
];

export const predictedSupplyDemandTrendResponse = [
  { time: "2024-09-11", supply: 265, demand: 255 },
  { time: "2024-09-12", supply: 268, demand: 262 },
  { time: "2024-09-13", supply: 272, demand: 266 },
  { time: "2024-09-14", supply: 278, demand: 268 },
  { time: "2024-09-15", supply: 283, demand: 273 },
  { time: "2024-09-16", supply: 288, demand: 277 },
  { time: "2024-09-17", supply: 292, demand: 283 },
  { time: "2024-09-18", supply: 298, demand: 285 },
  { time: "2024-09-19", supply: 305, demand: 290 },
  { time: "2024-09-20", supply: 310, demand: 296 },
];

export const predictedPeakDemandResponse = [
  { time: "2024-09-11", peakDemand: 225 },
  { time: "2024-09-12", peakDemand: 240 },
  { time: "2024-09-13", peakDemand: 265 },
  { time: "2024-09-14", peakDemand: 280 },
  { time: "2024-09-15", peakDemand: 245 },
  { time: "2024-09-16", peakDemand: 250 },
  { time: "2024-09-17", peakDemand: 265 },
  { time: "2024-09-18", peakDemand: 310 },
  { time: "2024-09-19", peakDemand: 301 },
  { time: "2024-09-20", peakDemand: 299 },
];

export const riskData = [
  { time: "2024-09-01", risk: 20 }, // 220 - 200
  { time: "2024-09-02", risk: 10 }, // 240 - 230
  { time: "2024-09-03", risk: 20 }, // 230 - 210
  { time: "2024-09-04", risk: 10 }, // 250 - 240
  { time: "2024-09-05", risk: 10 }, // 220 - 210
  { time: "2024-09-06", risk: 10 }, // 260 - 250
  { time: "2024-09-07", risk: 15 }, // 255 - 240
  { time: "2024-09-08", risk: 10 }, // 270 - 260
  { time: "2024-09-09", risk: 10 }, // 280 - 270
  { time: "2024-09-10", risk: 10 }, // 260 - 250
];

export const expenditureRevenueForecastResponsePrediction = [
  { time: "2024-09-11", expenditure: 12800, revenue: 18200 },
  { time: "2024-09-12", expenditure: 13400, revenue: 19000 },
  { time: "2024-09-13", expenditure: 13000, revenue: 18500 },
  { time: "2024-09-14", expenditure: 13500, revenue: 19200 },
  { time: "2024-09-15", expenditure: 14000, revenue: 19500 },
  { time: "2024-09-16", expenditure: 13600, revenue: 19000 },
  { time: "2024-09-17", expenditure: 14200, revenue: 19800 },
  { time: "2024-09-18", expenditure: 13800, revenue: 19600 },
  { time: "2024-09-19", expenditure: 14500, revenue: 20000 },
  { time: "2024-09-20", expenditure: 14000, revenue: 19800 },
];

export const turnoverResponse = [
  { time: "2024-09-11", turnover: 18200 },
  { time: "2024-09-12", turnover: 19000 },
  { time: "2024-09-13", turnover: 18500 },
  { time: "2024-09-14", turnover: 19200 },
  { time: "2024-09-15", turnover: 19500 },
  { time: "2024-09-16", turnover: 19000 },
  { time: "2024-09-17", turnover: 19800 },
  { time: "2024-09-18", turnover: 19600 },
  { time: "2024-09-19", turnover: 20000 },
  { time: "2024-09-20", turnover: 19800 },
];
