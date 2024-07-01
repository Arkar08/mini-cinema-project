import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import UseFetchBookings from "../../hooks/UseFetchBookings";
import { BookingContext } from "../../context/BookingContext";
import { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";
import { SeatContext } from "../../context/SeatContext";
import { MovieContext } from "../../context/MovieContext";
import moment from "moment";

const PrintBooking = () => {
  const { printId } = useParams();
  const { getBookingId } = UseFetchBookings();
  const { setPrint, print } = useContext(BookingContext);
  const { getCinemaName, getRoomName } = useContext(RoomContext);
  const { getSeatName } = useContext(SeatContext);
  const { getMovieName } = useContext(MovieContext);
  const { isLoading, isError } = useQuery(
    ["seats", printId],
    () => getBookingId(printId),
    {
      onSuccess: (data) => {
        setPrint(data);
      },
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching room with ID {printId}</p>;
  return (
    <>
      <div className="mt-8 mx-8">
        <Link
          to="/admin/booking"
          className="p-2 bg-black text-red-500 rounded-md"
        >
          Back
        </Link>
      </div>
      <div className="flex items-center justify-center mx-auto mt-[80px] ">
        <div className="bg-gray-300 w-[300px] h-[300px] shadow-lg rounded-md">
          <div className="text-center mt-2">
            <h2 className="font-bold">{getCinemaName(print.cinemaId)}</h2>
            <h2>Hall ({getRoomName(print.roomId)})</h2>
            <h2>{getMovieName(print.movieId)}</h2>
          </div>
          <div className="flex items-center justify-between px-2 mt-4">
            <div>
              <label>Show Date</label>
              <h2 className="text-center">
                {moment(print.showDate).format("L")}
              </h2>
            </div>
            <div>
              <label>Show Time</label>
              <h2 className="text-center">{print.showTime}</h2>
            </div>
          </div>
          <div className="text-center mt-2">
            <h2>{getSeatName(print.seatId)}</h2>
          </div>
          <div className="flex justify-around items-center mt-8">
            <div>
              <label>Classes</label>
              <h2 className="text-right">5000 ks</h2>
            </div>
            <div>
              <label>Seats</label>
              <h2 className="text-center">1</h2>
            </div>
            <div>
              <label>Total</label>
              <h2 className="text-right">10000 ks</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintBooking;
