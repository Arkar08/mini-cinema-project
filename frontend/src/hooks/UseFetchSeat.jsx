import { useQuery } from "react-query";
import Axios from "../Api/Apiconfig";

const getSeat = async () => {
  const res = await Axios.get("/seats");
  return res.data;
};

const UseFetchSeat = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["seats"],
    queryFn: getSeat,
  });
  return { isLoading, isError, error, data };
};

export default UseFetchSeat;
