import { useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { SeatContext } from "../../context/SeatContext";

/* eslint-disable react/prop-types */
const CardSeat = () => {
  const { seats, getRoomName } = useContext(SeatContext);
  return (
    <table className="border-collapse w-[95%] border mt-4 mx-auto">
      <thead>
        <tr className="text-center p-8 border bg-red-500 text-white">
          <th>Id</th>
          <th>RoomName</th>
          <th>SeatNo</th>
          <th>RowName</th>
          <th>SeatType</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {seats &&
          seats.map((s) => {
            return (
              <tr className="text-center  border text-red-500" key={s._id}>
                <td className="p-2">{s._id}</td>
                <td className="p-2 uppercase">{getRoomName(s.roomId)}</td>
                <td className="p-2">{s.seatNo}</td>
                <td className="p-2">{s.rowName}</td>
                <td className="p-2 text-green-500">{s.seatType}</td>
                <td className="flex p-2 items-center justify-center">
                  <FaEdit
                    size={18}
                    className="mx-1 text-blue-600 cursor-pointer"
                  />
                  <FaTrash
                    size={18}
                    className="cursor-pointer mx-1 text-red-600"
                  />
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default CardSeat;
