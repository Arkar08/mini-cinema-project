import PriceTable from "../components/PriceTable";

const SeatPrice = () => {
  return (
    <div className="h-[100%]">
      <div className="flex justify-between items-center m-6">
        <input
          type="text"
          placeholder="search price..."
          className="w-[300px] p-2 border outline-none rounded-md"
        />
        <button className="p-2 bg-red-500 text-white rounded-md">New</button>
      </div>
      <hr />
      <PriceTable />
    </div>
  );
};

export default SeatPrice;
