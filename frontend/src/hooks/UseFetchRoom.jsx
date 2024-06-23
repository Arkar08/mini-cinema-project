import { useMutation, useQuery } from "react-query";
import Axios from "../Api/Apiconfig";

const getRoom = async () => {
  const res = await Axios.get("/rooms");
  return res.data;
};

const postRoom = async (roomData) => {
  try {
    const res = await Axios.post("/rooms", roomData);
    return res.data;
  } catch (error) {
    return error;
  }
};

const getId = async (roomId) => {
  try {
    const res = await Axios.get(`/rooms/${roomId}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

const deleteRoom = async (id) => {
  try {
    const res = await Axios.delete(`/rooms/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
};
const updateRoom = async (roomData) => {
  try {
    const res = await Axios.patch(`/rooms/${roomData._id}`, roomData);
    console.log(res.data);
    return res.data;
  } catch (error) {
    return error;
  }
};

const UseFetchRoom = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRoom,
  });

  const mutations = useMutation({
    mutationKey: ["rooms"],
    mutationFn: (roomData) => {
      return postRoom(roomData);
    },
  });
  const updateMutation = useMutation({
    mutationKey: ["rooms"],
    mutationFn: (roomData) => {
      return updateRoom(roomData);
    },
  });
  const deleteId = useMutation({
    mutationKey: ["rooms"],
    mutationFn: (roomData) => {
      return deleteRoom(roomData);
    },
  });
  return {
    isLoading,
    data,
    isError,
    error,
    mutations,
    deleteId,
    getId,
    updateMutation,
  };
};
export default UseFetchRoom;
