/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import UseFetchCinema from "../hooks/UseFetchCinema";

export const CinemaContext = createContext();

const CinemaContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const { isFetching, isError, error, data: cinemas } = UseFetchCinema();

  return (
    <CinemaContext.Provider
      value={{ handleClick, open, cinemas, isFetching, isError, error }}
    >
      {children}
    </CinemaContext.Provider>
  );
};

export default CinemaContextProvider;
