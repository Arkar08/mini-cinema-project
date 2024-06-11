const BookingTable = () => {
  return (
    <table className="w-[90%] border-collapse border  mt-4 mx-auto">
      <thead>
        <tr className="text-center p-8 border bg-red-500 text-white">
          <th>Id</th>
          <th>CinemaName</th>
          <th>MovieName</th>
          <th>RoomName</th>
          <th>ShowingDate</th>
          <th>SeatNo</th>
          <th>SeatPrice</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-center  text-red-500">
          <td className="p-2">100000000000</td>
          <td className=" p-2">NayPyiTaw</td>
          <td className=" p-2">Thor</td>
          <td className=" p-2">cinema IV</td>
          <td className=" p-2">27.12.2022</td>
          <td className=" p-2">A3</td>
          <td className=" p-2">5000</td>
          <td className=" p-2">
            <button className="bg-red-500 text-white px-2 py-1 outline-none border-none rounded-md">
              Print
            </button>
          </td>
        </tr>
        <tr className="text-center  border text-red-500">
          <td className="p-2">100000000000</td>
          <td className="p-2">NayPyiTaw</td>
          <td className="p-2">Thor</td>
          <td className="p-2">cinema IV</td>
          <td className="p-2">27.12.2022</td>
          <td className="p-2">A3</td>
          <td className="p-2">5000</td>
          <td className="p-2">
            <button className="bg-red-500 text-white px-2 py-1 outline-none border-none rounded-md">
              Print
            </button>
          </td>
        </tr>
        <tr className="text-center  border text-red-500">
          <td className="p-2">100000000000</td>
          <td className="p-2">NayPyiTaw</td>
          <td className="p-2">Thor</td>
          <td className="p-2">cinema IV</td>
          <td className="p-2">27.12.2022</td>
          <td className="p-2">A3</td>
          <td className="p-2">5000</td>
          <td className="p-2">
            <button className="bg-red-500 text-white px-2 py-1 outline-none border-none rounded-md">
              Print
            </button>
          </td>
        </tr>
        <tr className="text-center  border text-red-500">
          <td className="p-2">100000000000</td>
          <td className="p-2">NayPyiTaw</td>
          <td className="p-2">Thor</td>
          <td className="p-2">cinema IV</td>
          <td className="p-2">27.12.2022</td>
          <td className="p-2">A3</td>
          <td className="p-2">5000</td>
          <td className="p-2">
            <button className="bg-red-500 text-white px-2 py-1 outline-none border-none rounded-md">
              Print
            </button>
          </td>
        </tr>
        <tr className="text-center  border text-red-500">
          <td className="p-2">100000000000</td>
          <td className="p-2">NayPyiTaw</td>
          <td className="p-2">Thor</td>
          <td className="p-2">cinema IV</td>
          <td className="p-2">27.12.2022</td>
          <td className="p-2">A3</td>
          <td className="p-2">5000</td>
          <td className="p-2">
            <button className="bg-red-500 text-white px-2 py-1 outline-none border-none rounded-md">
              Print
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default BookingTable;
