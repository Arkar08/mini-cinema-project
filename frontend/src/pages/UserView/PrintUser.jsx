import { Link } from "react-router-dom";
const PrintUser = () => {
  return (
    <>
      <div className="mt-8 mx-8">
        <Link to="/" className="p-2 bg-black text-red-500 rounded-md">
          Back
        </Link>
      </div>
      <div className="flex items-center justify-center mx-auto mt-[80px] ">
        <div className="bg-gray-300 w-[300px] h-[300px] shadow-lg rounded-md">
          <div className="text-center mt-2">
            <h2 className="font-bold">Mingalar Cinema</h2>
            <h2>Hall (3)</h2>
            <h2>The Num</h2>
          </div>
          <div className="flex items-center justify-between px-2 mt-4">
            <div>
              <label>Show Date</label>
              <h2 className="text-center">24-3-2024</h2>
            </div>
            <div>
              <label>Show Time</label>
              <h2 className="text-center">10:00AM</h2>
            </div>
          </div>
          <div className="text-center mt-2">
            <h2>A1</h2>
          </div>
          <div className="flex justify-around items-center mt-8">
            <div>
              <label>Classes</label>
              <h2 className="text-right">5000 ks</h2>
            </div>
            <div>
              <label>Seats</label>
              <h2 className="text-center">1</h2>
            </div>
            <div>
              <label>Total</label>
              <h2 className="text-right">10000 ks</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintUser;
