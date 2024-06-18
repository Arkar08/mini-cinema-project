/* eslint-disable react/prop-types */
import cinemaImg from "../../Data/cinemalist_photo.jpg";

const Card = ({ c }) => {
  return (
    <div
      className="border cursor-pointer text-center rounded-md bg-black text-red-600 h-[200px]"
      key={c._id}
    >
      <img
        src={cinemaImg}
        alt="cinema_image"
        className="w-[100%] h-[80%] p-2 rounded-lg object-cover object-center"
      />
      <h2 className="text-xl px-2">{c.name}</h2>
    </div>
  );
};

export default Card;
