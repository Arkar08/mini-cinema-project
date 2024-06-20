import { useMutation, useQuery } from "react-query";
import Axios from "../Api/Apiconfig";

const getSeat = async () => {
  const res = await Axios.get("/seats");
  return res.data;
};

const postSeat = async (seatData) => {
  try {
    const res = await Axios.post("/seats", seatData);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

const UseFetchSeat = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["seats"],
    queryFn: getSeat,
  });
  const mutationsSeat = useMutation({
    mutationKey: ["seats"],
    mutationFn: (seatData) => {
      return postSeat(seatData);
    },
  });
  return { isLoading, isError, error, data, mutationsSeat };
};

export default UseFetchSeat;
