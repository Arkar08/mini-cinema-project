/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "react-query";
import Axios from "../Api/Apiconfig";
const getUser = async () => {
  const res = await Axios.get("/users");
  return res.data;
};

const UseFetchCustomer = () => {
  const {
    isLoading,
    isError,
    error,
    data: customers,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUser,
  });
  return { isLoading, isError, error, customers };
};

export default UseFetchCustomer;
