import { useContext } from "react";
import { BookingContext } from "../../context/BookingContext";

/* eslint-disable react/prop-types */
const BookingTable = () => {
  const { bookings } = useContext(BookingContext);
  return (
    <table className="w-[95%] border-collapse border  mt-4 mx-auto">
      <thead>
        <tr className="text-center p-8 border bg-red-500 text-white">
          <th>Id</th>
          <th>CinemaName</th>
          <th>MovieName</th>
          <th>RoomName</th>
          <th>ShowingDate</th>
          <th>SeatNo</th>
          <th>SeatPrice</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {bookings &&
          bookings.map((b) => {
            return (
              <tr className="text-center  text-red-500" key={b._id}>
                <td className="p-2">{b._id}</td>
                <td className=" p-2">Nay Pyi Taw</td>
                <td className=" p-2">Thor</td>
                <td className=" p-2">cinema IV</td>
                <td className=" p-2">27.12.2022</td>
                <td className=" p-2">A3</td>
                <td className=" p-2 text-right">5000 Ks</td>
                <td className=" p-2">
                  <button className="bg-red-500 text-white px-2 py-1 outline-none border-none rounded-md">
                    Print
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default BookingTable;
