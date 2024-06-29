import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movies",
      required: true,
    },
    seatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seats",
      required: true,
    },
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rooms",
      required: true,
    },
    cinemaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cinemas",
      required: true,
    },
    seatPriceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SeatPrice",
      required: true,
    },
    showDate: {
      type: Date,
      default: Date.now(),
      required: true,
    },
    showTime: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
