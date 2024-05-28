import express from "express";
import connectedToDb from "./database/connectedToDb.js";
import movieRoute from "./routes/movie.js";
import cinemaRoute from "./routes/cinema.js";
import roomRoute from "./routes/room.js";
import seatRoute from "./routes/seat.js";
import seatPriceRoute from "./routes/seatPrice.js";

export const app = express();
app.use(express.json());

const PORT = 8081;

//routes

app.use("/api/v1/movies", movieRoute);
app.use("/api/v1/cinemas", cinemaRoute);
app.use("/api/v1/rooms", roomRoute);
app.use("/api/v1/seats", seatRoute);
app.use("/api/v1/price", seatPriceRoute);

//app.get("/", (req, res) => {
//return res.status(200).json("hello world");
//});

app.listen(PORT, () => {
  connectedToDb();
  console.log(`server is running ${PORT}`);
});
