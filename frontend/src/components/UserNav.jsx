import logo from "../Data/cinema-photo.jpg";
import profile from "../Data/avator.jpg";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { UseLogoutMutation } from "../hooks/UseLoginMutations";
import { useEffect } from "react";

const UserNav = () => {
  const logout = UseLogoutMutation();
  const handleLogout = () => {
    logout.mutate();
  };
  useEffect(() => {
    if (logout.isSuccess) {
      localStorage.removeItem("token");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("login");
      return (window.location.href = "/login");
    }
    if (logout.isError) {
      console.log("logout error");
    }
  });
  const user = localStorage.getItem("login");
  return (
    <div className="flex justify-between items-center border-b-2 p-4 bg-black text-red-500 h-[90px] sticky top-0">
      <Link to="/" className="flex items-center p-2">
        <h1 className="text-xl mr-2">Sein movie Booking</h1>
        <img
          src={logo}
          alt="logoImage"
          className="w-[50px] h-[50px] object-cover object-center rounded-full"
        />
      </Link>
      <div className="flex items-center">
        <Link to="/" className="text-xl p-2">
          Home
        </Link>
        <Link to="/user/cinema" className="text-xl p-2">
          Cinema
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center flex-col mr-2">
          <img
            src={profile}
            alt="profile"
            className="w-[50px] h-[50px] rounded-full object-cover object-center "
          />
          <h2>{user}</h2>
        </div>

        <Button className="text-red-500 hover:border" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserNav;
