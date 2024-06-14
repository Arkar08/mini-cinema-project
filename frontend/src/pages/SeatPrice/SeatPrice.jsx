import PriceTable from "./PriceTable";
import { Button } from "@material-tailwind/react";

const SeatPrice = () => {
  return (
    <div className="h-[100%]">
      <div className="flex justify-between items-center m-4">
        <input
          type="text"
          placeholder="search price..."
          className="w-[300px] p-2 border outline-none rounded-md"
        />
        <Button className="text-red-500">New </Button>
      </div>
      <hr />
      <PriceTable />
    </div>
  );
};

export default SeatPrice;
