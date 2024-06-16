import { useQuery } from "react-query";
import Axios from "../Api/Apiconfig";

const getBookings = async () => {
  const res = await Axios.get("/bookings");
  return res.data;
};

const UseFetchBookings = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });
  return { isLoading, isError, error, data };
};

export default UseFetchBookings;
