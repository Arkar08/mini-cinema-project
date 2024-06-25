/* eslint-disable react/prop-types */
import moment from "moment";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const MovieCard = ({ m }) => {
  const [active, setActive] = useState(false);
  const handleMouseEnter = () => {
    setActive(true);
  };
  const handleMouseLeave = () => {
    setActive(false);
  };
  return (
    <div
      className="border h-[350px]  rounded-lg relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={m.photo}
        alt="movie_img"
        className="w-[200px] h-[250px] mx-auto p-2"
      />
      <div className="flex justify-between items-center px-2">
        <label>Title-</label>
        <h1 className=" text-red-500 uppercase">{m.title}</h1>
      </div>
      <div className="flex justify-between items-center px-2">
        <label>Duration-</label>
        <h1 className=" text-red-500">{m.duration}</h1>
      </div>
      <div className="flex justify-between items-center px-2">
        <label>Date-</label>
        <h1 className=" text-red-500 p-2">{moment(m.date).format("L")}</h1>
      </div>
      <div
        className={`absolute bg-gray-500 w-[50px] h-[50%] top-2 right-0 flex flex-col items-center justify-center transition-opacity duration-300  ${
          active ? "opacity-100" : "opacity-0"
        }`}
      >
        <FaEdit className="text-blue-500 m-2 transition-transform duration-300 transform hover:scale-110" />
        <FaTrash className="text-red-500 m-2 transition-transform duration-300 transform hover:scale-110" />
      </div>
    </div>
  );
};

export default MovieCard;
