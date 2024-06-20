/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import UseFetchSeat from "../hooks/UseFetchSeat";
import { RoomContext } from "./RoomContext";

export const SeatContext = createContext();

const SeatContextProvider = ({ children }) => {
  const [oneSeat, setOneSeat] = useState(false);
  const { rooms } = useContext(RoomContext);
  const [newSeat, setNewSeat] = useState({
    roomId: "",
    seatNo: "",
    rowName: "",
    seatType: "",
  });
  const handleSeat = () => {
    setOneSeat(!oneSeat);
  };
  const {
    isLoading,
    isError,
    error,
    data: seats,
    mutationsSeat,
  } = UseFetchSeat();

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
  const sortRoom = rooms?.sort((a, b) => {
    return a.roomName.localeCompare(b.roomName);
  });
  const handleRoom = (value) => {
    setNewSeat((prev) => {
      return { ...prev, roomId: value };
    });
  };
  const handleSeatNo = (value) => {
    setNewSeat((prev) => {
      return { ...prev, seatNo: value };
    });
  };
  const handleSeatType = (value) => {
    setNewSeat((prev) => {
      return { ...prev, seatType: value };
    });
  };
  const handleRowName = (value) => {
    setNewSeat((prev) => {
      return { ...prev, rowName: value };
    });
  };
  const seatSave = () => {
    mutationsSeat.mutate(newSeat);
    setOneSeat(!oneSeat);
    window.location.reload();
  };
  return (
    <SeatContext.Provider
      value={{
        handleSeat,
        oneSeat,
        seats,
        isLoading,
        isError,
        error,
        getRoomName,
        handleRoom,
        newSeat,
        handleSeatNo,
        handleSeatType,
        handleRowName,
        seatSave,
        sortRoom,
      }}
    >
      {children}
    </SeatContext.Provider>
  );
};

export default SeatContextProvider;
