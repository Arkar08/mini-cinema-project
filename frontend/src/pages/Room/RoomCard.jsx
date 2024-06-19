import { FaEdit, FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";

const RoomCard = () => {
  const { rooms, getCinemaName } = useContext(RoomContext);
  return (
    <table className="border-collapse w-[95%] border mt-4 mx-auto">
      <thead>
        <tr className="text-center p-8 border bg-red-500 text-white">
          <th>Id</th>
          <th>CinemaName</th>
          <th>RoomNo</th>
          <th>RoomName</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {rooms &&
          rooms.map((r) => {
            return (
              <tr className="text-center  border text-red-500" key={r._id}>
                <td className="p-2">{r._id}</td>
                <td className="p-2 uppercase">{getCinemaName(r.cinemaId)}</td>
                <td className="p-2">{r.roomNo}</td>
                <td className="p-2 text-green-500">{r.roomName}</td>
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

export default RoomCard;
