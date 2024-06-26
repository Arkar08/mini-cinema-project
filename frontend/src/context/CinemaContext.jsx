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
  const [editCinema, setEditCinema] = useState({
    name: "",
    location: "",
  });
  const {
    isFetching,
    isError,
    error,
    data: cinemas,
    mutation,
    deleteMutation,
    updateMutation,
  } = UseFetchCinema();

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    return setEditCinema((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const [activeCinema, setActiveCinema] = useState(1);
  const [itemPerPage] = useState(8);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [miniPageNumberLimit, setMiniPageNumberLimit] = useState(0);
  const pages = [];
  const lastPage = itemPerPage * activeCinema;
  const firstPage = lastPage - itemPerPage;
  const currentItem = cinemas?.slice(firstPage, lastPage);
  for (let i = 1; i <= Math.ceil(cinemas?.length / itemPerPage); i++) {
    pages.push(i);
  }

  const prevClick = () => {
    setActiveCinema((prev) => prev - 1);
    if ((activeCinema - 1) % itemPerPage == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - itemPerPage);
      setMiniPageNumberLimit(miniPageNumberLimit - itemPerPage);
    }
  };
  const nextClick = () => {
    setActiveCinema((prev) => prev + 1);
    if (activeCinema + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + itemPerPage);
      setMiniPageNumberLimit(miniPageNumberLimit + itemPerPage);
    }
  };
  const handle = (e) => {
    return setActiveCinema(Number(e.target.id));
  };

  const handleCreate = (e) => {
    const { name, value } = e.target;

    setCreateCinema((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleClick = () => {
    setOpen(!open);
  };

  const handleSave = (e) => {
    e.preventDefault();
    mutation.mutate(createCinema);
    setCreateCinema("");
    setOpen(!open);
    window.location.reload();
  };

  const handleUpdate = () => {
    if (!editCinema) {
      console.error("editcinema is undefined or null");
    }
    updateMutation.mutate(editCinema);
    window.location.href = "/admin/cinema";
  };
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you want to delete?");
    if (confirm) {
      deleteMutation.mutate(id);
      window.location.reload();
    }
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
        activeCinema,
        pages,
        currentItem,
        nextClick,
        prevClick,
        handle,
        handleDelete,
        setEditCinema,
        editCinema,
        handleEditChange,
        handleUpdate,
      }}
    >
      {children}
    </CinemaContext.Provider>
  );
};

export default CinemaContextProvider;
