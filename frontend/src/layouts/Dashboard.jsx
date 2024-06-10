import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col">
        <Navbar />
        <div className="w-[100%] h-[100%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
