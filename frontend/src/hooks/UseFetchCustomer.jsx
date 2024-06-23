/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQuery } from "react-query";
import Axios from "../Api/Apiconfig";

const getUser = async () => {
  try {
    const res = await Axios.get("/users");
    return res.data;
  } catch (error) {
    return error;
  }
};

const postUser = async (userData) => {
  try {
    const res = await Axios.post("/users/signup", userData);
    return res.data;
  } catch (error) {
    return error;
  }
};
const deleteUser = async (id) => {
  try {
    const res = await Axios.delete(`/users/${id}`);
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
  const deleteId = useMutation({
    mutationKey: ["users"],
    mutationFn: (id) => {
      return deleteUser(id);
    },
  });
  return { isLoading, isError, error, customers, mutations, deleteId };
};

export default UseFetchCustomer;
