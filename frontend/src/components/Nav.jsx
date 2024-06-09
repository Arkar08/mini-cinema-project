import { NavLink } from "react-router-dom";

const navlinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Customer",
    url: "/customer",
  },
  {
    title: "Cinema",
    url: "/cinema",
  },
  {
    title: "Movie",
    url: "/movie",
  },
  {
    title: "Room",
    url: "/room",
  },
  {
    title: "Seat",
    url: "/seat",
  },
  {
    title: "SeatPrice",
    url: "/price",
  },
  {
    title: "Booking",
    url: "/booking",
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
