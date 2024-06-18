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
import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { RoomContext } from "../../context/RoomContext";
const CreateRoom = () => {
  const { isopen, handleOpen } = useContext(RoomContext);
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
          <Typography className="-mb-2 text-red-400" variant="h6">
            Name
          </Typography>
          <Input label="Name" size="lg" />
          <Typography className="-mb-2 text-red-400" variant="h6">
            Room No
          </Typography>
          <Input label="RoomNo" size="lg" />
          <Typography className="-mb-2 text-red-400" variant="h6">
            Cinema Name
          </Typography>
          <Input label="CinemaName" size="lg" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" onClick={handleOpen} fullWidth>
            Create
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
};

export default CreateRoom;
