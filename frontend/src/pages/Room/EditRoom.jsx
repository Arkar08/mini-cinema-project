import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";
import { dataRoom, dataNo } from "../../Data/data";
import { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";
import { Link } from "react-router-dom";

const EditRoom = () => {
  const { sortCinema } = useContext(RoomContext);
  return (
    <Card className="mx-auto w-full max-w-[24rem] mt-8">
      <CardBody className="flex flex-col gap-4 relative">
        <Typography
          variant="h4"
          color="blue-gray"
          className="text-red-400 text-center"
        >
          Create Room
        </Typography>
        <Link to="/admin/room">
          <RxCross2
            size={26}
            className="absolute top-2 right-2 cursor-pointer"
          />
        </Link>
        <div className="flex w-[100%] flex-col gap-6">
          <Typography className="-mb-2 text-red-400" variant="h6">
            Name
          </Typography>
          <Select size="md" label="Choose RoomName">
            {dataRoom.map((d, index) => {
              return (
                <Option key={index} value={d}>
                  {d}
                </Option>
              );
            })}
          </Select>
        </div>
        <div className="flex w-[100%] flex-col gap-6">
          <Typography className="-mb-2 text-red-400" variant="h6">
            Cinema Name
          </Typography>
          <Select size="md" label="Choose Cinema">
            {sortCinema &&
              sortCinema.map((c) => {
                return (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                );
              })}
          </Select>
        </div>
        <div className="w-[100%] flex-col gap-6 flex">
          <Typography className="-mb-2 text-red-400" variant="h6">
            Room No
          </Typography>
          <Select label="Select Room No">
            {dataNo.map((n, index) => {
              return (
                <Option key={index} value={n}>
                  {n}
                </Option>
              );
            })}
          </Select>
        </div>
      </CardBody>
      <CardFooter className="pt-0 ">
        <Button variant="gradient" className="w-[100%] ">
          Create
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EditRoom;
