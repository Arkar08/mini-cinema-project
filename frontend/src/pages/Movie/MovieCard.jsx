/* eslint-disable react/prop-types */
import moment from "moment";
import { useContext, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MovieContext } from "../../context/MovieContext";
import { Link } from "react-router-dom";

const MovieCard = ({ m }) => {
  const [active, setActive] = useState(false);
  const { deleteMovie } = useContext(MovieContext);
  const handleMouseEnter = () => {
    setActive(true);
  };
  const handleMouseLeave = () => {
    setActive(false);
  };
  return (
    <div
      className="border h-[350px]  rounded-lg relative flex flex-col justify-between"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={m.photo}
        alt="movie_img"
        className="w-[200px] h-[230px] mx-auto p-2"
      />
      <div className="flex justify-between items-center px-2">
        <label>Title-</label>
        <h1 className=" text-red-500 uppercase px-4">{m.title}</h1>
      </div>
      <div className="flex justify-between items-center px-2">
        <label>Duration-</label>
        <h1 className=" text-red-500 px-4">{m.duration}</h1>
      </div>
      <div className="flex justify-between items-center px-2">
        <label>Date-</label>
        <h1 className=" text-red-500 px-4">{moment(m.date).format("L")}</h1>
      </div>
      <div
        className={`absolute bg-gray-500 w-[50px] h-[50%] top-2 right-0 flex flex-col items-center justify-center transition-opacity duration-300  ${
          active ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link to={`/admin/movie/${m._id}`}>
          <FaEdit className="text-blue-500 m-2 transition-transform duration-300 transform hover:scale-110 cursor-pointer" />
        </Link>
        <FaTrash
          className="text-red-500 m-2 transition-transform duration-300 transform hover:scale-110 cursor-pointer"
          onClick={() => deleteMovie(m._id)}
        />
      </div>
    </div>
  );
};

export default MovieCard;
