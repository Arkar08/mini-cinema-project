/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";

const CreateCustomer = ({ create, handleCreate }) => {
  return (
    <Dialog
      size="xs"
      open={create}
      handler={handleCreate}
      className="bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardBody className="flex flex-col gap-4 relative">
          <Typography
            variant="h4"
            color="blue-gray"
            className="text-red-400 text-center"
          >
            New Customer
          </Typography>
          <RxCross2
            size={26}
            className="absolute top-2 right-2 cursor-pointer"
            onClick={handleCreate}
          />
          <Typography className="-mb-4 text-red-400" variant="h6">
            Full Name
          </Typography>
          <Input label="FullName" size="md" />
          <Typography className="-mb-4 text-red-400" variant="h6">
            Email
          </Typography>
          <Input label="Email" size="md" />
          <Typography className="-mb-4 text-red-400" variant="h6">
            State Name
          </Typography>
          <Input label="State" size="md" />
          <Typography className="-mb-4 text-red-400" variant="h6">
            TownShip Name
          </Typography>
          <Input label="TownShip" size="md" />
          <Typography className="-mb-2 text-red-400" variant="h6">
            Ph Number
          </Typography>
          <Input label="Ph no" size="lg" type="number" />
          <Typography className="-mb-4 text-red-400" variant="h6">
            Date Of Birth
          </Typography>
          <Input label="Date" size="md" type="datetime-local" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" onClick={handleCreate} fullWidth>
            Create
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
};

export default CreateCustomer;
