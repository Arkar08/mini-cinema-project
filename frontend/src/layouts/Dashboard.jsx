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
      <div className=" w-[250px] fixed -top-4">
        <Sidebar />
      </div>

      <div className="flex flex-col w-[calc(100% - 250px)] ml-[250px]">
        <Navbar handleBtn={handleBtn} />
        <div className="w-[100%] h-[100%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
