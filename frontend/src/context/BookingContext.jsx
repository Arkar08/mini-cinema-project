/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import UseFetchBookings from "../hooks/UseFetchBookings";

export const BookingContext = createContext();

const BookingContextProvider = ({ children }) => {
  const { isFetching, isError, error, data: bookings } = UseFetchBookings();
  const [print, setPrint] = useState(null);
  return (
    <BookingContext.Provider
      value={{ isFetching, isError, error, bookings, setPrint, print }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContextProvider;
