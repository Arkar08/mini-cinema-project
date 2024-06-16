/* eslint-disable react/no-unescaped-entities */
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseLoginMutations from "../hooks/UseLoginMutations";

const Login = () => {
  const loginMutations = UseLoginMutations();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutations.mutate(user);
  };

  useEffect(() => {
    if (loginMutations.isSuccess) {
      localStorage.setItem("token", loginMutations.data.token);
      window.location.href = "/";
    }
    if (loginMutations.isError) {
      console.log(loginMutations.error);
    }
  }, [loginMutations.isSuccess, loginMutations.isError]);

  return (
    <Card color="transparent" shadow={false} className="border p-4 shadow-lg">
      <Typography variant="h4" color="blue-gray">
        Login
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={user.email}
            name="email"
            onChange={handleChange}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={user.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth onClick={handleSubmit}>
          Log in
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Don't have an account?{" "}
          <Link to="/signup" className="font-medium text-gray-900">
            Sign up
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

export default Login;
