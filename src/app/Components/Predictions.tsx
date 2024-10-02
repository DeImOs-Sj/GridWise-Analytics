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
  transactionResponse,
  energyResponse,
  revenueResponse,
  riskResponse,
} from "../lib/chart-data";
import {
  TransactionResponse,
  EnergyResponse,
  RevenueResponse,
  RiskResponse,
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

  const [transactiondata, setTransactionData] = useState<TransactionResponse[]>(
    []
  );
  const [energyData, setEnergyData] = useState<EnergyResponse[]>([]);
  const [revenueData, setRevenueData] = useState<RevenueResponse[]>([]);
  const [riskData, setRiskData] = useState<RiskResponse[]>([]);

  useEffect(() => {
    const fetchTransactionData = async () => {
      setTransactionData(transactionResponse);
    };
    const fetchEnergyData = async () => {
      setEnergyData(energyResponse);
    };
    const fetchRevenueData = async () => {
      setRevenueData(revenueResponse);
    };
    const fetchRiskData = async () => {
      setRiskData(riskResponse);
    };
    fetchRiskData();
    fetchEnergyData();
    fetchRevenueData();
    fetchTransactionData();
  }, []);

  return (
    <div className="  w-[80%]  h-full">
      <div>
        <div className="  p-8 w-full">
          {/* Top Section: 3 Cards with AreaChart */}
          <div className="flex flex-row  items-center space-x-8 mb-8">
            {/* Card 1 with AreaChart */}
            <div className="bg-white/10 w-[20rem] h-[14rem] rounded-lg shadow-lg">
              <h2 className="font-bold text-center p-2">
                Demand And Supply Growth Rate
              </h2>

              <ResponsiveContainer width="110%" height="82%">
                <AreaChart
                  data={transactiondata}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="demand"
                    stroke="#8884d8"
                    fill="rgba(136, 132, 216, 0.3)"
                    name="Peak Demand"
                  />
                  <Area
                    type="monotone"
                    dataKey="supply"
                    stroke="#82ca9d"
                    fill="rgba(130, 202, 157, 0.3)"
                    name="Peak Supply"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Card 2 with AreaChart */}
            <div className="bg-white/10  w-[20rem] h-[14rem] rounded-lg shadow-lg">
              <h2 className="font-bold text-center p-2">
                Predicted YOY Revenue Generated
              </h2>
              <ResponsiveContainer width="110%" height="82%">
                <AreaChart
                  data={revenueData} // Replace with your second data set
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="revenueGenerated" // Corrected to match energy data structure
                    stroke="#ffc658"
                    fill="rgba(255, 198, 88, 0.3)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Card 3 with AreaChart */}
            <div className="bg-white/10  w-[20rem] h-[14rem] rounded-lg shadow-lg">
              <h2 className="font-bold text-center p-2">
                Predicted YOY Energy Traded
              </h2>
              <ResponsiveContainer width="110%" height="82%">
                <AreaChart
                  data={energyData} // Replace with your third data set
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="energyTraded"
                    stroke="#ffc658"
                    fill="rgba(255, 198, 88, 0.3)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div>
              <div className="bg-white/10 p-6 rounded-lg shadow-md text-white w-[18rem] ">
                <h3 className="text-lg font-bold mb-4">
                  Relationships by content type
                </h3>
                <div className="flex flex-col space-y-4">
                  {/* First Item */}
                  <div className="flex justify-between">
                    <div>
                      <p className="font-semibold">Personal Access</p>
                      <p className="text-sm text-gray-400">50% Rate</p>
                    </div>
                    <p className="text-sm text-gray-400">Nov 2023</p>
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
                      <p className="font-semibold">On-site Services</p>
                      <p className="text-sm text-gray-400">80% Rate</p>
                    </div>
                    <p className="text-sm text-gray-400">Nov 2023</p>
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
                      <p className="font-semibold">Network Connected</p>
                      <p className="text-sm text-gray-400">32% Rate</p>
                    </div>
                    <p className="text-sm text-gray-400">Nov 2023</p>
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

        {/* </div> */}
        {/* New Row Content */}
        <div className="flex h-full">
          <div className="bg-white/10 p-4 rounded-lg shadow-md w-[70%] h-[20rem] ml-8">
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
                data={riskData}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <XAxis dataKey="time" tick={{ fill: "white" }} />
                <YAxis tick={{ fill: "white" }} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="averageRisk"
                  stroke="#F8C927"
                  activeDot={{ r: 8 }}
                  name="Energy Traded (kWh)"
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
                  fill="#8884d8"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div>
              {/* Attached Chart on Top Right */}
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
            {/* fdfnkdsjfnkdsfjndskjnksndfkdsjn */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predictions;
