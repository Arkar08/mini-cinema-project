import { Button } from "@material-tailwind/react";
import MovieCard from "./MovieCard";
import { useState } from "react";
import CreateMovie from "./CreateMovie";

const Movie = () => {
  const [isClose, setIsClose] = useState(false);
  const handleClose = () => {
    setIsClose(!isClose);
  };
  return (
    <div className="h-[100%]">
      <div className="flex justify-between items-center m-4">
        <input
          type="text"
          placeholder="search movie..."
          className="w-[300px] p-2 border outline-none rounded-md"
        />
        <Button className="text-red-500" onClick={handleClose}>
          New{" "}
        </Button>
        <CreateMovie isClose={isClose} handleClose={handleClose} />
      </div>
      <hr />
      <MovieCard />
    </div>
  );
};

export default Movie;
