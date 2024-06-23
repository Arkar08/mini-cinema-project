/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import UseFetchPrice from "../hooks/UseFetchPrice";
import { SeatContext } from "./SeatContext";
import { RoomContext } from "./RoomContext";

export const PriceContext = createContext();

const PriceContextProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const { seats } = useContext(SeatContext);
  const { rooms } = useContext(RoomContext);
  const [newPrice, setNewPrice] = useState({
    price: "",
    roomId: "",
    rowName: "",
    seatNo: "",
  });
  const handleActive = () => {
    setActive(!active);
  };
  const {
    isFetching,
    isError,
    error,
    data: price,
    mutation,
    deleteId,
  } = UseFetchPrice();

  const postRoom = (value) => {
    return setNewPrice((prev) => {
      return { ...prev, roomId: value };
    });
  };
  const postPrice = (e) => {
    return setNewPrice((prev) => {
      return { ...prev, price: Number(e.target.value) };
    });
  };
  const sortData = rooms?.sort((a, b) => {
    return a.roomName.localeCompare(b.roomName);
  });

  const getType = (type) => {
    const seatGet = seats?.find((s) => {
      return s.rowName === type;
    });
    if (seatGet) {
      return seatGet.seatType;
    } else {
      return "Unknown SeatType";
    }
  };
  const handleSeatRow = (value) => {
    setNewPrice((prev) => {
      return { ...prev, rowName: value };
    });
  };
  const handleSeatNo = (value) => {
    setNewPrice((prev) => {
      return { ...prev, seatNo: value };
    });
  };
  const savePrice = () => {
    mutation.mutate(newPrice);
    setActive(!active);
    window.location.reload();
  };

  const handleDeletePrice = (id) => {
    const confirm = window.confirm("Are you want to delete?");
    if (confirm) {
      deleteId.mutate(id);
      window.location.reload();
    }
  };
  return (
    <PriceContext.Provider
      value={{
        handleActive,
        active,
        price,
        isFetching,
        isError,
        error,
        postRoom,
        newPrice,
        postPrice,
        sortData,
        handleSeatRow,
        handleSeatNo,
        savePrice,
        getType,
        handleDeletePrice,
      }}
    >
      {children}
    </PriceContext.Provider>
  );
};

export default PriceContextProvider;
