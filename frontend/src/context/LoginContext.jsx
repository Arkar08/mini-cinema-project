/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useEffect, useState } from "react";
import UseLoginMutations from "../hooks/UseLoginMutations";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const loginMutations = UseLoginMutations();
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
    e.preventDefault();
    loginMutations.mutate(user);
  };
  useEffect(() => {
    if (loginMutations.isSuccess) {
      localStorage.setItem("token", loginMutations.data.token);
      localStorage.setItem("login", loginMutations.data.email);
      localStorage.setItem("isAdmin", loginMutations.data.isAdmin);
      window.location.href = "/";
    }
    if (loginMutations.isError) {
      setError(error);
    }
  }, [loginMutations.isSuccess, loginMutations.isError, error]);

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
