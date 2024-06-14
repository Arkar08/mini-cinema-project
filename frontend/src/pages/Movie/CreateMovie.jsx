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

const CreateMovie = ({ isClose, handleClose }) => {
  return (
    <Dialog
      size="xs"
      open={isClose}
      handler={handleClose}
      className="bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardBody className="flex flex-col gap-4 relative">
          <Typography
            variant="h4"
            color="blue-gray"
            className="text-red-400 text-center"
          >
            New Movie
          </Typography>
          <RxCross2
            size={26}
            className="absolute top-2 right-2 cursor-pointer"
            onClick={handleClose}
          />
          <Typography className="-mb-2 text-red-400" variant="h6">
            Title
          </Typography>
          <Input label="Title" size="lg" />
          <Typography className="-mb-2 text-red-400" variant="h6">
            Date
          </Typography>
          <Input label="Date" size="lg" type="date" />
          <Typography className="-mb-2 text-red-400" variant="h6">
            Duration
          </Typography>
          <Input label="hh:mm:ss" size="lg" />
          <Typography className="-mb-2 text-red-400" variant="h6">
            Photo
          </Typography>
          <Input label="Photo URL" size="lg" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" onClick={handleClose} fullWidth>
            Save
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
};

export default CreateMovie;
