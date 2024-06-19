import { useQuery } from "react-query";
import Axios from "../Api/Apiconfig";

const getRoom = async () => {
  const res = await Axios.get("/rooms");
  return res.data;
};

const UseFetchRoom = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRoom,
  });
  return { isLoading, data, isError, error };
};
export default UseFetchRoom;
