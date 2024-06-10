import avator from "../Data/avator.jpg";
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
            className="w-[60px] h-[60px] rounded-full object-cover object-center"
          />
          <button className="p-2 bg-red-500 ml-2 rounded-md text-xl font-bold">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
