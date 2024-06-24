import { Button, Spinner } from "@material-tailwind/react";
import CardSeat from "./CardSeat";
import CreateSeat from "./CreateSeat";
import { useContext } from "react";
import { SeatContext } from "../../context/SeatContext";
import SeatPagination from "./SeatPagination";

const Seat = () => {
  const { handleSeat, isLoading, isError, error } = useContext(SeatContext);
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
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <CardSeat />
      )}
      {isError && (
        <div>
          <h2>{error}</h2>
        </div>
      )}
      <SeatPagination />
    </div>
  );
};

export default Seat;
