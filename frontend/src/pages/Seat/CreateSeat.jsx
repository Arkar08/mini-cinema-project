/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Radio,
  Select,
  Option,
} from "@material-tailwind/react";
import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { SeatContext } from "../../context/SeatContext";
import { dataRow, dataSeatNo, type } from "../../Data/data";

const CreateSeat = () => {
  const {
    handleSeat,
    oneSeat,
    newSeat,
    handleRoom,
    handleSeatNo,
    handleSeatType,
    handleRowName,
    seatSave,
    sortRoom,
  } = useContext(SeatContext);

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
          <div className="flex w-[100%] flex-col gap-6">
            <Typography className="-mb-2 text-red-400" variant="h6">
              Seat No
            </Typography>
            <Select
              size="md"
              label="Select SeatNo"
              value={newSeat.seatNo}
              onChange={handleSeatNo}
            >
              {dataSeatNo.map((d, index) => {
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
              Row Name
            </Typography>
            <Select
              size="md"
              label="Select RowName"
              value={newSeat.rowName}
              onChange={handleRowName}
            >
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
            <Select
              size="md"
              label="Select RoomName"
              value={newSeat.roomId}
              onChange={handleRoom}
            >
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
          <Typography className="-mb-2 text-red-400" variant="h6">
            Seat Type
          </Typography>
          <div className="flex">
            {type &&
              type.map((t, index) => {
                return (
                  <Radio
                    key={index}
                    label={t}
                    name="type"
                    value={t}
                    onChange={(e) => handleSeatType(e.target.value)}
                  />
                );
              })}
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" onClick={seatSave} fullWidth>
            Save
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
};

export default CreateSeat;
