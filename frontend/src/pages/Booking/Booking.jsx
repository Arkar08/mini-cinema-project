import { Spinner } from "@material-tailwind/react";

import BookingTable from "./BookingTable";
import { useContext } from "react";
import { BookingContext } from "../../context/BookingContext";

const Booking = () => {
  const { isFetching, isError, error } = useContext(BookingContext);
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
      {isFetching ? <Spinner /> : <BookingTable />}
      {isError && <div>{error}</div>}
    </div>
  );
};

export default Booking;
