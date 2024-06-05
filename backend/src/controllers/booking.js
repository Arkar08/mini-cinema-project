import Booking from "../models/bookingSchema.js";
import Cinemas from "../models/cinemaSchema.js";
import Movies from "../models/movieSchema.js";
import SeatPrice from "../models/seatPriceSchema.js";

// post booking

export const postBookingController = async (req, res) => {
  const { cinemaId, movieId, movieSeat } = req.body;

  if (!cinemaId || !movieId || !movieSeat) {
    return res.status(400).json("Plz filled out in the fields");
  }

  try {
    const cinema = await Cinemas.findById({ _id: cinemaId });
    if (!cinema) {
      return res.status(400).json("invalid cinemaId");
    }
    const seatPriceIds = movieSeat.map((seat) => seat.seatPriceId);
    const seatPrices = await SeatPrice.find({ _id: { $in: seatPriceIds } });
    if (seatPrices.length !== seatPriceIds.length) {
      return res.status(400).json("Invalid seatPriceId");
    }

    const movie = await Movies.findById({ _id: movieId });
    if (!movie) {
      return res.status(400).json("invalid movieId");
    }
    const newBooking = new Booking({
      cinemaId: cinema,
      movieId: movie,
      movieSeat: movieSeat,
    });

    await newBooking.save();
    return res.status(201).json(newBooking);
  } catch (error) {
    console.log("postBookingController", error);
    return res.status(500).json("internet server error");
  }
};

// get booking

export const getBookingController = async (req, res) => {
  try {
    const getBooking = await Booking.find();
    if (getBooking) {
      return res.status(200).json(getBooking);
    } else {
      return res.sendStatus(400);
    }
  } catch (error) {
    console.log("getBookingController", error);
    return res.status(500).json("internet server error");
  }
};
