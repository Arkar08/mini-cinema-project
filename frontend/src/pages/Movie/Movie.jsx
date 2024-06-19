import { Button, Spinner } from "@material-tailwind/react";
import MovieCard from "./MovieCard";
import CreateMovie from "./CreateMovie";
import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";

const Movie = () => {
  const { isLoading, isError, handleClose, error, movies } =
    useContext(MovieContext);
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
        <CreateMovie />
      </div>
      <hr />
      {isLoading ? (
        <div className="flex items-center justify-center mt-8">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-4 m-4 gap-4">
          {movies &&
            movies.map((m) => {
              return <MovieCard key={m._id} m={m} />;
            })}
        </div>
      )}
      {isError && (
        <div>
          <h2>{error}</h2>
        </div>
      )}
    </div>
  );
};

export default Movie;
