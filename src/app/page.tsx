import React from "react";
import SideBar from "./layouts/SideBar";
import Main from "./Components/Main";
export default function Home() {
  return (
    <>
      <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-4 flex">
        <SideBar />
        <Main />
      </div>
    </>
  );
}
