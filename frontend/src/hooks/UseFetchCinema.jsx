import { useQuery } from "react-query";
import Axios from "../Api/Apiconfig";

const getCinema = async () => {
  const res = await Axios.get("/cinemas");
  return res.data;
};

const UseFetchCinema = () => {
  return useQuery({
    queryKey: ["cinemas"],
    queryFn: getCinema,
  });
};

export default UseFetchCinema;
