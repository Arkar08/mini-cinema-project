/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import UseFetchSeat from "../hooks/UseFetchSeat";

export const SeatContext = createContext();

const SeatContextProvider = ({ children }) => {
  const [oneSeat, setOneSeat] = useState(false);
  const handleSeat = () => {
    setOneSeat(!oneSeat);
  };
  const { isFetching, isError, error, data: seats } = UseFetchSeat();
  return (
    <SeatContext.Provider
      value={{ handleSeat, oneSeat, seats, isFetching, isError, error }}
    >
      {children}
    </SeatContext.Provider>
  );
};

export default SeatContextProvider;
