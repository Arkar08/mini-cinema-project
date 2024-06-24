import { Button, Spinner } from "@material-tailwind/react";
import CustomerTable from "./CustomerTable";
import { useContext } from "react";
import CreateCustomer from "./CreateCustomer";
import { CustomerContext } from "../../context/CustomerContext";
import CustomerPagination from "./CustomerPagination";

const Customer = () => {
  const { handleCreate, isError, isLoading, error } =
    useContext(CustomerContext);

  return (
    <div className="h-[100%] w-[100%]">
      <div className="flex justify-between items-center m-4">
        <input
          type="text"
          placeholder="search customer..."
          className="w-[300px] p-2 border outline-none rounded-md"
        />
        <Button className="text-red-500" onClick={handleCreate}>
          New{" "}
        </Button>
        <CreateCustomer />
      </div>
      <hr />
      {isLoading ? (
        <div className="flex items-center justify-center mt-8">
          <Spinner />
        </div>
      ) : (
        <CustomerTable />
      )}

      {isError && (
        <div>
          <h2>{error}</h2>
        </div>
      )}
      <CustomerPagination />
    </div>
  );
};

export default Customer;
