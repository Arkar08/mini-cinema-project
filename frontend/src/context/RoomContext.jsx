/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import UseFetchRoom from "../hooks/UseFetchRoom";

export const RoomContext = createContext();

const RoomContextProvider = ({ children }) => {
  const [isopen, setIsopen] = useState(false);
  const handleOpen = () => {
    setIsopen(!isopen);
  };
  const { isFetching, isError, error, data: rooms } = UseFetchRoom();

  return (
    <RoomContext.Provider
      value={{ handleOpen, isopen, rooms, isFetching, isError, error }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomContextProvider;
