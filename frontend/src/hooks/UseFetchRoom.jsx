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
    return error.message;
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
  return { isLoading, data, isError, error, mutations };
};
export default UseFetchRoom;
