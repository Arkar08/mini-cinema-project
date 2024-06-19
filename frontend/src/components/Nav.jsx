import { NavLink } from "react-router-dom";

const navlinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Customer",
    url: "/admin/customer",
  },
  {
    title: "Cinema",
    url: "/admin/cinema",
  },
  {
    title: "Movie",
    url: "/admin/movie",
  },
  {
    title: "Room",
    url: "/admin/room",
  },
  {
    title: "Seat",
    url: "/admin/seat",
  },
  {
    title: "SeatPrice",
    url: "/admin/price",
  },
  {
    title: "Booking",
    url: "/admin/booking",
  },
];

const Nav = () => {
  return (
    <div className="flex flex-col text-red-600 mt-6 justify-center text-start px-8">
      {navlinks.map((nav, index) => {
        return (
          <NavLink
            to={nav.url}
            key={index}
            className="p-2 m-2 rounded-md hover:bg-gray-300"
          >
            {nav.title}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Nav;
