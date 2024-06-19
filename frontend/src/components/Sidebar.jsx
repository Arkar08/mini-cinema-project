import Nav from "./Nav";
import logo from "../Data/cinema-photo.jpg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[100%] bg-black h-[100vh]">
      <Link to="/">
        <div className="flex justify-center items-center mt-4">
          <h1 className=" p-2 text-xl text-red-600 uppercase font-bold">
            Sein Movie Theatre
          </h1>
          <img
            src={logo}
            alt="logo"
            className="w-[40px] h-[40px] rounded-md object-cover object-center"
          />
        </div>
      </Link>
      <Nav />
    </div>
  );
};

export default Sidebar;
