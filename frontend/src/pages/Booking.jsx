import BookingTable from "../components/BookingTable";

const Booking = () => {
  return (
    <div className="h-[100%]">
      <div className="flex justify-between items-center m-6">
        <input
          type="text"
          placeholder="search booking..."
          className="w-[400px] p-2 border outline-none rounded-md"
        />
      </div>
      <hr />
      <BookingTable />
    </div>
  );
};

export default Booking;
