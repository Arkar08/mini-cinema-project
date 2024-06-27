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
import { Link, useParams } from "react-router-dom";
import { CustomerContext } from "../../context/CustomerContext";
import { useQuery } from "react-query";
import UseFetchCustomer from "../../hooks/UseFetchCustomer";
import moment from "moment";
const EditCustomer = () => {
  const {
    editCustomer,
    setEditCustomer,
    getStateCode,
    getTownshipCode,
    editChange,
    editSave,
    handleEditTownship,
    handleEditState,
    editTownship,
  } = useContext(CustomerContext);
  const { getId } = UseFetchCustomer();
  const { customerId } = useParams();
  const { isLoading, isError } = useQuery(
    ["room", customerId],
    () => getId(customerId),
    {
      onSuccess: (data) => {
        setEditCustomer(data);
      },
    }
  );
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching room with ID {customerId}</p>;
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
            <Input
              label="FullName"
              size="md"
              name="fullName"
              value={editCustomer?.fullName}
              onChange={editChange}
            />
          </div>
          <div className="flex flex-col">
            <Typography className="mb-4 text-red-400" variant="h6">
              Email
            </Typography>
            <Input
              label="Email"
              size="md"
              name="email"
              value={editCustomer?.email}
              onChange={editChange}
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
              name="password"
              disabled
              value={editCustomer?.password}
            />
          </div>
          <div className="flex flex-col mr-4">
            <Typography className="mb-4 text-red-400" variant="h6">
              Date Of Birth
            </Typography>
            <Input
              label="Date"
              size="md"
              type="text"
              name="dateOfBirth"
              disabled
              value={moment(editCustomer?.dateOfBirth).format("LL")}
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
              value={getStateCode(editCustomer?.stateCode)}
              onChange={handleEditState}
            >
              {data
                .sort((a, b) => {
                  return a.StateName.localeCompare(b.StateName);
                })
                .map((d) => {
                  return (
                    <Option key={d.StateId} value={d.StateName}>
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
              value={getTownshipCode(editCustomer?.townshipCode)}
              onChange={handleEditTownship}
            >
              {editTownship
                ?.sort((a, b) => {
                  return a.TownshipName.localeCompare(b.TownshipName);
                })
                .map((t) => {
                  return (
                    <Option key={t.TownshipId} value={t.TownshipName}>
                      {t.TownshipName}
                    </Option>
                  );
                })}
            </Select>
          </div>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth onClick={editSave}>
          Save
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EditCustomer;
