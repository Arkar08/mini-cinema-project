/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import UseFetchCustomer from "../hooks/UseFetchCustomer";
import { data } from "../Data/data";
import { township } from "../Data/data";

export const CustomerContext = createContext();

const CustomerContextProvider = ({ children }) => {
  const { isLoading, isError, error, customers } = UseFetchCustomer();

  const [create, setCreate] = useState(false);
  const handleCreate = () => {
    setCreate(!create);
  };
  const getStateName = (id) => {
    const getState = data?.find((d) => {
      return d.StateId === id;
    });
    if (getState) {
      return getState.StateName;
    } else {
      return "Unknown";
    }
  };
  const getTownshipName = (id) => {
    const getTownship = township?.find((t) => {
      return t.TownshipId === id;
    });
    if (getTownship) {
      return getTownship.TownshipName;
    } else {
      return "Unknown";
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
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContextProvider;
