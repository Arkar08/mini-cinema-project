import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { PriceContext } from "../../context/PriceContext";
import { dataRow, dataSeatNo } from "../../Data/data";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import UseFetchPrice from "../../hooks/UseFetchPrice";

const EditPrice = () => {
  const { priceId } = useParams();
  const {
    sortData,
    setEditPrice,
    editPrice,
    postEditPrice,
    editRoom,
    handleEditSeatRow,
    handleEditSeatNo,
    editSave,
  } = useContext(PriceContext);
  const { isLoading, isError } = useQuery(
    ["seats", priceId],
    () => getId(priceId),
    {
      onSuccess: (data) => {
        setEditPrice(data);
      },
    }
  );
  const { getId } = UseFetchPrice();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching room with ID {priceId}</p>;
  return (
    <Card className="mx-auto w-full max-w-[24rem]">
      <CardBody className="flex flex-col gap-4 relative">
        <Typography
          variant="h4"
          color="blue-gray"
          className="text-red-400 text-center"
        >
          Update Price
        </Typography>
        <Link to="/admin/price">
          <RxCross2
            size={26}
            className="absolute top-2 right-2 cursor-pointer"
          />
        </Link>
        <div className="flex w-[100%] flex-col gap-4">
          <Typography className="-mb-2 text-red-400" variant="h6">
            Room
          </Typography>
          <Select
            size="md"
            label="Select RoomName"
            value={editPrice?.roomId}
            onChange={editRoom}
          >
            {sortData?.map((c) => {
              return (
                <Option key={c._id} value={c._id}>
                  {c.roomName}
                </Option>
              );
            })}
          </Select>
        </div>
        <div className="flex w-[100%] flex-col gap-4">
          <Typography className="-mb-2 text-red-400" variant="h6">
            Row Name
          </Typography>
          <Select
            size="md"
            label="Select RowName"
            value={editPrice?.rowName}
            onChange={handleEditSeatRow}
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
        <div className="flex w-[100%] flex-col gap-4">
          <Typography className="-mb-2 text-red-400" variant="h6">
            Seat No
          </Typography>
          <Select
            size="md"
            label="Select SeatNo"
            value={editPrice?.seatNo}
            onChange={handleEditSeatNo}
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
        <Typography className="-mb-2 text-red-400" variant="h6">
          Price
        </Typography>
        <Input
          label="Price"
          size="lg"
          type="number"
          value={editPrice?.price}
          onChange={postEditPrice}
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth onClick={editSave}>
          Update
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EditPrice;
