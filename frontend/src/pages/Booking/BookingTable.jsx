import { useContext } from "react";
import { BookingContext } from "../../context/BookingContext";
import { RoomContext } from "../../context/RoomContext";
import { MovieContext } from "../../context/MovieContext";
import { SeatContext } from "../../context/SeatContext";
import { CustomerContext } from "../../context/CustomerContext";
import { Link } from "react-router-dom";
import moment from "moment";

/* eslint-disable react/prop-types */
const BookingTable = () => {
  const { bookings } = useContext(BookingContext);
  const { getCinemaName, getRoomName } = useContext(RoomContext);
  const { getSeatName } = useContext(SeatContext);
  const { getMovieName } = useContext(MovieContext);
  const { getCustomerName } = useContext(CustomerContext);
  return (
    <table className="w-[98%] border-collapse border mt-2 mx-auto">
      <thead>
        <tr className="text-center border bg-red-500 text-white">
          <th className="px-2">MovieName</th>
          <th className="px-2">CinemaName</th>
          <th className="px-2">CustomerName</th>
          <th className="px-2">RoomName</th>
          <th className="px-2">ShowingDate</th>
          <th className="px-2">Showing Time</th>
          <th className="px-2">SeatNo</th>
          <th className="px-2">Total Price</th>
          <th className="px-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {bookings &&
          bookings.map((b) => {
            return (
              <tr className="text-center  text-red-500" key={b._id}>
                <td className=" p-2">{getMovieName(b.movieId)}</td>
                <td className=" p-2">{getCinemaName(b.cinemaId)}</td>
                <td className=" p-2">{getCustomerName(b.userId)}</td>
                <td className=" p-2">{getRoomName(b.roomId)}</td>
                <td className=" p-2">{moment(b.showDate).format("L")}</td>
                <td className=" p-2">{b.showTime}</td>
                <td className=" p-2">{getSeatName(b.seatId)}</td>
                <td className=" p-2 text-right">{b.seatPriceId}</td>
                <td className=" p-2">
                  <Link
                    to={`/admin/booking/${b._id}`}
                    className="bg-red-500 text-white px-2 py-1 outline-none border-none rounded-md"
                  >
                    Print
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default BookingTable;
