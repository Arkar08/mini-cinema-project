/* eslint-disable react/no-unescaped-entities */
import { Input, Checkbox, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  const { handleChange, handleSubmit, user, error } = useContext(LoginContext);
  return (
    <form
      color="transparent"
      className="border p-4 shadow-md"
      onSubmit={handleSubmit}
    >
      <Typography
        variant="h4"
        color="blue-gray"
        className="text-center uppercase"
      >
        Ticket login
      </Typography>
      {error && <div>{error.message}</div>}
      <div className="mt-8 mb-2  max-w-screen-lg w-[300px]">
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
        <div className="bg-black text-white flex items-center justify-center mx-auto p-2 rounded-md">
          <input
            type="submit"
            value="Login"
            className="cursor-pointer uppercase"
          />
        </div>

        <Typography color="gray" className="mt-4 text-center font-normal">
          Don't have an account?{" "}
          <Link to="/signup" className="font-medium text-gray-900">
            Sign up
          </Link>
        </Typography>
      </div>
    </form>
  );
};

export default Login;
