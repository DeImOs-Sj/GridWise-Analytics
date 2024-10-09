"use client";
import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  XAxis,
  Legend,
  Line,
  YAxis,
  LineChart,
  Area,
} from "recharts";
import {
  predictedEnergySurplusResponse,
  predictedSupplyDemandTrendResponse,
  predictedPeakDemandResponse,
  riskData,
  expenditureRevenueForecastResponsePrediction,
  turnoverResponse,
} from "../lib/chart-data";
import {
  PredictedEnergySurplusResponse,
  PredictedSupplyDemandTrendResponse,
  PredictedPeakDemandResponse,
  RiskData,
  ExpenditureRevenueForecastResponsePrediction,
  TurnoverResponse,
} from "../types/types";

const Predictions = () => {
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];

  const data02 = [
    { name: "Group A", value: 2400 },
    { name: "Group B", value: 4567 },
    { name: "Group C", value: 1398 },
    { name: "Group D", value: 9800 },
    { name: "Group E", value: 3908 },
    { name: "Group F", value: 4800 },
  ];

  const [energySurplusData, setEnergySurplusData] = useState<
    PredictedEnergySurplusResponse[]
  >([]);
  const [supplyDemandData, setSupplyDemandData] = useState<
    PredictedSupplyDemandTrendResponse[]
  >([]);
  const [peakDemandData, setPeakDemandData] = useState<
    PredictedPeakDemandResponse[]
  >([]);
  const [riskDataState, setRiskDataState] = useState<RiskData[]>([]);
  const [expenditureRevenueData, setExpenditureRevenueData] = useState<
    ExpenditureRevenueForecastResponsePrediction[]
  >([]);
  const [turnoverData, setTurnoverData] = useState<TurnoverResponse[]>([]);

  // Using useEffect to fetch data on component mount
  useEffect(() => {
    const fetchEnergySurplusData = async () => {
      setEnergySurplusData(predictedEnergySurplusResponse);
    };

    const fetchSupplyDemandData = async () => {
      setSupplyDemandData(predictedSupplyDemandTrendResponse);
    };

    const fetchPeakDemandData = async () => {
      setPeakDemandData(predictedPeakDemandResponse);
    };

    const fetchRiskData = async () => {
      setRiskDataState(riskData);
    };

    const fetchExpenditureRevenueData = async () => {
      setExpenditureRevenueData(expenditureRevenueForecastResponsePrediction);
    };

    const fetchTurnoverData = async () => {
      setTurnoverData(turnoverResponse);
    };

    fetchEnergySurplusData();
    fetchSupplyDemandData();
    fetchPeakDemandData();
    fetchRiskData();
    fetchExpenditureRevenueData();
    fetchTurnoverData();
  }, []);

  return (
    <div className="  w-[80%]  h-full">
      <div>
        <div className="  p-8 w-full">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white/10  rounded-lg shadow-lg">
              <h2 className="font-bold text-center uppercase  p-2">
                Predicted Energy Surplus (kWh){" "}
              </h2>

              <ResponsiveContainer width="110%" height="87%">
                <AreaChart
                  data={energySurplusData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="surplus"
                    stroke="#82ca9d"
                    fill="rgba(130, 202, 157, 0.3)"
                    name="Surplus"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white/10  rounded-lg shadow-lg">
              <h2 className="font-bold text-center uppercase  p-2">
                Supply vs. Demand Prediction{" "}
              </h2>
              <ResponsiveContainer width="110%" height="87%">
                <AreaChart
                  data={supplyDemandData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="supply"
                    stroke="#8884d8"
                    fill="rgba(136, 132, 216, 0.3)"
                    name="Peak Supply"
                  />
                  <Area
                    type="monotone"
                    dataKey="demand"
                    stroke="#82ca9d"
                    fill="rgba(130, 202, 157, 0.3)"
                    name="Peak Demand"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Card 3 with AreaChart */}
            <div className="bg-white/10   rounded-lg shadow-lg">
              <h2 className="font-bold text-center uppercase  p-2">
                Peak Demand Prediction
              </h2>
              <ResponsiveContainer width="110%" height="87%">
                <AreaChart
                  data={peakDemandData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="peakDemand"
                    stroke="#8884d8"
                    fill="rgba(136, 132, 216, 0.3)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div>
              <div className="bg-white/10 p-6 rounded-lg shadow-md text-white w-[18rem] ">
                <h3 className="text-lg font-bold mb-4">
                  Financial Forecasting Metrics
                </h3>
                <div className="flex flex-col space-y-4">
                  {/* First Item */}
                  <div className="flex justify-between">
                    <div>
                      <p className="font-semibold">Revenue Prediction</p>
                      <p className="text-sm text-gray-400">50% Rate</p>
                    </div>
                    <p className="text-sm text-gray-400">2025</p>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-[#FF00FF] h-2 rounded-full"
                      style={{ width: "50%" }}
                    ></div>
                  </div>

                  {/* Second Item */}
                  <div className="flex justify-between">
                    <div>
                      <p className="font-semibold">Cost Prediction</p>
                      <p className="text-sm text-gray-400">80% Rate</p>
                    </div>
                    <p className="text-sm text-gray-400">2025</p>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-[#007BFF] h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>

                  {/* Third Item */}
                  <div className="flex justify-between">
                    <div>
                      <p className="font-semibold">Profitability Prediction</p>
                      <p className="text-sm text-gray-400">32% Rate</p>
                    </div>
                    <p className="text-sm text-gray-400">2025</p>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-[#00FF91] h-2 rounded-full"
                      style={{ width: "32%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div className="bg-white/10 p-4 rounded-lg shadow-md h-[20rem] ml-8 col-span-2">
            <div className="flex justify-between items-center mb-4 h-1">
              <h2 className="text-white text-lg font-bold">
                Average risk over time
              </h2>
              <button className="text-white bg-gray-800 px-3 py-1 rounded-md">
                Monthly
              </button>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={riskDataState}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <XAxis dataKey="time" tick={{ fill: "white" }} />
                <YAxis tick={{ fill: "white" }} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="risk"
                  stroke="#818cf8"
                  activeDot={{ r: 8 }}
                  name="Risk Level"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="relative bg-black/60 p-4 w-[20rem] h-[20rem] rounded-lg shadow-lg m-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={data01}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  stroke="#ffff"
                  fill="#818cf8"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div>
              <div className="absolute top-0 right-0 w-[10rem] h-[10rem] m-1">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      dataKey="value"
                      data={data02}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={50}
                      fill="#82ca9d"
                    />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <h2 className="font-bold text-xl text-white absolute top-0 right-0 m-1">
                Energy Traded (P2P)
              </h2>
            </div>
          </div>
          <div className="bg-white/10 p-4 rounded-lg shadow-md h-[20rem] ml-8 col-span-1">
            <h2 className="font-bold  uppercase text-xl">
              Expenditure and Revenue Forecast
            </h2>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={400}
                data={expenditureRevenueData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <XAxis dataKey="time" tick={{ fill: "white" }} />
                <YAxis tick={{ fill: "white" }} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="expenditure"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.3}
                />
                <Area
                  dataKey="revenue"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>{" "}
          <div className="bg-white/10 p-4 rounded-lg shadow-md h-[20rem] ml-8 col-span-2">
            <h2 className="font-bold  uppercase text-xl">TURNOVER</h2>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={turnoverData}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <XAxis dataKey="time" tick={{ fill: "white" }} />
                <YAxis tick={{ fill: "white" }} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="turnover"
                  stroke="#818cf8"
                  activeDot={{ r: 8 }}
                  name="Energy Traded (kWh)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predictions;
