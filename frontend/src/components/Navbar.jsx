import avator from "../Data/avator.jpg";
import { Button } from "@material-tailwind/react";
const Navbar = () => {
  return (
    <div className="w-[80vw] bg-black h-[100px]">
      <div className="flex justify-between items-center w-[100%] py-2 px-8">
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
          <Button className="bg-red-500">Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
