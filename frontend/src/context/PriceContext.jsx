/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import UseFetchPrice from "../hooks/UseFetchPrice";
import { SeatContext } from "./SeatContext";

export const PriceContext = createContext();

const PriceContextProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const { seats } = useContext(SeatContext);
  const handleActive = () => {
    setActive(!active);
  };
  const { isFetching, isError, error, data: price } = UseFetchPrice();

  const getSeatName = (id) => {
    const getSeat = seats?.find((s) => {
      return s._id === id;
    });
    if (getSeat) {
      return getSeat.rowName;
    } else {
      return "Unknown";
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
        getSeatName,
      }}
    >
      {children}
    </PriceContext.Provider>
  );
};

export default PriceContextProvider;
