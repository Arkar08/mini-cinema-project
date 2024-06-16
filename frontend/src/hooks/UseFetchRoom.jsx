import { useQuery } from "react-query";
import Axios from "../Api/Apiconfig";

const getRoom = async () => {
  const res = await Axios.get("/rooms");
  return res.data;
};

const UseFetchRoom = () => {
  const { isFetching, isError, error, data } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRoom,
  });
  return { isFetching, isError, error, data };
};
export default UseFetchRoom;
