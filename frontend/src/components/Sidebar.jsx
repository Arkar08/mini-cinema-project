import Nav from "./Nav";

const Sidebar = () => {
  return (
    <div className="w-[372px] bg-black h-[100vh]">
      <div>
        <h1 className="px-8 py-4 text-2xl text-red-600">Sein Moive Theater</h1>
      </div>
      <Nav />
    </div>
  );
};

export default Sidebar;
