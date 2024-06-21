import Dashboard from "../layouts/Dashboard.jsx";
import Booking from "../pages/Booking/Booking.jsx";
import Customer from "../pages/Customer/Customer.jsx";
import NotFound from "../pages/NotFound.jsx";
import Cinema from "../pages/Cinema/Cinema.jsx";
import Room from "../pages/Room/Room.jsx";
import Seat from "../pages/Seat/Seat.jsx";
import SeatPrice from "../pages/SeatPrice/SeatPrice.jsx";
import Home from "../pages/Home.jsx";
import Movie from "../pages/Movie/Movie.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import ProvideRoute from "../layouts/ProvideRoute.jsx";
import User from "../layouts/User.jsx";
import HomeUser from "../pages/UserView/HomeUser.jsx";
import CinemaUser from "../pages/UserView/CinemaUser.jsx";
import EditCustomer from "../pages/Customer/EditCustomer.jsx";

const getPermission = () => {
  return localStorage.getItem("isAdmin") === "true";
};

const routes = [
  getPermission()
    ? {
        path: "/",
        element: (
          <ProvideRoute>
            <Dashboard />
          </ProvideRoute>
        ),
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            Component: Home,
          },
          {
            path: "admin/customer",
            Component: Customer,
          },
          {
            path: "admin/customer/:customerId",
            Component: EditCustomer,
          },
          {
            path: "admin/cinema",
            Component: Cinema,
          },
          {
            path: "admin/movie",
            Component: Movie,
          },
          {
            path: "admin/room",
            Component: Room,
          },
          {
            path: "admin/seat",
            Component: Seat,
          },
          {
            path: "admin/price",
            Component: SeatPrice,
          },
          {
            path: "admin/booking",
            Component: Booking,
          },
        ],
      }
    : {
        path: "/",
        element: (
          <ProvideRoute>
            <User />
          </ProvideRoute>
        ),
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            Component: HomeUser,
          },
          {
            path: "user/cinema",
            Component: CinemaUser,
          },
        ],
      },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
];

export default routes;
