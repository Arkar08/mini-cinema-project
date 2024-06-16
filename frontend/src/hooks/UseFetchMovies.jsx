import { useQuery } from "react-query";
import Axios from "../Api/Apiconfig";

const getMovies = async () => {
  const { data } = await Axios.get("/movies");
  return data;
};

const UseFetchMovies = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });
};

export default UseFetchMovies;
