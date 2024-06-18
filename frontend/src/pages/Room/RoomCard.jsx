/* eslint-disable react/prop-types */
import room from "../../Data/room.avif";
const RoomCard = ({ r }) => {
  return (
    <div className="border cursor-pointer text-center rounded-md bg-black text-red-600 h-[230px]">
      <div className="flex justify-center items-center flex-col p-2">
        <img
          src={room}
          alt="room"
          className="w-[200px] h-[100px] object-cover object-center"
        />
        <div className="flex items-center justify-center mt-2">
          <label className="text-white px-2">RoomNo:</label>
          <h2 className="text-xl">{r.roomNo}</h2>
        </div>
        <div className="flex items-center justify-center">
          <label className="text-white px-2">RoomName:</label>
          <h2 className="text-xl">{r.roomName}</h2>
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-xl px-1">Mingalar</h2>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
