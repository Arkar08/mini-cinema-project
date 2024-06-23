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
    return error;
  }
};

const deleteSeat = async (id) => {
  try {
    const res = await Axios.delete(`/seats/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
};
const getId = async (id) => {
  try {
    const res = await Axios.get(`/seats/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
};
const updateSeat = async (seatData) => {
  try {
    const res = await Axios.patch(`/seats/${seatData._id}`, seatData);
    return res.data;
  } catch (error) {
    return error;
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
  const deleteId = useMutation({
    mutationKey: ["seats"],
    mutationFn: (id) => {
      return deleteSeat(id);
    },
  });
  const seatMutation = useMutation({
    mutationKey: ["seats"],
    mutationFn: (seatData) => {
      return updateSeat(seatData);
    },
  });
  return {
    isLoading,
    isError,
    error,
    data,
    mutationsSeat,
    deleteId,
    getId,
    seatMutation,
  };
};

export default UseFetchSeat;
