"use client";
import { registerGrid } from "../add-transaction";
import React, { useState } from "react";
import SideBar from "../layouts/SideBar";
import { useAtom } from "jotai";
import { programAtom } from "@/store/global";

const Test = () => {
  const [program] = useAtom(programAtom);

  const [gridName, setGridName] = useState("");
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [totalPowerCapacity, setTotalPowerCapacity] = useState(0);

  // const gridName = "MACB";
  // const location = "Maharashtra"
  // const latitude = 40.7128;
  // const longitude = -74.0060;
  // const totalPowerCapacity = new anchor.BN(50000);

  const registrationGrid = async () => {
    const result = await registerGrid(
      1,
      gridName,
      location,
      latitude,
      longitude,
      totalPowerCapacity
    );
    console.log(result);
    return result;
  };

  return (
    <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-4 flex">
      <SideBar />
      <div className=" h-[100vh] flex flex-col justify-center">
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Grid Name
            </label>
            <input
              value={gridName}
              onChange={(e) => setGridName(e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Location
            </label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Latitude
            </label>
            <input
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Longitude
            </label>
            <input
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Total Capacity
            </label>
            <input
              value={totalPowerCapacity}
              onChange={(e) => setTotalPowerCapacity(parseInt(e.target.value))}
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>

          <button
            type="submit"
            onClick={registrationGrid}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create Grid
          </button>
        </form>
      </div>
    </div>
  );
};

export default Test;
