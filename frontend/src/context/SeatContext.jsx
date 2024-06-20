/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import UseFetchSeat from "../hooks/UseFetchSeat";
import { RoomContext } from "./RoomContext";

export const SeatContext = createContext();

const SeatContextProvider = ({ children }) => {
  const [oneSeat, setOneSeat] = useState(false);
  const { rooms } = useContext(RoomContext);
  const handleSeat = () => {
    setOneSeat(!oneSeat);
  };
  const { isFetching, isError, error, data: seats } = UseFetchSeat();

  const getRoomName = (id) => {
    const getRoom = rooms?.find((c) => {
      return c._id === id;
    });
    if (getRoom) {
      return getRoom.roomName;
    } else {
      return "Unknown";
    }
  };
  return (
    <SeatContext.Provider
      value={{
        handleSeat,
        oneSeat,
        seats,
        isFetching,
        isError,
        error,
        getRoomName,
      }}
    >
      {children}
    </SeatContext.Provider>
  );
};

export default SeatContextProvider;
