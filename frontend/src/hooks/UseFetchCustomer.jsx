import { useQuery } from "react-query";
import Axios from "../Api/Apiconfig";

const getUser = async () => {
  const res = await Axios.get("/users");
  return res.data.data;
};

const UseFetchCustomer = () => {
  const { isFetching, isError, data, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUser,
  });
  return { isFetching, isError, data, error };
};

export default UseFetchCustomer;
