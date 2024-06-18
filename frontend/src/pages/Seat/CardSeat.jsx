/* eslint-disable react/prop-types */
const CardSeat = ({ s }) => {
  return (
    <div className="border cursor-pointer text-center rounded-md bg-black text-red-600 h-[100%]">
      <div className="flex justify-center items-center flex-col p-4">
        <div className="flex items-center justify-center">
          <label className="text-white px-2">SeatNo:</label>
          <h2 className="text-xl">{s.seatNo}</h2>
        </div>
        <div className="flex items-center justify-center">
          <label className="text-white px-2">RoomName:</label>
          <h2 className="text-xl">I</h2>
        </div>
        <div className="flex items-center justify-center">
          <label className="text-white px-2">RowName:</label>
          <h2 className="text-xl">{s.rowName}</h2>
        </div>
        <div className="flex items-center justify-center">
          <label className="text-white px-2">SeatType:</label>
          <h2 className="text-xl">{s.seatType}</h2>
        </div>
      </div>
    </div>
  );
};

export default CardSeat;
