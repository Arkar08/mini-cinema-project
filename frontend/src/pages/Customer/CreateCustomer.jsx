/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";
import { data } from "../../Data/data";
import { useContext } from "react";
import { CustomerContext } from "../../context/CustomerContext";

const CreateCustomer = () => {
  const { create, handleCreate } = useContext(CustomerContext);
  return (
    <Dialog
      size="xs"
      open={create}
      handler={handleCreate}
      className="bg-transparent shadow-none"
    >
      <Card className="mx-auto w-[450px]">
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
          <div className="flex justify-between">
            <div className="flex flex-col mr-4">
              <Typography className="mb-4 text-red-400" variant="h6">
                Full Name
              </Typography>
              <Input label="FullName" size="md" />
            </div>
            <div className="flex flex-col">
              <Typography className="mb-4 text-red-400" variant="h6">
                Email
              </Typography>
              <Input label="Email" size="md" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col mr-4">
              <Typography className="mb-4 text-red-400" variant="h6">
                Password
              </Typography>
              <Input label="Password" size="lg" type="password" />
            </div>
            <div className="flex flex-col mr-4">
              <Typography className="mb-4 text-red-400" variant="h6">
                Date Of Birth
              </Typography>
              <Input label="Date" size="md" type="date" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col mr-4">
              <Typography className="mb-4 text-red-400" variant="h6">
                State Name
              </Typography>
              <Select size="md" label="Select StateName">
                {data.map((d, index) => {
                  return <Option key={index}>{d.StateName}</Option>;
                })}
              </Select>
            </div>
            <div className="flex flex-col mr-4">
              <Typography className="mb-4 text-red-400" variant="h6">
                TownShip Name
              </Typography>
              <Input label="TownShip" size="md" />
            </div>
          </div>
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
