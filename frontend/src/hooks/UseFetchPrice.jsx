import { useQuery } from "react-query";
import Axios from "../Api/Apiconfig";

const getPrice = async () => {
  const res = await Axios.get("/price");
  return res.data;
};

const UseFetchPrice = () => {
  return useQuery({
    queryKey: ["price"],
    queryFn: getPrice,
  });
};

export default UseFetchPrice;
