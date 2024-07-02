/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
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
import { dataRoom, dataNo } from "../../Data/data";
import { CinemaContext } from "../../context/CinemaContext";
const CreateRoom = () => {
  const {
    isOpen,
    handleOpen,
    handleRoomChange,
    newRoom,
    handleRoomSave,
    handleCinemaId,
    handleRoomNo,
  } = useContext(RoomContext);
  const { cinemas } = useContext(CinemaContext);
  return (
    <Dialog
      size="xs"
      open={isOpen}
      handler={handleOpen}
      className="bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardBody className="flex flex-col gap-2 relative">
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
          <div className="flex w-[100%] flex-col gap-4">
            <Typography className="-mb-4 text-red-400" variant="h6">
              Name
            </Typography>
            <Select
              size="md"
              label="Choose RoomName"
              value={newRoom?.roomName}
              onChange={handleRoomChange}
            >
              {dataRoom.map((d, index) => {
                return (
                  <Option key={index} value={d}>
                    {d}
                  </Option>
                );
              })}
            </Select>
          </div>
          <div className="w-[100%] flex-col gap-4 flex">
            <Typography className="-mb-2 text-red-400" variant="h6">
              Room No
            </Typography>
            <Select
              size="md"
              label="Select Room No"
              value={newRoom?.roomNo}
              onChange={handleRoomNo}
            >
              {dataNo.map((n, index) => {
                return (
                  <Option key={index} value={n}>
                    {n}
                  </Option>
                );
              })}
            </Select>
          </div>
          <div className="flex w-[100%] flex-col gap-4">
            <Typography className="-mb-2 text-red-400" variant="h6">
              Cinema Name
            </Typography>
            <Select
              size="md"
              label="Choose Cinema"
              value={newRoom.cinemaId}
              onChange={handleCinemaId}
            >
              {cinemas
                ?.sort((a, b) => {
                  return a.name.localeCompare(b.name);
                })
                .map((c) => {
                  return (
                    <Option key={c._id} value={c._id} className="gap-2">
                      {c.name}
                    </Option>
                  );
                })}
            </Select>
          </div>
        </CardBody>
        <CardFooter className="pt-0 ">
          <Button
            variant="gradient"
            onClick={handleRoomSave}
            className="w-[100%] "
          >
            Create
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
};

export default CreateRoom;
