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
import CinemaUser from "../pages/UserView/CinemaUser.jsx";
import EditCustomer from "../pages/Customer/EditCustomer.jsx";
import EditRoom from "../pages/Room/EditRoom.jsx";
import EditSeat from "../pages/Seat/EditSeat.jsx";
import EditPrice from "../pages/SeatPrice/EditPrice.jsx";
import EditCinema from "../pages/Cinema/EditCinema.jsx";
import EditMovie from "../pages/Movie/EditMovie.jsx";
import RoomUser from "../pages/UserView/RoomUser.jsx";
import HomeUser from "../pages/UserView/HomeUser.jsx";
import SeatUser from "../pages/UserView/SeatUser.jsx";
import PrintBooking from "../pages/Booking/PrintBooking.jsx";
import PrintUser from "../pages/UserView/PrintUser.jsx";

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
            path: "admin/cinema/:cinemaId",
            Component: EditCinema,
          },
          {
            path: "admin/movie",
            Component: Movie,
          },
          {
            path: "admin/movie/:movieId",
            Component: EditMovie,
          },
          {
            path: "admin/room",
            Component: Room,
          },
          {
            path: "admin/room/:roomId",
            Component: EditRoom,
          },
          {
            path: "admin/seat",
            Component: Seat,
          },
          {
            path: "admin/seat/:seatId",
            Component: EditSeat,
          },
          {
            path: "admin/price",
            Component: SeatPrice,
          },
          {
            path: "admin/price/:priceId",
            Component: EditPrice,
          },
          {
            path: "admin/booking",
            Component: Booking,
          },
          {
            path: "admin/booking/:printId",
            Component: PrintBooking,
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
          {
            path: "user/cinema/:movieId",
            Component: RoomUser,
          },
          {
            path: "user/seat",
            Component: SeatUser,
          },
          {
            path: "user/seat/:printId",
            Component: PrintUser,
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
