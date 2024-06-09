const Card = () => {
  return (
    <div className="grid grid-cols-4 gap-4 px-8 mt-8">
      <div className="border cursor-pointer text-center rounded-md bg-black text-red-600">
        <div className="flex items-center justify-between p-4">
          <label className="text-white text-xl ">Cinema:</label>
          <h2 className="text-xl">Mingalar Cinema</h2>
        </div>
      </div>
      <div className="border cursor-pointer text-center  rounded-md bg-black text-red-600">
        <div>
          <h2 className="text-2xl">Mingalar Cinema</h2>
          <h2 className="text-xl">Location</h2>
        </div>
      </div>
      <div className="border cursor-pointer text-center  rounded-md bg-black text-red-600">
        <div>
          <h2 className="text-2xl">Mingalar Cinema</h2>
          <h2 className="text-xl">Location</h2>
        </div>
      </div>
      <div className="border cursor-pointer text-center  rounded-md bg-black text-red-600">
        <div>
          <h2 className="text-2xl">Mingalar Cinema</h2>
          <h2 className="text-xl">Location</h2>
        </div>
      </div>
      <div className="border cursor-pointer text-center  rounded-md bg-black text-red-600">
        <div>
          <h2 className="text-2xl">Mingalar Cinema</h2>
          <h2 className="text-xl">Location</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
