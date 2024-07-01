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
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import UseFetchSeat from "../../hooks/UseFetchSeat";
import { RoomContext } from "../../context/RoomContext";

const EditSeat = () => {
  const { seatId } = useParams();
  const { getId } = UseFetchSeat();
  const {
    setEditSeat,
    editSeat,
    getRoomName,
    handleSeatRow,
    handleSeatRoom,
    handleSeatNoType,
    EditSave,
  } = useContext(SeatContext);
  const { isLoading, isError } = useQuery(
    ["seats", seatId],
    () => getId(seatId),
    {
      onSuccess: (data) => {
        setEditSeat(data);
      },
    }
  );
  const { rooms } = useContext(RoomContext);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching room with ID {seatId}</p>;

  return (
    <Card className="mx-auto w-full max-w-[24rem] mt-4">
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
          <Select
            size="md"
            label="Select RowName"
            value={editSeat?.rowName}
            onChange={handleSeatRow}
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
            value={getRoomName(editSeat?.roomId)}
            onChange={handleSeatRoom}
          >
            {rooms
              ?.sort((a, b) => {
                return a.roomName.localeCompare(b.roomName);
              })
              .map((c, index) => {
                return (
                  <Option key={index} value={c.roomName}>
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
          <Select
            size="md"
            label="Select SeatNo"
            value={editSeat?.seatNo}
            onChange={handleSeatNoType}
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
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth onClick={EditSave}>
          Update
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EditSeat;
