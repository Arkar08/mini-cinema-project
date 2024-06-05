import mongoose from "mongoose";

const seatSchema = new mongoose.Schema(
  {
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rooms",
      required: true,
    },
    seatNo: {
      type: Number,
      required: true,
    },
    rowName: {
      type: String,
      required: true,
    },
    seatType: {
      type: String,
      enum: ["single", "couple"],
    },
  },
  { timestamps: true }
);

const Seats = mongoose.model("Seats", seatSchema);
export default Seats;
