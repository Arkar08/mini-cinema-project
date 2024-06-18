/* eslint-disable react/prop-types */
const MovieCard = ({ m }) => {
  return (
    <div className="border h-[250px]  rounded-lg">
      <img src="" alt="movie_img" className="w-[50%] h-[50%] mx-auto p-2" />
      <div className="flex justify-between items-center px-2">
        <label>Title-</label>
        <h1 className="text-xl text-red-500">{m.title}</h1>
      </div>
      <div className="flex justify-between items-center px-2">
        <label>Duration-</label>
        <h1 className="text-xl text-red-500">{m.duration}</h1>
      </div>
      <div className="flex justify-between items-center px-2">
        <label>Date-</label>
        <h1 className="text-xl text-red-500 p-2">{m.date}</h1>
      </div>
    </div>
  );
};

export default MovieCard;
