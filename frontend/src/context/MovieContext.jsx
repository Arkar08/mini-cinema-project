/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import UseFetchMovies from "../hooks/UseFetchMovies";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [isClose, setIsClose] = useState(false);
  const [postMovies, setPostMovies] = useState({
    title: "",
    date: "",
    duration: "",
    photo: "",
  });
  const {
    isLoading,
    error,
    data: movies,
    isError,
    mutation,
  } = UseFetchMovies();
  const handleClose = () => {
    setIsClose(!isClose);
  };

  const movieChange = (e) => {
    const { name, value } = e.target;
    setPostMovies((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const movieSave = () => {
    mutation.mutate(postMovies);
    setIsClose(!isClose);
    window.location.reload();
  };
  return (
    <MovieContext.Provider
      value={{
        isLoading,
        error,
        movies,
        isError,
        handleClose,
        isClose,
        postMovies,
        movieChange,
        movieSave,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
