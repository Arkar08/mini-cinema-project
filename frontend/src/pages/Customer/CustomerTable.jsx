/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { CustomerContext } from "../../context/CustomerContext";
import moment from "moment";
import { Link } from "react-router-dom";

const CustomerTable = () => {
  const { customers, getStateName, getTownshipName } =
    useContext(CustomerContext);
  return (
    <table className="w-[90%] border-collapse border  mt-4 mx-auto">
      <thead>
        <tr className="text-center p-8 border bg-red-500 text-white w-[100%]">
          <th>Id</th>
          <th>FullName</th>
          <th>Email</th>
          <th>DateOfBirth</th>
          <th>StateName</th>
          <th>TownshipName</th>
          <th>Is Admin</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {customers &&
          customers.map((c) => {
            return (
              <tr className="text-center  border text-red-500" key={c._id}>
                <td className="p-2">{c._id}</td>
                <td className="p-2">{c.fullName}</td>
                <td className="p-2">{c.email}</td>
                <td className="p-2">{moment(c.dateOfBirth).format("L")}</td>
                <td className="p-2">{getStateName(c.stateCode)}</td>
                <td className="p-2">{getTownshipName(c.townshipCode)}</td>
                <td className="p-2">{c.isAdmin === true ? "Admin" : "User"}</td>
                <td className="flex p-2 items-center justify-center">
                  <Link to={`/admin/customer/${c._id}`}>
                    <FaEdit
                      size={18}
                      className="mx-1 text-blue-600 cursor-pointer"
                    />
                  </Link>
                  <FaTrash
                    size={18}
                    className="cursor-pointer mx-1 text-red-600"
                  />
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default CustomerTable;
