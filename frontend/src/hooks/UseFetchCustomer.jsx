/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQuery } from "react-query";
import Axios from "../Api/Apiconfig";
const getUser = async () => {
  const res = await Axios.get("/users");
  return res.data;
};

const postUser = async (userData) => {
  try {
    const res = await Axios.post("/users/signup", userData);
    return res.data;
  } catch (error) {
    return error;
  }
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
  const mutations = useMutation({
    mutationKey: ["users"],
    mutationFn: (userData) => {
      return postUser(userData);
    },
  });
  return { isLoading, isError, error, customers, mutations };
};

export default UseFetchCustomer;
