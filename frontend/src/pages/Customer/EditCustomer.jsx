import {
  Button,
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
import { Link } from "react-router-dom";
import { CustomerContext } from "../../context/CustomerContext";
const EditCustomer = () => {
  const { filterTownship, checkDisabled } = useContext(CustomerContext);
  return (
    <Card className="mx-auto w-[450px]">
      <CardBody className="flex flex-col gap-4 relative mt-8">
        <Typography
          variant="h4"
          color="blue-gray"
          className="text-red-400 text-center"
        >
          Edit Customer
        </Typography>
        <Link to="/admin/customer">
          <RxCross2
            size={26}
            className="absolute top-2 right-2 cursor-pointer"
          />
        </Link>
        <div className="flex justify-between">
          <div className="flex flex-col mr-4">
            <Typography className="mb-4 text-red-400" variant="h6">
              Full Name
            </Typography>
            <Input label="FullName" size="md" name="fullName" />
          </div>
          <div className="flex flex-col">
            <Typography className="mb-4 text-red-400" variant="h6">
              Email
            </Typography>
            <Input label="Email" size="md" name="email" />
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
              name="password"
              disabled
            />
          </div>
          <div className="flex flex-col mr-4">
            <Typography className="mb-4 text-red-400" variant="h6">
              Date Of Birth
            </Typography>
            <Input label="Date" size="md" type="date" name="dateOfBirth" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col mr-4">
            <Typography className="mb-4 text-red-400" variant="h6">
              State Name
            </Typography>
            <Select size="md" label="Select StateName">
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
        <Button variant="gradient" fullWidth>
          Create
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EditCustomer;
