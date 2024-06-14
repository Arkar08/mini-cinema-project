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

const CreatePrice = ({ active, handleActive }) => {
  return (
    <Dialog
      size="xs"
      open={active}
      handler={handleActive}
      className="bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardBody className="flex flex-col gap-4 relative">
          <Typography
            variant="h4"
            color="blue-gray"
            className="text-red-400 text-center"
          >
            New Price
          </Typography>
          <RxCross2
            size={26}
            className="absolute top-2 right-2 cursor-pointer"
            onClick={handleActive}
          />
          <Typography className="-mb-2 text-red-400" variant="h6">
            Room
          </Typography>
          <Input label="Room" size="lg" />
          <Typography className="-mb-2 text-red-400" variant="h6">
            Seat No
          </Typography>
          <Input label="SeatNo" size="lg" />
          <Typography className="-mb-2 text-red-400" variant="h6">
            Row Name
          </Typography>
          <Input label="RowName" size="lg" />
          <Typography className="-mb-2 text-red-400" variant="h6">
            Price
          </Typography>
          <Input label="Price" size="lg" defaultValue={0} type="number" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" onClick={handleActive} fullWidth>
            Save
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
};

export default CreatePrice;
