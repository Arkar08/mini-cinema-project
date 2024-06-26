import { useMutation, useQuery } from "react-query";
import Axios from "../Api/Apiconfig";

const getMovies = async () => {
  const { data } = await Axios.get("/movies");
  return data;
};

const postMovies = async (moviesData) => {
  try {
    const res = await Axios.post("/movies", moviesData);
    return res.data;
  } catch (error) {
    return error;
  }
};
const getId = async (movie) => {
  try {
    const res = await Axios.get(`/movies/${movie}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

const deleteMovie = async (movieId) => {
  try {
    const res = await Axios.delete(`/movies/${movieId}`);
    return res.data;
  } catch (error) {
    return error;
  }
};
const UseFetchMovies = () => {
  const { isLoading, error, isError, data } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });
  const mutation = useMutation({
    mutationKey: ["movies"],
    mutationFn: (moviesData) => {
      return postMovies(moviesData);
    },
  });
  const deleteMutation = useMutation({
    mutationKey: ["movies"],
    mutationFn: (movieId) => {
      return deleteMovie(movieId);
    },
  });
  return { isLoading, error, isError, data, mutation, deleteMutation, getId };
};

export default UseFetchMovies;
