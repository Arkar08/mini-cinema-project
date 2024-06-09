import RoomCard from "../components/RoomCard";

const Room = () => {
  return (
    <div className="h-[100%]">
      <div className="flex justify-between items-center m-6">
        <input
          type="text"
          placeholder="search room..."
          className="w-[300px] p-2 border outline-none rounded-md"
        />
        <button className="p-2 bg-red-500 text-white rounded-md">
          New Room
        </button>
      </div>
      <hr />
      <RoomCard />
    </div>
  );
};

export default Room;
