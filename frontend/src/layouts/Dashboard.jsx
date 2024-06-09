import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
