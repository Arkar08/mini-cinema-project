import mongoose from "mongoose";

const seatPriceSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rooms",
      required: true,
    },
    seatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seats",
      required: true,
    },
  },
  { timestamps: true }
);

const seatPrice = mongoose.model("seatPrice", seatPriceSchema);

export default seatPrice;
