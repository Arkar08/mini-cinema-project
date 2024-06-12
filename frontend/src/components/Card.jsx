import cinemaImg from "../Data/cinemalist_photo.jpg";

const Card = () => {
  return (
    <div className="grid grid-cols-4 gap-4 px-8 mt-4">
      <div className="border cursor-pointer text-center rounded-md bg-black text-red-600 h-[220px]">
        <img
          src={cinemaImg}
          alt="cinema_image"
          className="w-[100%] h-[80%] p-4 rounded-lg object-cover object-center"
        />
        <h2 className="text-xl">Mingalar Cinema</h2>
      </div>
      <div className="border cursor-pointer text-center rounded-md bg-black text-red-600 h-[220px]">
        <img
          src={cinemaImg}
          alt="cinema_image"
          className="w-[100%] h-[80%] p-4 rounded-lg object-cover object-center"
        />
        <h2 className="text-xl">Mingalar Cinema</h2>
      </div>
      <div className="border cursor-pointer text-center rounded-md bg-black text-red-600 h-[220px]">
        <img
          src={cinemaImg}
          alt="cinema_image"
          className="w-[100%] h-[80%] p-4 rounded-lg object-cover object-center"
        />
        <h2 className="text-xl">NayPyiTaw Cinema</h2>
      </div>
      <div className="border cursor-pointer text-center rounded-md bg-black text-red-600 h-[220px]">
        <img
          src={cinemaImg}
          alt="cinema_image"
          className="w-[100%] h-[80%] p-4 rounded-lg object-cover object-center"
        />
        <h2 className="text-xl">Mingalar Cinema</h2>
      </div>
      <div className="border cursor-pointer text-center rounded-md bg-black text-red-600 h-[220px]">
        <img
          src={cinemaImg}
          alt="cinema_image"
          className="w-[100%] h-[80%] p-4 rounded-lg object-cover object-center"
        />
        <h2 className="text-xl">Mingalar Cinema</h2>
      </div>
      <div className="border cursor-pointer text-center rounded-md bg-black text-red-600 h-[220px]">
        <img
          src={cinemaImg}
          alt="cinema_image"
          className="w-[100%] h-[80%] p-4 rounded-lg object-cover object-center"
        />
        <h2 className="text-xl">Mingalar Cinema</h2>
      </div>
    </div>
  );
};

export default Card;
