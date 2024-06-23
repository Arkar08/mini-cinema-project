/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import UseFetchRoom from "../hooks/UseFetchRoom";
import { CinemaContext } from "./CinemaContext";

export const RoomContext = createContext();

const RoomContextProvider = ({ children }) => {
  const {
    isLoading,
    isError,
    error,
    data: rooms,
    mutations,
    deleteId,
  } = UseFetchRoom();
  const [newRoom, setNewRoom] = useState({
    roomName: "",
    cinemaId: "",
    roomNo: "",
  });
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

  const handleRoomSave = () => {
    mutations.mutate(newRoom);
    setIsopen(!isopen);
    window.location.reload();
  };
  const [isopen, setIsopen] = useState(false);
  const handleOpen = () => {
    setIsopen(!isopen);
  };
  const handleRoomChange = (value) => {
    setNewRoom((prev) => {
      return { ...prev, roomName: value };
    });
  };
  const handleCinemaId = (name) => {
    if (name) {
      setNewRoom((prev) => {
        return { ...prev, cinemaId: name };
      });
    } else {
      return "Unknown";
    }
  };
  const handleRoomNo = (no) => {
    setNewRoom((prev) => {
      return { ...prev, roomNo: no };
    });
  };
  const sortCinema = cinemas?.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  const handleDeleteRoom = (id) => {
    const confirm = window.confirm("Are you want to delete?");
    if (confirm) {
      deleteId.mutate(id);
      window.location.reload();
    }
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
        newRoom,
        handleRoomSave,
        handleRoomChange,
        handleCinemaId,
        handleRoomNo,
        sortCinema,
        handleDeleteRoom,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomContextProvider;
