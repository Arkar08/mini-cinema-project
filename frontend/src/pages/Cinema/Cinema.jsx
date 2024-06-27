import { Button, Spinner } from "@material-tailwind/react";
import Card from "./Card";
import CreateCinema from "./CreateCinema";
import { useContext } from "react";
import { CinemaContext } from "../../context/CinemaContext";
import CinemaPagination from "./CinemaPagination";

const Cinema = () => {
  const { currentItem, handleClick, isLoading, isError, error } =
    useContext(CinemaContext);
  return (
    <div className="h-[100%]">
      <div className="flex justify-between items-center m-2">
        <input
          type="text"
          placeholder="search cinema..."
          className="w-[300px] p-2 border outline-none rounded-md"
        />
        <Button className="text-red-500" onClick={handleClick}>
          New{" "}
        </Button>
        <CreateCinema />
      </div>
      <hr />
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2 px-8 mt-2">
          {currentItem &&
            currentItem.map((c) => {
              return <Card key={c._id} c={c} />;
            })}
        </div>
      )}
      {isError && (
        <div>
          <h2>{error}</h2>
        </div>
      )}
      <CinemaPagination />
    </div>
  );
};

export default Cinema;
