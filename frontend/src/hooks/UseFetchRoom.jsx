import { useQuery } from "react-query";
import Axios from "../Api/Apiconfig";

const getRoom = async () => {
  const res = await Axios.get("/rooms");
  return res.data;
};

const UseFetchRoom = () => {
  return useQuery({
    queryKey: ["rooms"],
    queryFn: getRoom,
  });
};
export default UseFetchRoom;
