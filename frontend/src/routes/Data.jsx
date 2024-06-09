import Dashboard from "../layouts/Dashboard.jsx";
import Booking from "../pages/Booking.jsx";
import Cinema from "../pages/Cinema.jsx";
import Customer from "../pages/Customer.jsx";
import Movie from "../pages/Movie.jsx";
import NotFound from "../pages/NotFound.jsx";
import Room from "../pages/Room.jsx";
import Seat from "../pages/Seat.jsx";
import SeatPrice from "../pages/SeatPrice.jsx";
import Home from "../pages/Home.jsx";

const routes = [
  {
    path: "/",
    Component: Dashboard,
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
];

export default routes;
