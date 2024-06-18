/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import UseFetchPrice from "../hooks/UseFetchPrice";

export const PriceContext = createContext();

const PriceContextProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };
  const { isFetching, isError, error, data: price } = UseFetchPrice();
  return (
    <PriceContext.Provider
      value={{ handleActive, active, price, isFetching, isError, error }}
    >
      {children}
    </PriceContext.Provider>
  );
};

export default PriceContextProvider;
