/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import UseFetchCinema from "../hooks/UseFetchCinema";

export const CinemaContext = createContext();

const CinemaContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [createCinema, setCreateCinema] = useState({
    name: "",
    location: "",
  });

  const handleCreate = (e) => {
    const { name, value } = e.target;

    setCreateCinema((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleClick = () => {
    setOpen(!open);
  };
  const {
    isFetching,
    isError,
    error,
    data: cinemas,
    mutation,
  } = UseFetchCinema();

  const handleSave = (e) => {
    e.preventDefault();
    mutation.mutate(createCinema);
    setCreateCinema("");
    setOpen(!open);
    window.location.reload();
  };

  return (
    <CinemaContext.Provider
      value={{
        handleClick,
        open,
        cinemas,
        isFetching,
        isError,
        error,
        createCinema,
        handleCreate,
        handleSave,
      }}
    >
      {children}
    </CinemaContext.Provider>
  );
};

export default CinemaContextProvider;
