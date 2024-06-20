/* eslint-disable react/prop-types */
import moment from "moment";
const MovieCard = ({ m }) => {
  return (
    <div className="border h-[250px]  rounded-lg">
      <img
        src={m.photo}
        alt="movie_img"
        className="w-[130px] h-[130px] mx-auto p-2"
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
    </div>
  );
};

export default MovieCard;
