import { Spinner } from "@material-tailwind/react";
import UseFetchBookings from "../../hooks/UseFetchBookings";
import BookingTable from "./BookingTable";

const Booking = () => {
  const { isLoading, isError, error, data: bookings } = UseFetchBookings();
  console.log(bookings);
  return (
    <div className="h-[100%]">
      <div className="flex justify-between items-center m-4">
        <input
          type="text"
          placeholder="search booking..."
          className="w-[400px] p-2 border outline-none rounded-md"
        />
      </div>
      <hr />
      {isLoading ? <Spinner /> : <BookingTable bookings={bookings} />}
      {isError && <div>{error}</div>}
    </div>
  );
};

export default Booking;
