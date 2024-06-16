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
const routes = [
  {
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
        path: "customer",
        Component: Customer,
      },
      {
        path: "cinema",
        Component: Cinema,
      },
      {
        path: "movie",
        Component: Movie,
      },
      {
        path: "room",
        Component: Room,
      },
      {
        path: "seat",
        Component: Seat,
      },
      {
        path: "price",
        Component: SeatPrice,
      },
      {
        path: "booking",
        Component: Booking,
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
