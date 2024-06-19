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
    return res;
  } catch (error) {
    return error.message;
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
  return { isLoading, isError, data, error, mutation };
};

export default UseFetchCinema;
