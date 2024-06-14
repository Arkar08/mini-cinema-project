import { Button } from "@material-tailwind/react";
import MovieCard from "./MovieCard";

const Movie = () => {
  return (
    <div className="h-[100%]">
      <div className="flex justify-between items-center m-4">
        <input
          type="text"
          placeholder="search movie..."
          className="w-[300px] p-2 border outline-none rounded-md"
        />
        <Button className="text-red-500">New </Button>
      </div>
      <hr />
      <MovieCard />
    </div>
  );
};

export default Movie;
