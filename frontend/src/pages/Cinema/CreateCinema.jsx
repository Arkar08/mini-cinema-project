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
import { CinemaContext } from "../../context/CinemaContext";

const CreateCinema = () => {
  const { open, handleClick, createCinema, handleCreate, handleSave } =
    useContext(CinemaContext);
  return (
    <Dialog
      size="xs"
      open={open}
      handler={handleClick}
      className="bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardBody className="flex flex-col gap-4 relative">
          <Typography
            variant="h4"
            color="blue-gray"
            className="text-red-400 text-center"
          >
            Create Cinema
          </Typography>
          <RxCross2
            size={26}
            className="absolute top-2 right-2 cursor-pointer"
            onClick={handleClick}
          />
          <Typography className="-mb-2 text-red-400" variant="h6">
            Name
          </Typography>
          <Input
            label="Name"
            size="lg"
            name="name"
            value={createCinema.name}
            onChange={handleCreate}
          />
          <Typography className="-mb-2 text-red-400" variant="h6">
            Location
          </Typography>
          <Input
            label="Location"
            size="lg"
            name="location"
            value={createCinema.location}
            onChange={handleCreate}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth onClick={handleSave}>
            Create
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
};

export default CreateCinema;
