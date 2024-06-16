import { useState } from "react";
import { Navigate } from "react-router-dom";

const getToken = () => {
  return localStorage.getItem("token");
};

const ProvideRoute = ({ children }) => {
  const [token] = useState(getToken);
  return !token ? <Navigate to="/login" replace /> : children;
};
export default ProvideRoute;
