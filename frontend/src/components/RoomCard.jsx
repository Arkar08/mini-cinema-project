import room from "../Data/room.avif";

const RoomCard = () => {
  return (
    <div className="grid grid-cols-5 gap-4 px-8 mt-8">
      <div className="border cursor-pointer text-center rounded-md bg-black text-red-600 h-[230px]">
        <div className="flex justify-center items-center flex-col p-4">
          <img
            src={room}
            alt="room"
            className="w-[200px] h-[100px] object-cover object-center"
          />
          <div className="flex items-center justify-center mt-2">
            <label className="text-white px-2">RoomNo:</label>
            <h2 className="text-xl">I</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">RoomName:</label>
            <h2 className="text-xl">I</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">CinemaName:</label>
            <h2 className="text-xl">Mingalar</h2>
          </div>
        </div>
      </div>
      <div className="border cursor-pointer text-center rounded-md bg-black text-red-600 h-[230px]">
        <div className="flex justify-center items-center flex-col p-4">
          <img
            src={room}
            alt="room"
            className="w-[200px] h-[100px] object-cover object-center"
          />
          <div className="flex items-center justify-center mt-2">
            <label className="text-white px-2">RoomNo:</label>
            <h2 className="text-xl">I</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">RoomName:</label>
            <h2 className="text-xl">I</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">CinemaName:</label>
            <h2 className="text-xl">Mingalar</h2>
          </div>
        </div>
      </div>
      <div className="border cursor-pointer text-center rounded-md bg-black text-red-600 h-[230px]">
        <div className="flex justify-center items-center flex-col p-4">
          <img
            src={room}
            alt="room"
            className="w-[200px] h-[100px] object-cover object-center"
          />
          <div className="flex items-center justify-center mt-2">
            <label className="text-white px-2">RoomNo:</label>
            <h2 className="text-xl">I</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">RoomName:</label>
            <h2 className="text-xl">I</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">CinemaName:</label>
            <h2 className="text-xl">Mingalar</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
