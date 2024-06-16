import { Button } from "@material-tailwind/react";
import CardSeat from "./CardSeat";
import { useState } from "react";
import CreateSeat from "./CreateSeat";
import UseFetchSeat from "../../hooks/UseFetchSeat";

const Seat = () => {
  const [oneSeat, setOneSeat] = useState(false);
  const handleSeat = () => {
    setOneSeat(!oneSeat);
  };
  const { data: seats } = UseFetchSeat();
  console.log(seats);
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
        <CreateSeat oneSeat={oneSeat} handleSeat={handleSeat} />
      </div>
      <hr />
      <CardSeat />
    </div>
  );
};

export default Seat;
