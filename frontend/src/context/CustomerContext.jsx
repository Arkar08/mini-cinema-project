/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import UseFetchCustomer from "../hooks/UseFetchCustomer";
import { data } from "../Data/data";
import { township } from "../Data/data";

export const CustomerContext = createContext();

const CustomerContextProvider = ({ children }) => {
  const { isLoading, isError, error, customers, mutations, deleteId } =
    UseFetchCustomer();

  const [newCustomer, setNewCustomer] = useState({
    fullName: "",
    email: "",
    password: "",
    stateCode: "",
    townshipCode: "",
    dateOfBirth: "",
  });
  const [create, setCreate] = useState(false);
  const [activeUser, setActiveUser] = useState(1);
  const [itemPerPage] = useState(1);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [miniPageNumberLimit, setMiniPageNumberLimit] = useState(0);
  const pages = [];
  const lastPage = itemPerPage * activeUser;
  const firstPage = lastPage - itemPerPage;
  const currentItem = customers?.slice(firstPage, lastPage);
  for (let i = 1; i <= Math.ceil(customers?.length / itemPerPage); i++) {
    pages.push(i);
  }

  const prevClick = () => {
    setActiveUser((prev) => prev - 1);
    if ((activeUser - 1) % itemPerPage == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - itemPerPage);
      setMiniPageNumberLimit(miniPageNumberLimit - itemPerPage);
    }
  };
  const nextClick = () => {
    setActiveUser((prev) => prev + 1);
    if (activeUser + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + itemPerPage);
      setMiniPageNumberLimit(miniPageNumberLimit + itemPerPage);
    }
  };
  const handleClick = (e) => {
    return setActiveUser(Number(e.target.id));
  };

  const handleCreate = () => {
    setCreate(!create);
  };
  const getStateName = (id) => {
    const getState = data?.find((d) => {
      return d.StateCode === id;
    });
    if (getState) {
      return getState.StateName;
    } else {
      return "Unknown";
    }
  };
  const getTownshipName = (id) => {
    const getTownship = township?.find((t) => {
      return t.TownshipCode === id;
    });
    if (getTownship) {
      return getTownship.TownshipName;
    } else {
      return "Unknown";
    }
  };
  const handleCustomer = (e) => {
    const { name, value } = e.target;
    setNewCustomer((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleState = (value) => {
    setNewCustomer((prev) => {
      return { ...prev, stateCode: value };
    });
  };

  const filterTownship = township.filter((t) => {
    return newCustomer.stateCode === t.StateCode;
  });

  const handleTownship = (value) => {
    setNewCustomer((prev) => {
      return { ...prev, townshipCode: value };
    });
  };
  const checkDisabled = newCustomer.stateCode === "" ? true : false;
  const handleSave = () => {
    mutations.mutate(newCustomer);
    setCreate(!create);
    window.location.reload();
  };
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you want to delete?");
    if (confirm) {
      deleteId.mutate(id);
      window.location.reload();
    }
  };
  return (
    <CustomerContext.Provider
      value={{
        isLoading,
        isError,
        error,
        customers,
        create,
        handleCreate,
        getStateName,
        getTownshipName,
        newCustomer,
        handleCustomer,
        handleSave,
        handleState,
        filterTownship,
        handleTownship,
        checkDisabled,
        handleDelete,
        currentItem,
        handleClick,
        nextClick,
        prevClick,
        pages,
        activeUser,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContextProvider;
