import movie from "../Data/avator.jpg";

const UserComing = () => {
  return (
    <div className="w-full overflow-x-auto h-90 overflow-y-hidden scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 mt-8">
      <div className="flex space-x-5">
        <div className="border  min-w-[300px] h-[400px] rounded-lg">
          <img
            src={movie}
            alt="movie-photo"
            className="w-[100%] h-[350px] object-cover object-center p-4"
          />
          <h2 className="text-xl text-red-500 text-center">The Nun</h2>
        </div>
        <div className="border min-w-[300px] h-[400px]  rounded-lg">
          <img
            src={movie}
            alt="movie-photo"
            className="w-[100%] h-[350px] object-cover object-center p-4"
          />
          <h2 className="text-xl text-red-500 text-center">The Nun</h2>
        </div>
        <div className="border min-w-[300px] h-[400px]  rounded-lg">
          <img
            src={movie}
            alt="movie-photo"
            className="w-[100%] h-[350px] object-cover object-center p-4"
          />
          <h2 className="text-xl text-red-500 text-center">The Nun</h2>
        </div>
        <div className="border  min-w-[300px] h-[400px] rounded-lg">
          <img
            src={movie}
            alt="movie-photo"
            className="w-[100%] h-[350px] object-cover object-center p-4"
          />
          <h2 className="text-xl text-red-500 text-center">The Nun</h2>
        </div>
        <div className="border  min-w-[300px] h-[400px] rounded-lg">
          <img
            src={movie}
            alt="movie-photo"
            className="w-[100%] h-[350px] object-cover object-center p-4"
          />
          <h2 className="text-xl text-red-500 text-center">The Nun</h2>
        </div>
        <div className="border  min-w-[300px] h-[400px] rounded-lg">
          <img
            src={movie}
            alt="movie-photo"
            className="w-[100%] h-[350px] object-cover object-center p-4"
          />
          <h2 className="text-xl text-red-500 text-center">The Nun</h2>
        </div>
      </div>
    </div>
  );
};

export default UserComing;
