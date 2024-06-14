import { Button } from "@material-tailwind/react";
import CardSeat from "../components/CardSeat";

const Seat = () => {
  return (
    <div className="h-[100%]">
      <div className="flex justify-between items-center m-4">
        <input
          type="text"
          placeholder="search seat..."
          className="w-[300px] p-2 border outline-none rounded-md"
        />
        <Button className="text-red-500">New Seat</Button>
      </div>
      <hr />
      <CardSeat />
    </div>
  );
};

export default Seat;
