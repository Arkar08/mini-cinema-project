import { Button } from "@material-tailwind/react";
import CustomerTable from "./CustomerTable";
import { useState } from "react";
import CreateCustomer from "./CreateCustomer";

const Customer = () => {
  const [create, setCreate] = useState(false);
  const handleCreate = () => {
    setCreate(!create);
  };
  return (
    <div className="h-[100%]">
      <div className="flex justify-between items-center m-4">
        <input
          type="text"
          placeholder="search customer..."
          className="w-[300px] p-2 border outline-none rounded-md"
        />
        <Button className="text-red-500" onClick={handleCreate}>
          New{" "}
        </Button>
        <CreateCustomer create={create} handleCreate={handleCreate} />
      </div>
      <hr />
      <CustomerTable />
    </div>
  );
};

export default Customer;
