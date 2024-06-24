import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { CustomerContext } from "../../context/CustomerContext";

const CustomerPagination = () => {
  const { activeUser, handleClick, pages, nextClick, prevClick } =
    useContext(CustomerContext);
  return (
    <div className="flex items-center gap-4 absolute bottom-6 right-2">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={prevClick}
        disabled={activeUser === pages[0] ? true : false}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {pages?.map((p, index) => {
          return (
            <IconButton
              key={index}
              onClick={handleClick}
              id={p}
              className={activeUser === p ? "bg-black" : "bg-gray-400"}
            >
              {p}
            </IconButton>
          );
        })}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={nextClick}
        disabled={activeUser === pages[pages.length - 1] ? true : false}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CustomerPagination;
