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
const getId = async (userId) => {
  try {
    const res = await Axios.get(`/users/${userId}`);
    return res.data;
  } catch (error) {
    return error;
  }
};
const updateUser = async (users) => {
  try {
    const res = await Axios.patch(`/users/${users._id}`, users);
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
  const updateMutation = useMutation({
    mutationKey: ["users"],
    mutationFn: (users) => {
      return updateUser(users);
    },
  });
  const deleteId = useMutation({
    mutationKey: ["users"],
    mutationFn: (id) => {
      return deleteUser(id);
    },
  });
  return {
    isLoading,
    isError,
    error,
    customers,
    mutations,
    deleteId,
    getId,
    updateMutation,
  };
};

export default UseFetchCustomer;
