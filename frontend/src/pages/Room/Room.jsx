import { Button, Spinner } from "@material-tailwind/react";
import RoomCard from "./RoomCard";
import CreateRoom from "./CreateRoom";
import { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";

const Room = () => {
  const { rooms, handleOpen, isFetching, isError, error } =
    useContext(RoomContext);
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
        <CreateRoom />
      </div>
      <hr />
      {isFetching ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-4 px-8 mt-8">
          {rooms &&
            rooms.map((r) => {
              return <RoomCard key={r._id} r={r} />;
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

export default Room;
