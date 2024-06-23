import { useContext } from "react";
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
import { dataRow, dataSeatNo } from "../../Data/data";
import { SeatContext } from "../../context/SeatContext";
import { Link } from "react-router-dom";

const EditSeat = () => {
  const { sortRoom } = useContext(SeatContext);
  return (
    <Card className="mx-auto w-full max-w-[24rem]">
      <CardBody className="flex flex-col gap-4 relative">
        <Typography
          variant="h4"
          color="blue-gray"
          className="text-red-400 text-center"
        >
          New Seat
        </Typography>
        <Link to="/admin/seat">
          <RxCross2
            size={26}
            className="absolute top-2 right-2 cursor-pointer"
          />
        </Link>
        <div className="flex w-[100%] flex-col gap-6">
          <Typography className="-mb-2 text-red-400" variant="h6">
            Row Name
          </Typography>
          <Select size="md" label="Select RowName">
            {dataRow.map((d, index) => {
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
            Room
          </Typography>
          <Select size="md" label="Select RoomName">
            {sortRoom &&
              sortRoom.map((c, index) => {
                return (
                  <Option key={index} value={c._id}>
                    {c.roomName}
                  </Option>
                );
              })}
          </Select>
        </div>
        <div className="flex w-[100%] flex-col gap-6">
          <Typography className="-mb-2 text-red-400" variant="h6">
            Seat No
          </Typography>
          <Select size="md" label="Select RowName">
            {dataSeatNo.map((d, index) => {
              return (
                <Option key={index} value={d}>
                  {d}
                </Option>
              );
            })}
          </Select>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Save
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EditSeat;
