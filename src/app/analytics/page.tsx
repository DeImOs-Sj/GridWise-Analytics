import React from "react";
import SideBar from "../layouts/SideBar";
import AnalyticsChart from "../Components/Analytics";
const Analytics = () => {
  return (
    <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-4 flex">
      <SideBar />
      <AnalyticsChart />
    </div>
  );
};

export default Analytics;
