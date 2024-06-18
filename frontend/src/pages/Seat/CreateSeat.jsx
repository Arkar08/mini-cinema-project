/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Radio,
} from "@material-tailwind/react";
import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { SeatContext } from "../../context/SeatContext";

const CreateSeat = () => {
  const { handleSeat, oneSeat } = useContext(SeatContext);
  const type = ["single", "couple"];
  return (
    <Dialog
      size="xs"
      open={oneSeat}
      handler={handleSeat}
      className="bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardBody className="flex flex-col gap-4 relative">
          <Typography
            variant="h4"
            color="blue-gray"
            className="text-red-400 text-center"
          >
            New Seat
          </Typography>
          <RxCross2
            size={26}
            className="absolute top-2 right-2 cursor-pointer"
            onClick={handleSeat}
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
            Seat Type
          </Typography>
          <div className="flex">
            {type &&
              type.map((t, index) => {
                return <Radio key={index} label={t} name="type" />;
              })}
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" onClick={handleSeat} fullWidth>
            Save
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
};

export default CreateSeat;
