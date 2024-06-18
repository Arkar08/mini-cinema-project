import { useQuery } from "react-query";
import Axios from "../Api/Apiconfig";

const getUser = async () => {
  const res = await Axios.get("/users");
  return res.data.data;
};

const UseFetchCustomer = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUser,
  });
};

export default UseFetchCustomer;
