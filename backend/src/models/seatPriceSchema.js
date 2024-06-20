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
    rowName: {
      type: String,
      required: true,
    },
    seatNo: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const SeatPrice = mongoose.model("SeatPrice", seatPriceSchema);

export default SeatPrice;
