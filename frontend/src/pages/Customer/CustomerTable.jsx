const CustomerTable = () => {
  return (
    <table className="w-[90%] border-collapse border  mt-4 mx-auto">
      <thead>
        <tr className="text-center p-8 border bg-red-500 text-white">
          <th>Id</th>
          <th>FullName</th>
          <th>Email</th>
          <th>DateOfBirth</th>
          <th>StateName</th>
          <th>TownshipName</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-center  border text-red-500">
          <td className="p-2">10000000000</td>
          <td className="p-2">Arkar</td>
          <td className="p-2">arkar@gmail.com</td>
          <td className="p-2">12.2.2024</td>
          <td className="p-2">Yangon</td>
          <td className="p-2">Insein</td>
        </tr>
        <tr className="text-center  border text-red-500">
          <td className="p-2">1</td>
          <td className="p-2">Arkar</td>
          <td className="p-2">arkar@gmail.com</td>
          <td className="p-2">12.2.2024</td>
          <td className="p-2">Yangon</td>
          <td className="p-2">Insein</td>
        </tr>
        <tr className="text-center  border text-red-500">
          <td className="p-2">1</td>
          <td className="p-2">Arkar</td>
          <td className="p-2">arkar@gmail.com</td>
          <td className="p-2">12.2.2024</td>
          <td className="p-2">Yangon</td>
          <td className="p-2">Insein</td>
        </tr>
        <tr className="text-center  border text-red-500">
          <td className="p-2">1</td>
          <td className="p-2">Arkar</td>
          <td className="p-2">arkar@gmail.com</td>
          <td className="p-2">12.2.2024</td>
          <td className="p-2">Yangon</td>
          <td className="p-2">Insein</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CustomerTable;
