import { Button, Spinner } from "@material-tailwind/react";
import CardSeat from "./CardSeat";
import CreateSeat from "./CreateSeat";
import { useContext } from "react";
import { SeatContext } from "../../context/SeatContext";

const Seat = () => {
  const { handleSeat, isFetching, isError, error, seats } =
    useContext(SeatContext);
  return (
    <div className="h-[100%]">
      <div className="flex justify-between items-center m-4">
        <input
          type="text"
          placeholder="search seat..."
          className="w-[300px] p-2 border outline-none rounded-md"
        />
        <Button className="text-red-500" onClick={handleSeat}>
          New
        </Button>
        <CreateSeat />
      </div>
      <hr />
      {isFetching ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-4 px-8 mt-2">
          {seats &&
            seats.map((s) => {
              return <CardSeat key={s._id} s={s} />;
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

export default Seat;
