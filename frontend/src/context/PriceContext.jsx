/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import UseFetchPrice from "../hooks/UseFetchPrice";
import { SeatContext } from "./SeatContext";

export const PriceContext = createContext();

const PriceContextProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const { seats } = useContext(SeatContext);
  const [newPrice, setNewPrice] = useState({
    price: "",
    roomId: "",
    rowName: "",
    seatNo: "",
  });
  const [editPrice, setEditPrice] = useState({
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
    updateMutation,
  } = UseFetchPrice();

  const [activePrice, setActivePrice] = useState(1);
  const [itemPerPage] = useState(2);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [miniPageNumberLimit, setMiniPageNumberLimit] = useState(0);
  const pages = [];
  const lastPage = itemPerPage * activePrice;
  const firstPage = lastPage - itemPerPage;
  const currentItem = price?.slice(firstPage, lastPage);
  for (let i = 1; i <= Math.ceil(price?.length / itemPerPage); i++) {
    pages.push(i);
  }

  const prevClick = () => {
    setActivePrice((prev) => prev - 1);
    if ((activePrice - 1) % itemPerPage == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - itemPerPage);
      setMiniPageNumberLimit(miniPageNumberLimit - itemPerPage);
    }
  };
  const nextClick = () => {
    setActivePrice((prev) => prev + 1);
    if (activePrice + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + itemPerPage);
      setMiniPageNumberLimit(miniPageNumberLimit + itemPerPage);
    }
  };
  const handleClick = (e) => {
    return setActivePrice(Number(e.target.id));
  };

  const handleEditSeatRow = (value) => {
    setEditPrice((prev) => {
      return { ...prev, rowName: value };
    });
  };
  const handleEditSeatNo = (value) => {
    setEditPrice((prev) => {
      return { ...prev, seatNo: value };
    });
  };
  const editRoom = (value) => {
    return setEditPrice((prev) => {
      return { ...prev, roomId: value };
    });
  };
  const postEditPrice = (e) => {
    return setEditPrice((prev) => {
      return { ...prev, price: Number(e.target.value) };
    });
  };
  const editSave = () => {
    if (!editPrice) {
      console.error("editPrice is undefined or null");
    }
    updateMutation.mutate(editPrice);
    window.location.href = "/admin/price";
  };
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
        handleSeatRow,
        handleSeatNo,
        savePrice,
        getType,
        handleDeletePrice,
        setEditPrice,
        editPrice,
        postEditPrice,
        editRoom,
        handleEditSeatRow,
        handleEditSeatNo,
        editSave,
        currentItem,
        handleClick,
        nextClick,
        prevClick,
        pages,
        activePrice,
      }}
    >
      {children}
    </PriceContext.Provider>
  );
};

export default PriceContextProvider;
