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

const deleteRoom = async (id) => {
  try {
    const res = await Axios.delete(`/rooms/${id}`);
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
  const deleteId = useMutation({
    mutationKey: ["rooms"],
    mutationFn: (roomId) => {
      return deleteRoom(roomId);
    },
  });
  return { isLoading, data, isError, error, mutations, deleteId };
};
export default UseFetchRoom;
