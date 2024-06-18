/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import UseFetchMovies from "../hooks/UseFetchMovies";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [isClose, setIsClose] = useState(false);
  const { isFetching, error, data: movies, isError } = UseFetchMovies();
  const handleClose = () => {
    setIsClose(!isClose);
  };
  return (
    <MovieContext.Provider
      value={{ isFetching, error, movies, isError, handleClose, isClose }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
