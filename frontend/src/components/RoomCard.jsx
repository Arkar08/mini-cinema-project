const RoomCard = () => {
  return (
    <div className="grid grid-cols-4 gap-4 px-8 mt-8">
      <div className="border cursor-pointer text-center rounded-md bg-black text-red-600">
        <div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">RoomNo:</label>
            <h2 className="text-xl">I</h2>
          </div>
          <div className="flex items-center justify-center">
            <label className="text-white px-2">RoomName:</label>
            <h2 className="text-xl">I</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
