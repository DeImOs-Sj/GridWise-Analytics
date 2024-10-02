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
} from "recharts";
import {
  energySurplusResponse,
  supplyDemandTrendResponse,
  p2pTransactionsResponse,
  supplyDemandMismatchResponse,
  expenditureRevenueForecastResponse,
} from "../lib/chart-data";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import {
  EnergySurplusResponse,
  SupplyDemandTrendResponse,
  P2pTransactionsResponse,
  SupplyDemandMismatchResponse,
  ExpenditureRevenueForecastResponse,
} from "../types/types";

const PeakDemandSupplyGraph = () => {
  const [energySurplusResponseData, setEnergySurplusResponseData] = useState<
    EnergySurplusResponse[]
  >([]);
  const [supplyDemandTrendResponseData, setSupplyDemandTrendResponseData] =
    useState<SupplyDemandTrendResponse[]>([]);
  const [p2pTransactionsResponseData, setP2pTransactionsResponseData] =
    useState<P2pTransactionsResponse[]>([]);
  const [
    supplyDemandMismatchResponseData,
    setSupplyDemandMismatchResponseData,
  ] = useState<SupplyDemandMismatchResponse[]>([]);
  const [
    expenditureRevenueForecastResponseData,
    setExpenditureRevenueForecastResponseData,
  ] = useState<ExpenditureRevenueForecastResponse[]>([]);

  useEffect(() => {
    // Fetch data and set the state
    const fetchData = async () => {
      // Simulating an API call
      setEnergySurplusResponseData(energySurplusResponse);
      setSupplyDemandTrendResponseData(supplyDemandTrendResponse);
      setP2pTransactionsResponseData(p2pTransactionsResponse);
      setSupplyDemandMismatchResponseData(supplyDemandMismatchResponse);
      setExpenditureRevenueForecastResponseData(
        expenditureRevenueForecastResponse
      );
    };

    fetchData();
  }, []);

  return (
    <div className="w-[80%]">
      <div id="24h" className="">
        <h1 className="font-bold py-4 uppercase">Analytics</h1>
        <div
          id="stats"
          className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div className="bg-white/10 to-white/5 p-6 rounded-lg">
            <div className="flex flex-row space-x-4 items-center">
              <div id="stats-1">
                <MdOutlineEnergySavingsLeaf size={40} />
              </div>
              <div>
                <p className="text-indigo-300 text-sm font-medium uppercase leading-4">
                  P2P Energy Trading
                </p>
                <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                  <span>1,200 kWh</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <div className="flex flex-row space-x-4 items-center">
              <div id="stats-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-10 h-10 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-teal-300 text-sm font-medium uppercase leading-4">
                  Total Revenue Generated
                </p>
                <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                  <span>$2,873.88</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <div className="flex flex-row space-x-4 items-center">
              <div id="stats-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-10 h-10 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-blue-300 text-sm font-medium uppercase leading-4">
                  Total Energy Sold
                </p>
                <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                  <span>+ 500 kWh</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols gap-[3.5rem] p-6">
        {/* Energy Traded (P2P) Chart */}
        <div className="bg-white/10 p-4 w-full h-96 rounded-lg shadow-lg col-span-2">
          <h2 className="font-bold  uppercase text-xl">Energy Surplus</h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={energySurplusResponseData}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <XAxis dataKey="time" tick={{ fill: "white" }} />
              <YAxis tick={{ fill: "white" }} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="surplus"
                stroke="#818cf8"
                activeDot={{ r: 8 }}
                name="Energy Surplus (kWh)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white/10 p-4 w-full h-96 rounded-lg shadow-lg">
          <h2 className="font-bold  uppercase text-xl">
            Supply vs. Demand Trend
          </h2>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={supplyDemandTrendResponseData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="time" tick={{ fill: "white" }} />
              <YAxis tick={{ fill: "white" }} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="demand"
                stroke="#818cf8"
                fill="#818cf8"
                fillOpacity={0.3}
              />
              <Area
                dataKey="supply"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white/10 p-4 w-full h-96 rounded-lg shadow-lg">
          <h2 className="font-bold  uppercase text-xl">
            P2P Energy Transactions{" "}
          </h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={p2pTransactionsResponseData}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <XAxis dataKey="time" tick={{ fill: "white" }} />
              <YAxis tick={{ fill: "white" }} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="energyTraded"
                stroke="#818cf8"
                activeDot={{ r: 8 }}
                name="Energy Traded (kWh)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white/10 p-4 w-full h-96 rounded-lg shadow-lg">
          <h2 className="font-bold  uppercase text-xl">
            Supply-Demand Mismatch
          </h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={supplyDemandMismatchResponseData}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <XAxis dataKey="time" tick={{ fill: "white" }} />
              <YAxis tick={{ fill: "white" }} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="mismatch"
                stroke="#818cf8"
                activeDot={{ r: 8 }}
                name="Mismatch Supply (kWh)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>{" "}
        <div className="bg-white/10 p-4 w-full h-96 rounded-lg shadow-lg">
          <h2 className="font-bold  uppercase text-xl">
            Expenditure and Revenue Forecast
          </h2>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={expenditureRevenueForecastResponseData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="time" tick={{ fill: "white" }} />
              <YAxis tick={{ fill: "white" }} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="expenditure"
                stroke="#818cf8"
                fill="#818cf8"
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
        </div>
      </div>
    </div>
  );
};

export default PeakDemandSupplyGraph;
