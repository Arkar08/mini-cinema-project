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
import { dataRoom, dataNo } from "../../Data/data";
import { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import UseFetchRoom from "../../hooks/UseFetchRoom";

const EditRoom = () => {
  const {
    sortCinema,
    setEditRoom,
    getCinemaName,
    handleEditCinemaId,
    handleEditRoomChange,
    handleEditRoomNo,
    editRoom,
    handleEditSave,
  } = useContext(RoomContext);
  const { getId } = UseFetchRoom();

  const { roomId } = useParams();
  const { isLoading, isError } = useQuery(
    ["room", roomId],
    () => getId(roomId),
    {
      onSuccess: (data) => {
        setEditRoom(data);
      },
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching room with ID {roomId}</p>;

  return (
    <>
      <Card className="mx-auto w-full max-w-[24rem] mt-8">
        <CardBody className="flex flex-col gap-4 relative">
          <Typography
            variant="h4"
            color="blue-gray"
            className="text-red-400 text-center"
          >
            Create Room
          </Typography>
          <Link to="/admin/room">
            <RxCross2
              size={26}
              className="absolute top-2 right-2 cursor-pointer"
            />
          </Link>
          <div className="flex w-[100%] flex-col gap-6">
            <Typography className="-mb-2 text-red-400" variant="h6">
              Name
            </Typography>
            <Select
              size="md"
              label="Choose RoomName"
              value={editRoom?.roomName}
              onChange={handleEditRoomChange}
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
          <div className="flex w-[100%] flex-col gap-6">
            <Typography className="-mb-2 text-red-400" variant="h6">
              Cinema Name
            </Typography>
            <Select
              size="md"
              label="Choose Cinema"
              onChange={handleEditCinemaId}
              value={getCinemaName(editRoom?.cinemaId)}
            >
              {sortCinema?.map((c, index) => {
                return (
                  <Option key={index} value={c.name}>
                    {c.name}
                  </Option>
                );
              })}
            </Select>
          </div>
          <div className="w-[100%] flex-col gap-6 flex">
            <Typography className="-mb-2 text-red-400" variant="h6">
              Room No
            </Typography>
            <Select
              label="Select Room No"
              value={editRoom?.roomNo}
              onChange={handleEditRoomNo}
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
        </CardBody>
        <CardFooter className="pt-0 ">
          <Button
            variant="gradient"
            className="w-[100%] "
            onClick={handleEditSave}
          >
            Update
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default EditRoom;
