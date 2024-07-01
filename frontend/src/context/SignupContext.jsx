/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { township } from "../Data/data";

export const SignupContext = createContext();

const SignupContextProvider = ({ children }) => {
  const [newUser, setNewUser] = useState({
    fullName: "",
    email: "",
    password: "",
    stateCode: "",
    townshipCode: "",
    dateOfBirth: "",
  });
  const selectTownship = township.filter((t) => {
    return newUser?.stateCode === t.StateCode;
  });

  const handleTownship = (value) => {
    setNewUser((prev) => {
      return { ...prev, townshipCode: value };
    });
  };
  const handleUser = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleState = (value) => {
    setNewUser((prev) => {
      return { ...prev, stateCode: value };
    });
  };
  return (
    <SignupContext.Provider
      value={{
        newUser,
        handleState,
        handleUser,
        handleTownship,
        selectTownship,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
};
export default SignupContextProvider;
