import { useMutation, useQuery } from "react-query";
import Axios from "../Api/Apiconfig";

const getPrice = async () => {
  const res = await Axios.get("/price");
  return res.data;
};

const postPrice = async (priceData) => {
  try {
    const res = await Axios.post("/price", priceData);
    return res.data;
  } catch (error) {
    return error.message;
  }
};
const UseFetchPrice = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["price"],
    queryFn: getPrice,
  });
  const mutation = useMutation({
    mutationKey: ["price"],
    mutationFn: (priceData) => {
      return postPrice(priceData);
    },
  });
  return { isLoading, isError, error, data, mutation };
};

export default UseFetchPrice;
