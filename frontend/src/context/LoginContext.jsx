/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useEffect, useState } from "react";
import UseLoginMutations from "../hooks/UseLoginMutations";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const mutations = UseLoginMutations();
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    if (user) {
      e.preventDefault();
      mutations.mutate(user);
    } else {
      console.log("user is not exist");
    }
  };
  useEffect(() => {
    if (mutations.isSuccess) {
      localStorage.setItem("token", mutations.data.token);
      localStorage.setItem("login", mutations.data.email);
      localStorage.setItem("isAdmin", mutations.data.isAdmin);
      window.location.href = "/";
    }
    if (mutations.isError) {
      setError(error);
    }
  }, [mutations.isSuccess, mutations.isError, error]);

  return (
    <LoginContext.Provider
      value={{
        handleChange,
        user,
        handleSubmit,
        error,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
