import { useContext } from "react";
import { BookingContext } from "../../context/BookingContext";
import { RoomContext } from "../../context/RoomContext";

/* eslint-disable react/prop-types */
const BookingTable = () => {
  const { bookings } = useContext(BookingContext);
  const { getCinemaName } = useContext(RoomContext);
  return (
    <table className="w-[95%] border-collapse border  mt-4 mx-auto">
      <thead>
        <tr className="text-center p-8 border bg-red-500 text-white">
          <th>Id</th>
          <th>CinemaName</th>
          <th>MovieName</th>
          <th>RoomName</th>
          <th>ShowingDate</th>
          <th>Showing Time</th>
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
                <td className=" p-2 uppercase">{getCinemaName(b.cinemaId)}</td>
                {/* <td className=" p-2">{getMovieName(b.movieId)}</td> */}
                <td className=" p-2">II</td>
                <td className=" p-2">27.12.2022</td>
                <td className=" p-2">3:00</td>
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
