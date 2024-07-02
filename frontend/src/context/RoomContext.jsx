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
    updateMutation,
  } = UseFetchRoom();
  const [newRoom, setNewRoom] = useState({
    roomName: "",
    cinemaId: "",
    roomNo: "",
  });
  const [editRoom, setEditRoom] = useState({
    roomName: "",
    cinemaId: "",
    roomNo: "",
  });
  const { cinemas } = useContext(CinemaContext);
  const [isOpen, setIsOpen] = useState(false);

  const [active, setActive] = useState(1);
  const [itemPerPage] = useState(8);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [miniPageNumberLimit, setMiniPageNumberLimit] = useState(0);
  const pages = [];
  const lastPage = itemPerPage * active;
  const firstPage = lastPage - itemPerPage;
  const currentItem = rooms?.slice(firstPage, lastPage);
  for (let i = 1; i <= Math.ceil(rooms?.length / itemPerPage); i++) {
    pages.push(i);
  }

  const prevClick = () => {
    setActive((prev) => prev - 1);
    if ((active - 1) % itemPerPage == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - itemPerPage);
      setMiniPageNumberLimit(miniPageNumberLimit - itemPerPage);
    }
  };
  const nextClick = () => {
    setActive((prev) => prev + 1);
    if (active + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + itemPerPage);
      setMiniPageNumberLimit(miniPageNumberLimit + itemPerPage);
    }
  };
  const handleClick = (e) => {
    return setActive(Number(e.target.id));
  };
  const handleEditRoomChange = (value) => {
    setEditRoom((prev) => {
      return { ...prev, roomName: value };
    });
    console.log(value);
  };

  const handleEditCinemaId = (name) => {
    if (name) {
      setEditRoom((prev) => {
        return { ...prev, cinemaId: getCinemaId(name) };
      });
    } else {
      return "Unknown";
    }
  };

  const handleEditRoomNo = (no) => {
    setEditRoom((prev) => {
      return { ...prev, roomNo: no };
    });
  };

  const getCinemaName = (id) => {
    const getCinema = cinemas?.find((c) => {
      return c._id === id;
    });
    if (getCinema) {
      return getCinema.name;
    } else {
      return "Unknown";
    }
  };

  const getRoomName = (id) => {
    const getRoom = rooms?.find((r) => {
      return r._id === id;
    });
    if (getRoom) {
      return getRoom.roomName;
    } else {
      return "Unknown";
    }
  };

  const handleEditSave = () => {
    if (!editRoom) {
      console.error("editRoom is undefined or null");
      return;
    }
    updateMutation.mutate(editRoom);
    window.location.href = "/admin/room";
    console.log(editRoom);
  };
  const getCinemaId = (name) => {
    const getCinema = cinemas?.find((c) => {
      return c.name === name;
    });
    if (getCinema) {
      return getCinema._id;
    } else {
      return "Unknown";
    }
  };

  const handleRoomSave = () => {
    if (!newRoom) {
      console.error("New Room is undefined or null");
    }
    mutations.mutate(newRoom);
    setIsOpen(!isOpen);
    window.location.href = "/admin/room";
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
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
        isOpen,
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
        handleDeleteRoom,
        handleEditCinemaId,
        handleEditRoomChange,
        handleEditRoomNo,
        setEditRoom,
        editRoom,
        handleEditSave,
        active,
        pages,
        currentItem,
        nextClick,
        prevClick,
        handleClick,
        getRoomName,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomContextProvider;
