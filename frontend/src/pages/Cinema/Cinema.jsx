import { Button } from "@material-tailwind/react";
import { useState } from "react";
import Card from "./Card";
import CreateCinema from "./CreateCinema";
import UseFetchCinema from "../../hooks/UseFetchCinema";

const Cinema = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const { data: cinemas } = UseFetchCinema();
  console.log(cinemas);
  return (
    <div className="h-[100%]">
      <div className="flex justify-between items-center m-4">
        <input
          type="text"
          placeholder="search cinema..."
          className="w-[300px] p-2 border outline-none rounded-md"
        />
        <Button className="text-red-500" onClick={handleClick}>
          New{" "}
        </Button>
        <CreateCinema open={open} handleClick={handleClick} />
      </div>
      <hr />
      <Card />
    </div>
  );
};

export default Cinema;
