import { useState } from "react";
import PriceTable from "./PriceTable";
import { Button } from "@material-tailwind/react";
import CreatePrice from "./CreatePrice";
import UseFetchPrice from "../../hooks/UseFetchPrice";

const SeatPrice = () => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };
  const { data: price } = UseFetchPrice();
  console.log(price);
  return (
    <div className="h-[100%]">
      <div className="flex justify-between items-center m-4">
        <input
          type="text"
          placeholder="search price..."
          className="w-[300px] p-2 border outline-none rounded-md"
        />
        <Button className="text-red-500" onClick={handleActive}>
          New{" "}
        </Button>
        <CreatePrice active={active} handleActive={handleActive} />
      </div>
      <hr />
      <PriceTable />
    </div>
  );
};

export default SeatPrice;
