/* eslint-disable no-undef */
import express from "express";
import connectedToDb from "./database/connectedToDb.js";
import movieRoute from "./routes/movie.js";
import cinemaRoute from "./routes/cinema.js";
import roomRoute from "./routes/room.js";
import seatRoute from "./routes/seat.js";
import seatPriceRoute from "./routes/seatPrice.js";
import bookingRoute from "./routes/bookings.js";
import userRoute from "./routes/user.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

export const PORT = process.env.PORT || 5000;
connectedToDb();

//routes
app.use("/api/v1/movies", movieRoute);
app.use("/api/v1/cinemas", cinemaRoute);
app.use("/api/v1/rooms", roomRoute);
app.use("/api/v1/seats", seatRoute);
app.use("/api/v1/price", seatPriceRoute);
app.use("/api/v1/bookings", bookingRoute);
app.use("/api/v1/users", userRoute);

app.get("/", (req, res) => {
  return res.status(200).json("hello world");
});

export default app;
