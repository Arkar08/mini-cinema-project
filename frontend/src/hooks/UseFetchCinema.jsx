import { useQuery } from "react-query";
import Axios from "../Api/Apiconfig";

const getCinema = async () => {
  const res = await Axios.get("/cinemas");
  return res.data;
};

const UseFetchCinema = () => {
  const { isFetching, isError, error, data } = useQuery({
    queryKey: ["cinemas"],
    queryFn: getCinema,
  });
  return { isFetching, isError, error, data };
};

export default UseFetchCinema;
