import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./Data.jsx";

const router = createBrowserRouter(routes);

const View = () => {
  return <RouterProvider router={router} />;
};

export default View;
