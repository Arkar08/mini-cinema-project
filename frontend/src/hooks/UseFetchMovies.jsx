import { useMutation, useQuery } from "react-query";
import Axios from "../Api/Apiconfig";

const getMovies = async () => {
  const { data } = await Axios.get("/movies");
  return data;
};

const postMovies = async (moviesData) => {
  const res = await Axios.post("/movies", moviesData);
  return res.data;
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
  return { isLoading, error, isError, data, mutation };
};

export default UseFetchMovies;
