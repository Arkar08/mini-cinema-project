import { Button, Spinner } from "@material-tailwind/react";
import MovieCard from "./MovieCard";
import { useState } from "react";
import CreateMovie from "./CreateMovie";
import UseFetchMovies from "../../hooks/UseFetchMovies";

const Movie = () => {
  const [isClose, setIsClose] = useState(false);
  const { isFetching, error, data, isError } = UseFetchMovies();
  console.log(data);
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
      {isFetching ? <Spinner /> : <MovieCard data={data} />}
      {isError && (
        <div>
          <h2>{error}</h2>
        </div>
      )}
    </div>
  );
};

export default Movie;
