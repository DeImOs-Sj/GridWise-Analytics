"use client";
import React from "react";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
const Main = async () => {
  return (
    <div className="w-[80%]">
      <div id="content" className=" col-span-9 rounded-lg p-6">
        <div id="24h">
          <h1 className="font-bold py-4 uppercase">Statistics</h1>
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
                    Total Energy Surplus
                  </p>
                  <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                    <span>1,200 kWh</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
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
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
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
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
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
        <div id="last-incomes">
          <h1 className="font-bold py-4 uppercase">Energy sold in last 24H</h1>
          <div
            id="stats"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <div className="bg-white/10 to-white/5 rounded-lg">
              <div className="flex flex-row items-center">
                <div className="text-3xl p-4">💰</div>
                <div className="p-2">
                  <p className="text-xl font-bold">348$</p>
                  <p className="text-gray-500 font-medium">Amber Gates</p>
                  <p className="text-gray-500 text-sm">24 Sept 2024</p>
                </div>
              </div>
              <div className="border-t border-white/5 p-4">
                <a
                  href="#"
                  className="inline-flex space-x-2 items-center text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                  <span>Info</span>
                </a>
              </div>
            </div>
            <div className="bg-white/10 to-white/5 rounded-lg">
              <div className="flex flex-row items-center">
                <div className="text-3xl p-4">💰</div>
                <div className="p-2">
                  <p className="text-xl font-bold">68$</p>
                  <p className="text-gray-500 font-medium">Maia Kipper</p>
                  <p className="text-gray-500 text-sm">23 Sept 2024</p>
                </div>
              </div>
              <div className="border-t border-white/5 p-4">
                <a
                  href="#"
                  className="inline-flex space-x-2 items-center text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                  <span>Info</span>
                </a>
              </div>
            </div>
            <div className="bg-white/10 to-white/5 rounded-lg">
              <div className="flex flex-row items-center">
                <div className="text-3xl p-4">💰</div>
                <div className="p-2">
                  <p className="text-xl font-bold">12$</p>
                  <p className="text-gray-500 font-medium">Oprah Milles</p>
                  <p className="text-gray-500 text-sm">23 Sept 2024</p>
                </div>
              </div>
              <div className="border-t border-white/5 p-4">
                <a
                  href="#"
                  className="inline-flex space-x-2 items-center text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                  <span>Info</span>
                </a>
              </div>
            </div>
            <div className="bg-white/10 to-white/5 rounded-lg">
              <div className="flex flex-row items-center">
                <div className="text-3xl p-4">💰</div>
                <div className="p-2">
                  <p className="text-xl font-bold">105$</p>
                  <p className="text-gray-500 font-medium">Jonny Nite</p>
                  <p className="text-gray-500 text-sm">23 Sept 2024</p>
                </div>
              </div>
              <div className="border-t border-white/5 p-4">
                <a
                  href="#"
                  className="inline-flex space-x-2 items-center text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                  <span>Info</span>
                </a>
              </div>
            </div>
            <div className="bg-white/10 to-white/5 rounded-lg">
              <div className="flex flex-row items-center">
                <div className="text-3xl p-4">💰</div>
                <div className="p-2">
                  <p className="text-xl font-bold">52$</p>
                  <p className="text-gray-500 font-medium">Megane Baile</p>
                  <p className="text-gray-500 text-sm">22 Sept 2024</p>
                </div>
              </div>
              <div className="border-t border-white/5 p-4">
                <a
                  href="#"
                  className="inline-flex space-x-2 items-center text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                  <span>Info</span>
                </a>
              </div>
            </div>
            <div className="bg-white/10 to-white/5 rounded-lg">
              <div className="flex flex-row items-center">
                <div className="text-3xl p-4">💰</div>
                <div className="p-2">
                  <p className="text-xl font-bold">28$</p>
                  <p className="text-gray-500 font-medium">Tony Ankel</p>
                  <p className="text-gray-500 text-sm">22 Sept 2024</p>
                </div>
              </div>
              <div className="border-t border-white/5 p-4">
                <a
                  href="#"
                  className="inline-flex space-x-2 items-center text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                  <span>Info</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="last-users">
          <h1 className="font-bold py-4 uppercase">Last 24h users</h1>
          <div className="overflow-x-scroll">
            <table className="w-full whitespace-nowrap">
              <thead className="bg-white/10">
                <tr>
                  <td className="text-left py-3 px-2 rounded-l-lg">Name</td>
                  <td className="text-left py-3 px-2">Email</td>
                  <td className="text-left py-3 px-2">Amount</td>
                  <td className="text-left py-3 px-2">Status</td>
                  <td className="text-left py-3 px-2 rounded-r-lg">
                    Consumptions
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-2 font-bold">
                    <div className="inline-flex space-x-3 items-center">
                      <span></span>
                      <span>Thai Mei</span>
                    </div>
                  </td>
                  <td className="py-3 px-2">thai.mei@abc.com</td>
                  <td className="py-3 px-2">$20</td>
                  <td className="py-3 px-2">Approved</td>
                  <td className="py-3 px-2">
                    <div className="inline-flex items-center space-x-3">
                      10 units
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-2 font-bold">
                    <div className="inline-flex space-x-3 items-center">
                      <span></span>
                      <span>Thai Mei</span>
                    </div>
                  </td>
                  <td className="py-3 px-2">thai.mei@abc.com</td>
                  <td className="py-3 px-2">$10</td>
                  <td className="py-3 px-2">Approved</td>
                  <td className="py-3 px-2">
                    <div className="inline-flex items-center space-x-3">
                      8 units
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-2 font-bold">
                    <div className="inline-flex space-x-3 items-center">
                      <span></span>
                      <span>Thai Mei</span>
                    </div>
                  </td>
                  <td className="py-3 px-2">thai.mei@abc.com</td>
                  <td className="py-3 px-2">$23</td>
                  <td className="py-3 px-2">Approved</td>
                  <td className="py-3 px-2">
                    <div className="inline-flex items-center space-x-3">
                      12 units
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-2 font-bold">
                    <div className="inline-flex space-x-3 items-center">
                      <span></span>
                      <span>Marquez Spineli</span>
                    </div>
                  </td>
                  <td className="py-3 px-2">marquez.spineli@cba.com</td>
                  <td className="py-3 px-2">$12</td>
                  <td className="py-3 px-2">Approved</td>
                  <td className="py-3 px-2">
                    <div className="inline-flex items-center space-x-3">
                      5 units
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-2 font-bold">
                    <div className="inline-flex space-x-3 items-center">
                      <span></span>
                      <span>Mark Spike</span>
                    </div>
                  </td>
                  <td className="py-3 px-2">mark.spike@abc.com</td>
                  <td className="py-3 px-2">$8</td>
                  <td className="py-3 px-2">Approved</td>
                  <td className="py-3 px-2">
                    <div className="inline-flex items-center space-x-3">
                      3 units
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
