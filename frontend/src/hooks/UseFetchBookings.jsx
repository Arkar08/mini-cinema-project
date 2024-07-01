import { useQuery } from "react-query";
import Axios from "../Api/Apiconfig";

const getBookings = async () => {
  try {
    const res = await Axios.get("/admin/bookings");
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getBookingId = async (bookingId) => {
  try {
    const res = await Axios.get(`/admin/bookings/${bookingId}`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

const UseFetchBookings = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });
  return { isLoading, isError, error, data, getBookingId };
};

export default UseFetchBookings;
