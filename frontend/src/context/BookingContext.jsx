/* eslint-disable react/prop-types */
import { createContext } from "react";
import UseFetchBookings from "../hooks/UseFetchBookings";

export const BookingContext = createContext();

const BookingContextProvider = ({ children }) => {
  const { isFetching, isError, error, data: bookings } = UseFetchBookings();
  return (
    <BookingContext.Provider value={{ isFetching, isError, error, bookings }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContextProvider;
