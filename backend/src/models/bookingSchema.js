import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    cinemaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cinemas",
      required: true,
    },
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movies",
      required: true,
    },
    movieSeat: [
      {
        seatPriceId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "SeatPrice",
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
