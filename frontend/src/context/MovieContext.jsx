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
  const [editMovies, setEditMovies] = useState({
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
    deleteMutation,
    updateMutation,
  } = UseFetchMovies();
  const [activeMovie, setActiveMovie] = useState(1);
  const [itemPerPage] = useState(4);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [miniPageNumberLimit, setMiniPageNumberLimit] = useState(0);
  const pages = [];
  const lastPage = itemPerPage * activeMovie;
  const firstPage = lastPage - itemPerPage;
  const currentItem = movies?.slice(firstPage, lastPage);
  for (let i = 1; i <= Math.ceil(movies?.length / itemPerPage); i++) {
    pages.push(i);
  }

  const prevClick = () => {
    setActiveMovie((prev) => prev - 1);
    if ((activeMovie - 1) % itemPerPage == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - itemPerPage);
      setMiniPageNumberLimit(miniPageNumberLimit - itemPerPage);
    }
  };
  const nextClick = () => {
    setActiveMovie((prev) => prev + 1);
    if (activeMovie + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + itemPerPage);
      setMiniPageNumberLimit(miniPageNumberLimit + itemPerPage);
    }
  };
  const handleClick = (e) => {
    return setActiveMovie(Number(e.target.id));
  };

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
  const updateChange = (e) => {
    const { name, value } = e.target;
    setEditMovies((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const updateSave = () => {
    if (!editMovies) {
      console.error("editMovies is undefined or null");
    }
    updateMutation.mutate(editMovies);
    window.location.href = "/admin/movie";
  };
  const movieSave = () => {
    mutation.mutate(postMovies);
    setIsClose(!isClose);
    window.location.reload();
  };

  const deleteMovie = (id) => {
    const confirm = window.confirm("Are you want to delete?");
    if (confirm) {
      deleteMutation.mutate(id);
      window.location.reload();
    }
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
        currentItem,
        handleClick,
        nextClick,
        prevClick,
        pages,
        activeMovie,
        deleteMovie,
        setEditMovies,
        editMovies,
        updateChange,
        updateSave,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
