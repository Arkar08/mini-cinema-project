/* eslint-disable react/prop-types */
import avator from "../Data/avator.jpg";
import { Button } from "@material-tailwind/react";
import { IoMenuSharp } from "react-icons/io5";
import { UseLogoutMutation } from "../hooks/UseLoginMutations";
import { useEffect } from "react";

const Navbar = ({ handleBtn }) => {
  const logout = UseLogoutMutation();
  const handleLogout = () => {
    logout.mutate();
  };
  useEffect(() => {
    if (logout.isSuccess) {
      localStorage.removeItem("token");
      localStorage.removeItem("isAdmin");
      return (window.location.href = "/login");
    }
    if (logout.isError) {
      console.log("logout error");
    }
  });
  return (
    <div className="w-[82vw] bg-black h-[100px]">
      <div className="flex justify-between items-center w-[100%] py-2 px-8">
        <IoMenuSharp className="text-white" size={30} onClick={handleBtn} />
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="w-[300px] p-2 rounded-md border-none outline-none"
          />
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-2xl px-2 text-red-600 font-bold">Admin</h1>
          <img
            src={avator}
            alt="profile"
            className="w-[60px] h-[60px] rounded-full object-cover object-center p-2"
          />
          <Button className="bg-red-500" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
