import { useQuery } from "react-query";
import Axios from "../Api/Apiconfig";

const getUser = async () => {
  const res = await Axios.get("/users");
  return res.data;
};

const UseFetchCustomer = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["users"],
    queryFn: getUser,
  });
  return { isLoading, isError, error, data };
};

export default UseFetchCustomer;
