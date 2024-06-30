/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import UseFetchCustomer from "../hooks/UseFetchCustomer";
import { data } from "../Data/data";
import { township } from "../Data/data";

export const CustomerContext = createContext();

const CustomerContextProvider = ({ children }) => {
  const {
    isLoading,
    isError,
    error,
    customers,
    mutations,
    deleteId,
    updateMutation,
  } = UseFetchCustomer();

  const [newCustomer, setNewCustomer] = useState({
    fullName: "",
    email: "",
    password: "",
    stateCode: "",
    townshipCode: "",
    dateOfBirth: "",
  });
  const [editCustomer, setEditCustomer] = useState({
    fullName: "",
    email: "",
    password: "",
    stateCode: "",
    townshipCode: "",
    dateOfBirth: "",
  });
  const [create, setCreate] = useState(false);

  const getStateCode = (stateCode) => {
    const newState = data?.find((s) => {
      return (s.StateCode = stateCode);
    });
    if (newState) {
      return newState.StateName;
    } else {
      return "Unknown";
    }
  };
  const getTownshipCode = (townshipCode) => {
    const newState = township?.find((s) => {
      return (s.TownshipCode = townshipCode);
    });
    if (newState) {
      return newState.TownshipName;
    } else {
      return "Unknown";
    }
  };

  const editChange = (e) => {
    const { name, value } = e.target;
    setEditCustomer((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleEditTownship = (value) => {
    if (value) {
      const editTownship = township.find((t) => {
        return t.TownshipName === value;
      });
      setEditCustomer((prev) => {
        return { ...prev, townshipCode: editTownship.TownshipCode };
      });
    }
  };
  const handleEditState = (value) => {
    if (value) {
      const editState = data.find((f) => {
        return f.StateName === value;
      });
      setEditCustomer((prev) => {
        return { ...prev, stateCode: editState.StateCode };
      });
    }
  };
  const getCustomerName = (id) => {
    const getCustomer = customers.find((c) => {
      return c._id === id;
    });
    if (getCustomer) {
      return getCustomer.fullName;
    } else {
      return "Unknown";
    }
  };

  const editSave = () => {
    if (!editCustomer) {
      console.error("edit Customer is undefined or null");
    }
    updateMutation.mutate(editCustomer);
    window.location.href = "/admin/customer";
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

  const editTownship = township.filter((t) => {
    return editCustomer.stateCode === t.StateCode;
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
        editCustomer,
        setEditCustomer,
        getStateCode,
        getTownshipCode,
        editChange,
        editSave,
        handleEditTownship,
        handleEditState,
        editTownship,
        getCustomerName,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContextProvider;
