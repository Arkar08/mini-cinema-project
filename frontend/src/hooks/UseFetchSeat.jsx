import { useQuery } from "react-query";
import Axios from "../Api/Apiconfig";

const getSeat = async () => {
  const res = await Axios.get("/seats");
  return res.data;
};

const UseFetchSeat = () => {
  const { isFetching, isError, error, data } = useQuery({
    queryKey: ["seats"],
    queryFn: getSeat,
  });
  return { isFetching, isError, error, data };
};

export default UseFetchSeat;
