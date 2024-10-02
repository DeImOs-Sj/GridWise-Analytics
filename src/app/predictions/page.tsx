import React from "react";
import SideBar from "../layouts/SideBar";
import Predictions from "../Components/Predictions";
const Analytics = () => {
  return (
    <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-4 flex">
      <SideBar />
      <Predictions />
    </div>
  );
};

export default Analytics;
