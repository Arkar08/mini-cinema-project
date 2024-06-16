import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const Dashboard = () => {
  const [btn, setBtn] = useState(false);
  const handleBtn = () => {
    setBtn(!btn);
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col">
        <Navbar handleBtn={handleBtn} />
        <div className="w-[100%] h-[100%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
