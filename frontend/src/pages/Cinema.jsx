import Card from "../components/Card";
import { Button } from "@material-tailwind/react";

const Cinema = () => {
  return (
    <div className="h-[100%]">
      <div className="flex justify-between items-center m-4">
        <input
          type="text"
          placeholder="search cinema..."
          className="w-[300px] p-2 border outline-none rounded-md"
        />
        <Button className="text-red-500">New </Button>
      </div>
      <hr />
      <Card />
    </div>
  );
};

export default Cinema;
