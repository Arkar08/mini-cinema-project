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
  const [editSeat, setEditSeat] = useState({
    roomId: "",
    seatNo: "",
    rowName: "",
  });
  const {
    isLoading,
    isError,
    error,
    data: seats,
    mutationsSeat,
    deleteId,
    seatMutation,
  } = UseFetchSeat();

  const [activeSeat, setActiveSeat] = useState(1);
  const [itemPerPage] = useState(2);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [miniPageNumberLimit, setMiniPageNumberLimit] = useState(0);
  const pages = [];
  const lastPage = itemPerPage * activeSeat;
  const firstPage = lastPage - itemPerPage;
  const currentItem = seats?.slice(firstPage, lastPage);
  for (let i = 1; i <= Math.ceil(seats?.length / itemPerPage); i++) {
    pages.push(i);
  }

  const prevClick = () => {
    setActiveSeat((prev) => prev - 1);
    if ((activeSeat - 1) % itemPerPage == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - itemPerPage);
      setMiniPageNumberLimit(miniPageNumberLimit - itemPerPage);
    }
  };
  const nextClick = () => {
    setActiveSeat((prev) => prev + 1);
    if (activeSeat + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + itemPerPage);
      setMiniPageNumberLimit(miniPageNumberLimit + itemPerPage);
    }
  };
  const handleClick = (e) => {
    return setActiveSeat(Number(e.target.id));
  };

  const getSeatName = (id) => {
    const getSeat = seats?.find((s) => {
      return s._id === id;
    });
    if (getSeat) {
      return getSeat.rowName + getSeat.seatNo;
    } else {
      return "Unknown";
    }
  };

  const handleSeatRow = (value) => {
    setEditSeat((prev) => {
      return { ...prev, rowName: value };
    });
  };
  const handleSeatRoom = (value) => {
    if (value) {
      setEditSeat((prev) => {
        return { ...prev, cinemaId: getRoomId(value) };
      });
    } else {
      return "Unknown";
    }
  };
  const handleSeatNoType = (value) => {
    setEditSeat((prev) => {
      return { ...prev, seatNo: value };
    });
  };

  const getRoomId = (name) => {
    const getRoom = rooms?.find((c) => {
      return c.roomName === name;
    });
    if (getRoom) {
      return getRoom._id;
    } else {
      return "Unknown";
    }
  };

  const EditSave = () => {
    if (!editSeat) {
      console.error("editSeat is undefined or null");
      return;
    }
    seatMutation.mutate(editSeat);
    window.location.href = "/admin/seat";
  };
  const handleSeat = () => {
    setOneSeat(!oneSeat);
  };

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
  const handeldeleteSeat = (id) => {
    const confirm = window.confirm("Are you want to delete?");
    if (confirm) {
      deleteId.mutate(id);
      window.location.reload();
    }
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
        handeldeleteSeat,
        setEditSeat,
        editSeat,
        handleSeatRow,
        handleSeatRoom,
        handleSeatNoType,
        EditSave,
        currentItem,
        handleClick,
        nextClick,
        prevClick,
        pages,
        activeSeat,
        getSeatName,
      }}
    >
      {children}
    </SeatContext.Provider>
  );
};

export default SeatContextProvider;
