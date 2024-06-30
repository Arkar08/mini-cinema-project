import Nav from "./Nav";
import logo from "../Data/cinema-photo.jpg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[100%] bg-black h-[100vh]">
      <Link to="/">
        <div className="flex justify-center items-center mt-4">
          <h1 className=" p-4 text-xl text-red-500 uppercase font-bold">
            Sein movie ticket online booking
          </h1>
          <img
            src={logo}
            alt="logo"
            className="w-[40px] h-[40px] rounded-md object-cover object-center m-2"
          />
        </div>
      </Link>
      <Nav />
    </div>
  );
};

export default Sidebar;
