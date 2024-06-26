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
import UseFetchMovies from "../../hooks/UseFetchMovies";
import { useQuery } from "react-query";
import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import { Link } from "react-router-dom";

const EditMovie = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const { getId } = UseFetchMovies();
  const { setEditMovies, editMovies, updateChange } = useContext(MovieContext);
  const { isLoading, isError } = useQuery(
    ["movies", movieId],
    () => {
      getId(movieId);
    },
    {
      onSuccess: (data) => {
        console.log(data);
        setEditMovies(data);
      },
    }
  );
  console.log(editMovies);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching room with ID {movieId}</p>;
  return (
    <Card className="mx-auto w-full max-w-[24rem] mt-4">
      <CardBody className="flex flex-col gap-2 relative">
        <Typography
          variant="h4"
          color="blue-gray"
          className="text-red-400 text-center"
        >
          New Movie
        </Typography>
        <Link to="/admin/movie">
          <RxCross2
            size={26}
            className="absolute top-2 right-2 cursor-pointer"
          />
        </Link>
        <Typography className="-mb-2 text-red-400" variant="h6">
          Title
        </Typography>
        <Input
          label="Title"
          size="lg"
          name="title"
          value={editMovies?.title}
          onChange={updateChange}
        />
        <Typography className="-mb-2 text-red-400" variant="h6">
          Date
        </Typography>
        <Input
          label="Date"
          size="lg"
          type="date"
          name="date"
          value={editMovies?.date}
          onChange={updateChange}
        />
        <Typography className="-mb-2 text-red-400" variant="h6">
          Duration
        </Typography>
        <Input
          label="hh:mm"
          size="lg"
          name="duration"
          disabled
          value={editMovies?.duration}
        />
        <Typography className="-mb-2 text-red-400" variant="h6">
          Photo
        </Typography>
        <Input
          label="Photo URL"
          size="lg"
          name="photo"
          value={editMovies?.photo}
          onChange={updateChange}
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Update
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EditMovie;
