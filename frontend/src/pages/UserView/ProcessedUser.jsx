import { Button } from "@material-tailwind/react";

const ProcessedUser = () => {
  return (
    <div className="w-[70%] mx-auto">
      <h1 className="text-red-500 text-3xl text-center font-bold">Processed</h1>
      <div className="flex items-center justify-between px-12 border-b-2">
        <h2 className="text-2xl text-red-500">RoomNo</h2>
        <h2 className="text-2xl text-red-500">Price</h2>
      </div>
      <div className="flex items-center justify-between px-12 mt-4">
        <h2 className="text-xl text-red-500 text-center">A1</h2>
        <h2 className="text-xl text-red-500 text-right">5000ks</h2>
      </div>
      <div className="flex items-center justify-center p-4">
        <Button className="text-blue-300 text-xl">Book</Button>
      </div>
    </div>
  );
};

export default ProcessedUser;
