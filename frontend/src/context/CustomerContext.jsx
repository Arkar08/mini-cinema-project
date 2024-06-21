/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import UseFetchCustomer from "../hooks/UseFetchCustomer";
import { data } from "../Data/data";
import { township } from "../Data/data";

export const CustomerContext = createContext();

const CustomerContextProvider = ({ children }) => {
  const { isLoading, isError, error, customers, mutations } =
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
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContextProvider;
