import { Outlet } from "react-router-dom";
import UserNav from "../components/UserNav";

const User = () => {
  return (
    <div className="relative">
      <UserNav />
      <Outlet />
    </div>
  );
};

export default User;
