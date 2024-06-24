import { useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { PriceContext } from "../../context/PriceContext";
import { SeatContext } from "../../context/SeatContext";
import { Link } from "react-router-dom";
const PriceTable = () => {
  const { currentItem, getType, handleDeletePrice } = useContext(PriceContext);
  const { getRoomName } = useContext(SeatContext);
  return (
    <table className="border-collapse w-[95%] border mt-4 mx-auto">
      <thead>
        <tr className="text-center p-4 border bg-red-500 text-white">
          <th>Id</th>
          <th>RoomName</th>
          <th>RowName</th>
          <th>SeatType</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {currentItem &&
          currentItem.map((p) => {
            return (
              <tr className="text-center  border text-red-500" key={p._id}>
                <td className="p-2">{p._id}</td>
                <td className="p-2">{getRoomName(p.roomId)}</td>
                <td className="p-2">{p.rowName}</td>
                <td className="p-2 text-green-500">{getType(p.rowName)}</td>
                <td className="p-2 text-right">{p.price} Ks</td>
                <td className="flex p-2 items-center justify-center">
                  <Link to={`/admin/price/${p._id}`}>
                    <FaEdit
                      size={18}
                      className="mx-1 text-blue-600 cursor-pointer"
                    />
                  </Link>
                  <FaTrash
                    size={18}
                    className="cursor-pointer mx-1 text-red-600"
                    onClick={() => handleDeletePrice(p._id)}
                  />
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default PriceTable;
