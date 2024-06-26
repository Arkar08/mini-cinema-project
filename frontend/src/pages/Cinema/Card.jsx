/* eslint-disable react/prop-types */
import { FaEdit, FaTrash } from "react-icons/fa";
import cinemaImg from "../../Data/cinemalist_photo.jpg";
import { useContext, useState } from "react";
import { CinemaContext } from "../../context/CinemaContext";
import { Link } from "react-router-dom";

const Card = ({ c }) => {
  const [active, setActive] = useState(false);
  const { handleDelete } = useContext(CinemaContext);
  const handleMouseEnter = () => {
    setActive(true);
  };
  const handleMouseLeave = () => {
    setActive(false);
  };
  return (
    <div
      className="border cursor-pointer text-center rounded-md bg-black text-red-600 h-[200px] relative"
      key={c._id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={cinemaImg}
        alt="cinema_image"
        className="w-[90%] h-[72%] p-2 rounded-lg object-cover object-center mx-auto"
      />
      <h2 className="text-xl px-2 uppercase">{c.name}</h2>
      <div
        className={`absolute bg-gray-600 w-[50px] h-[72%] top-2 right-0 flex flex-col items-center justify-center transition-opacity duration-300  ${
          active ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link to={`/admin/cinema/${c._id}`}>
          <FaEdit className="text-blue-500 m-2 transition-transform duration-300 transform hover:scale-110" />
        </Link>
        <FaTrash
          className="text-red-500 m-2 transition-transform duration-300 transform hover:scale-110"
          onClick={() => {
            handleDelete(c._id);
          }}
        />
      </div>
    </div>
  );
};

export default Card;
