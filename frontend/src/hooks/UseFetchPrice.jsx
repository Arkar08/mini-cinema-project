import { useQuery } from "react-query";
import Axios from "../Api/Apiconfig";

const getPrice = async () => {
  const res = await Axios.get("/price");
  return res.data;
};

const UseFetchPrice = () => {
  const { isFetching, isError, error, data } = useQuery({
    queryKey: ["price"],
    queryFn: getPrice,
  });
  return { isFetching, isError, error, data };
};

export default UseFetchPrice;
