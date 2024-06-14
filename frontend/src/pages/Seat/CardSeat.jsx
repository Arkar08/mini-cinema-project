import oneChair from "../../Data/one_chair.jpg";
import coupleChair from "../../Data/couple_chair.jpg";
const CardSeat = () => {
  return (
    <div className="grid grid-cols-5 gap-4 px-8 mt-2">
      <div className="border cursor-pointer text-center rounded-md bg-black text-red-600 h-[230px]">
        <div className="flex justify-center items-center flex-col p-4">
          <img
            src={oneChair}
            alt="room"
            className="w-[200px] h-[100px] object-cover object-center"
          />
          <div className="flex items-center justify-center">
            <label className="text-white px-2">SeatNo:</label>
            <h2 className="text-xl">I</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">RoomName:</label>
            <h2 className="text-xl">I</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">RowName:</label>
            <h2 className="text-xl">A</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">SeatType:</label>
            <h2 className="text-xl">Single</h2>
          </div>
        </div>
      </div>
      <div className="border cursor-pointer text-center rounded-md bg-black text-red-600 h-[230px]">
        <div className="flex justify-center items-center flex-col p-4">
          <img
            src={oneChair}
            alt="room"
            className="w-[200px] h-[100px] object-cover object-center"
          />
          <div className="flex items-center justify-center">
            <label className="text-white px-2">SeatNo:</label>
            <h2 className="text-xl">I</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">RoomName:</label>
            <h2 className="text-xl">I</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">RowName:</label>
            <h2 className="text-xl">A</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">SeatType:</label>
            <h2 className="text-xl">Single</h2>
          </div>
        </div>
      </div>
      <div className="border cursor-pointer text-center rounded-md bg-black text-red-600 h-[230px]">
        <div className="flex justify-center items-center flex-col p-4">
          <img
            src={oneChair}
            alt="room"
            className="w-[200px] h-[100px] object-cover object-center"
          />
          <div className="flex items-center justify-center">
            <label className="text-white px-2">SeatNo:</label>
            <h2 className="text-xl">I</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">RoomName:</label>
            <h2 className="text-xl">I</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">RowName:</label>
            <h2 className="text-xl">A</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">SeatType:</label>
            <h2 className="text-xl">Single</h2>
          </div>
        </div>
      </div>
      <div className="border cursor-pointer text-center rounded-md bg-black text-red-600 h-[230px]">
        <div className="flex justify-center items-center flex-col p-4">
          <img
            src={oneChair}
            alt="room"
            className="w-[200px] h-[100px] object-cover object-center"
          />
          <div className="flex items-center justify-center">
            <label className="text-white px-2">SeatNo:</label>
            <h2 className="text-xl">I</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">RoomName:</label>
            <h2 className="text-xl">I</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">RowName:</label>
            <h2 className="text-xl">A</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">SeatType:</label>
            <h2 className="text-xl">Single</h2>
          </div>
        </div>
      </div>
      <div className="border cursor-pointer text-center rounded-md bg-black text-red-600 h-[230px]">
        <div className="flex justify-center items-center flex-col p-4">
          <img
            src={oneChair}
            alt="room"
            className="w-[200px] h-[100px] object-cover object-center"
          />
          <div className="flex items-center justify-center">
            <label className="text-white px-2">SeatNo:</label>
            <h2 className="text-xl">I</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">RoomName:</label>
            <h2 className="text-xl">I</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">RowName:</label>
            <h2 className="text-xl">A</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">SeatType:</label>
            <h2 className="text-xl">Single</h2>
          </div>
        </div>
      </div>
      <div className="border cursor-pointer text-center rounded-md bg-black text-red-600 h-[230px]">
        <div className="flex justify-center items-center flex-col p-4">
          <img
            src={coupleChair}
            alt="room"
            className="w-[200px] h-[100px] object-cover object-center"
          />
          <div className="flex items-center justify-center">
            <label className="text-white px-2">SeatNo:</label>
            <h2 className="text-xl">I</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">RoomName:</label>
            <h2 className="text-xl">I</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">RowName:</label>
            <h2 className="text-xl">B</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">SeatType:</label>
            <h2 className="text-xl">Couple</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSeat;
