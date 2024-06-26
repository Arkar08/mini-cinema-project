import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";
import { useQuery } from "react-query";
import UseFetchCinema from "../../hooks/UseFetchCinema";
import { useContext } from "react";
import { CinemaContext } from "../../context/CinemaContext";
import { Link } from "react-router-dom";

const EditCinema = () => {
  const { cinemaId } = useParams();
  const { getId } = UseFetchCinema();
  const { setEditCinema, editCinema, handleEditChange, handleUpdate } =
    useContext(CinemaContext);
  const { isLoading, isError } = useQuery(
    ["cinema", cinemaId],
    () => getId(cinemaId),
    {
      onSuccess: (data) => {
        setEditCinema(data);
      },
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching room with ID {cinemaId}</p>;
  return (
    <Card className="mx-auto w-full max-w-[24rem] mt-8">
      <CardBody className="flex flex-col gap-4 relative">
        <Typography
          variant="h4"
          color="blue-gray"
          className="text-red-400 text-center"
        >
          Update Cinema
        </Typography>
        <Link to="/admin/cinema">
          <RxCross2
            size={26}
            className="absolute top-2 right-2 cursor-pointer"
          />
        </Link>
        <Typography className="-mb-2 text-red-400" variant="h6">
          Name
        </Typography>
        <Input
          label="Name"
          size="lg"
          name="name"
          value={editCinema?.name}
          onChange={handleEditChange}
        />
        <Typography className="-mb-2 text-red-400" variant="h6">
          Location
        </Typography>
        <Input
          label="Location"
          size="lg"
          name="location"
          disabled
          value={editCinema?.location}
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth onClick={handleUpdate}>
          Update
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EditCinema;
