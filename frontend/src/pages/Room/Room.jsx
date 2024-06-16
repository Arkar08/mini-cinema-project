import { useState } from "react";
import { Button } from "@material-tailwind/react";
import RoomCard from "./RoomCard";
import CreateRoom from "./CreateRoom";
import UseFetchRoom from "../../hooks/UseFetchRoom";

const Room = () => {
  const [isopen, setIsopen] = useState(false);
  const handleOpen = () => {
    setIsopen(!isopen);
  };
  const { data: rooms } = UseFetchRoom();
  console.log(rooms);
  return (
    <div className="h-[100%]">
      <div className="flex justify-between items-center m-4">
        <input
          type="text"
          placeholder="search room..."
          className="w-[300px] p-2 border outline-none rounded-md"
        />
        <Button className="text-red-500" onClick={handleOpen}>
          New{" "}
        </Button>
        <CreateRoom isopen={isopen} handleOpen={handleOpen} />
      </div>
      <hr />
      <RoomCard />
    </div>
  );
};

export default Room;
