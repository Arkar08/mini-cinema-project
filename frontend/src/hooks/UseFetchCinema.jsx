/* eslint-disable no-unreachable */
import { useMutation, useQuery } from "react-query";
import Axios from "../Api/Apiconfig";

const getCinema = async () => {
  const res = await Axios.get("/cinemas");
  return res.data;
};

const postCinema = async (userData) => {
  try {
    const res = await Axios.post("/cinemas", userData);
    return res.data;
  } catch (error) {
    return error.message;
  }
};
const getId = async (cineId) => {
  try {
    const res = await Axios.get(`/cinemas/${cineId}`);
    return res.data;
  } catch (error) {
    return error;
  }
};
const deleteCinema = async (cinemaId) => {
  try {
    const res = await Axios.delete(`/cinemas/${cinemaId}`);
    return res.data;
  } catch (error) {
    return error.message;
  }
};
const updateCinema = async (cinema) => {
  try {
    const res = await Axios.patch(`/cinemas/${cinema._id}`, cinema);
    return res.data;
  } catch (error) {
    return error;
  }
};

const UseFetchCinema = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["cinemas"],
    queryFn: getCinema,
  });
  const mutation = useMutation({
    mutationKey: ["cinemas"],
    mutationFn: (userData) => {
      return postCinema(userData);
    },
  });
  const updateMutation = useMutation({
    mutationKey: ["cinemas"],
    mutationFn: (cinema) => {
      return updateCinema(cinema);
    },
  });
  const deleteMutation = useMutation({
    mutationKey: ["cinemas"],
    mutationFn: (cinemaId) => {
      return deleteCinema(cinemaId);
    },
  });
  return {
    isLoading,
    isError,
    data,
    error,
    mutation,
    deleteMutation,
    getId,
    updateMutation,
  };
};

export default UseFetchCinema;
