import { useQuery } from "react-query";
import Axios from "../Api/Apiconfig";

const getSeat = async () => {
  const res = await Axios.get("/seats");
  return res.data;
};

const UseFetchSeat = () => {
  return useQuery({
    queryKey: ["seats"],
    queryFn: getSeat,
  });
};

export default UseFetchSeat;
