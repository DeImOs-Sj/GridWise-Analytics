"use client";
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
} from "recharts";
import { transactionResponse, energyResponse } from "../lib/chart-data";
import { TransactionResponse, EnergyResponse } from "../types/types";

const PeakDemandSupplyGraph = () => {
  const [transactiondata, setTransactionData] = useState<TransactionResponse[]>(
    []
  );
  const [energyData, setEnergyData] = useState<EnergyResponse[]>([]);
  const [radialData, setRadialData] = useState([]);

  useEffect(() => {
    // Fetch mock transaction data (Peak demand and supply)
    const fetchTransactionData = async () => {
      setTransactionData(transactionResponse);
    };

    // Fetch mock energy traded data (P2P energy traded)
    const fetchEnergyData = async () => {
      setEnergyData(energyResponse);
    };

    const fetchRadialData = async () => {
      const radialResponse = [
        { name: "2024-09-01", transactions: 3 },
        { name: "2024-09-02", transactions: 5 },
        { name: "2024-09-03", transactions: 4 },
      ];
      setRadialData(radialResponse);
    };

    fetchTransactionData();
    fetchRadialData();
    fetchEnergyData();
  }, []);

  return (
    <div className=" p-4 flex flex-row items-start space-x-8 w-[80%]">
      <div className="flex flex-col space-y-8 w-[60%]">
        {/* Energy Traded (P2P) Chart */}
        <div className="bg-white/10 p-4 w-full h-96 rounded-lg shadow-lg">
          <h2 className="font-bold text-xl text-white p-2">
            Energy Traded (P2P)
          </h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={energyData}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <XAxis dataKey="time" tick={{ fill: "white" }} />
              <YAxis tick={{ fill: "white" }} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="energyTraded"
                stroke="#F8C927"
                activeDot={{ r: 8 }}
                name="Energy Traded (kWh)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Peak Demand vs Peak Supply Chart */}
        <div className="bg-white/10 p-4 w-full h-96 rounded-lg shadow-lg">
          <h2 className="font-bold text-xl text-white p-2">
            Peak Demand vs Peak Supply
          </h2>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={transactiondata}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <XAxis dataKey="time" tick={{ fill: "white" }} />
              <YAxis tick={{ fill: "white" }} />
              <Tooltip />
              <Legend />
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
      </div>

      {/* Radial Bar Chart for Transactions */}
      <div className="bg-white/10 p-4 w-[30%] h-[90%] rounded-lg shadow-lg">
        <h2 className="font-bold text-xl text-white p-2">
          Number of Transactions for Peak Consumption
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="20%"
            outerRadius="80%"
            barSize={10}
            data={radialData}
            startAngle={180}
            endAngle={0}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, Math.max(...radialData.map((d) => d.transactions))]}
              angleAxisId={0}
              tick={{ fill: "white" }}
            />
            <RadialBar
              background
              dataKey="transactions"
              fill="#82ca9d"
              name="Transactions"
              cornerRadius={5}
            />
            <Tooltip />
            <Legend />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PeakDemandSupplyGraph;
