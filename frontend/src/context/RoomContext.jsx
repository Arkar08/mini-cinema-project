/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import UseFetchRoom from "../hooks/UseFetchRoom";
import { CinemaContext } from "./CinemaContext";

export const RoomContext = createContext();

const RoomContextProvider = ({ children }) => {
  const { isLoading, isError, error, data: rooms } = UseFetchRoom();
  const { cinemas } = useContext(CinemaContext);
  const getCinemaName = (id) => {
    const getCinema = cinemas.find((c) => {
      return c._id === id;
    });
    if (getCinema) {
      return getCinema.name;
    } else {
      return "Unknown";
    }
  };
  const [isopen, setIsopen] = useState(false);
  const handleOpen = () => {
    setIsopen(!isopen);
  };

  return (
    <RoomContext.Provider
      value={{
        handleOpen,
        isopen,
        rooms,
        isLoading,
        isError,
        error,
        getCinemaName,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomContextProvider;
