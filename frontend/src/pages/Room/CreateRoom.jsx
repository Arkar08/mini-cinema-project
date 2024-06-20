/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { RoomContext } from "../../context/RoomContext";
import { CinemaContext } from "../../context/CinemaContext";
import { dataRoom, dataNo } from "../../Data/data";
const CreateRoom = () => {
  const { isopen, handleOpen } = useContext(RoomContext);
  const { cinemas } = useContext(CinemaContext);
  return (
    <Dialog
      size="xs"
      open={isopen}
      handler={handleOpen}
      className="bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardBody className="flex flex-col gap-4 relative">
          <Typography
            variant="h4"
            color="blue-gray"
            className="text-red-400 text-center"
          >
            Create Room
          </Typography>
          <RxCross2
            size={26}
            className="absolute top-2 right-2 cursor-pointer"
            onClick={handleOpen}
          />
          <div className="flex w-[100%] flex-col gap-6">
            <Typography className="-mb-2 text-red-400" variant="h6">
              Name
            </Typography>
            <Select size="md" label="Choose RoomName" name="cinema">
              {dataRoom.map((d, index) => {
                return <Option key={index}>{d}</Option>;
              })}
            </Select>
          </div>

          <div className="flex w-[100%] flex-col gap-6">
            <Typography className="-mb-2 text-red-400" variant="h6">
              Cinema Name
            </Typography>
            <Select size="md" label="Choose Cinema" name="cinema">
              {cinemas
                ?.sort((a, b) => {
                  return a.name.localeCompare(b.name);
                })
                .map((c) => {
                  return <Option key={c._id}>{c.name}</Option>;
                })}
            </Select>
          </div>
          <div className="w-[100%] flex-col gap-6 flex">
            <Typography className="-mb-2 text-red-400" variant="h6">
              Room No
            </Typography>
            <Select label="Select Room No">
              {dataNo.map((n, index) => {
                return <Option key={index}>{n}</Option>;
              })}
            </Select>
          </div>
        </CardBody>
        <CardFooter className="pt-0 ">
          <Button variant="gradient" onClick={handleOpen} className="w-[100%] ">
            Create
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
};

export default CreateRoom;
