import { Button, Spinner } from "@material-tailwind/react";
import RoomCard from "./RoomCard";
import CreateRoom from "./CreateRoom";
import { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";
import Pagination from "./Pagination";

const Room = () => {
  const { handleOpen, isLoading, isError, error } = useContext(RoomContext);
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
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <RoomCard />
      )}
      {isError && (
        <div>
          <h2>{error}</h2>
        </div>
      )}
      <Pagination />
    </div>
  );
};

export default Room;
