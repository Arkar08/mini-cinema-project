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
  const {
    create,
    handleCreate,
    newCustomer,
    handleCustomer,
    handleSave,
    handleState,
    handleTownship,
    checkDisabled,
    filterTownship,
  } = useContext(CustomerContext);
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
              <Input
                label="FullName"
                size="md"
                value={newCustomer.fullName}
                name="fullName"
                onChange={handleCustomer}
              />
            </div>
            <div className="flex flex-col">
              <Typography className="mb-4 text-red-400" variant="h6">
                Email
              </Typography>
              <Input
                label="Email"
                size="md"
                value={newCustomer.email}
                name="email"
                onChange={handleCustomer}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col mr-4">
              <Typography className="mb-4 text-red-400" variant="h6">
                Password
              </Typography>
              <Input
                label="Password"
                size="lg"
                type="password"
                value={newCustomer.password}
                name="password"
                onChange={handleCustomer}
              />
            </div>
            <div className="flex flex-col mr-4">
              <Typography className="mb-4 text-red-400" variant="h6">
                Date Of Birth
              </Typography>
              <Input
                label="Date"
                size="md"
                type="date"
                value={newCustomer.dateOfBirth}
                name="dateOfBirth"
                onChange={handleCustomer}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col mr-4">
              <Typography className="mb-4 text-red-400" variant="h6">
                State Name
              </Typography>
              <Select
                size="md"
                label="Select StateName"
                onChange={handleState}
                value={newCustomer.StateCode}
              >
                {data
                  .sort((a, b) => {
                    return a.StateName.localeCompare(b.StateName);
                  })
                  .map((d) => {
                    return (
                      <Option key={d.StateId} value={d.StateCode}>
                        {d.StateName}
                      </Option>
                    );
                  })}
              </Select>
            </div>
            <div className="flex flex-col mr-4">
              <Typography className="mb-4 text-red-400" variant="h6">
                TownShip Name
              </Typography>
              <Select
                size="md"
                label="Select TownshipName"
                value={filterTownship.townshipCode}
                onChange={handleTownship}
                disabled={checkDisabled}
              >
                {filterTownship
                  ?.sort((a, b) => {
                    return a.TownshipName.localeCompare(b.TownshipName);
                  })
                  .map((t) => {
                    return (
                      <Option key={t.TownshipId} value={t.TownshipCode}>
                        {t.TownshipName}
                      </Option>
                    );
                  })}
              </Select>
            </div>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" onClick={handleSave} fullWidth>
            Create
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
};

export default CreateCustomer;
