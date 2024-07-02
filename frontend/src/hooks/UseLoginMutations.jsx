import { useMutation } from "react-query";
import Axios from "../Api/Apiconfig";

const loginUser = async (email, password) => {
  try {
    const response = await Axios.post("/users/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

const UseLoginMutations = () => {
  const mutations = useMutation({
    mutationKey: ["login"],
    mutationFn: ({ email, password }) => {
      return loginUser(email, password);
    },
  });
  return mutations;
};

const logout = async () => {
  await Axios.post("/users/logout");
};
export const UseLogoutMutation = () => {
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
  });
};
export default UseLoginMutations;
