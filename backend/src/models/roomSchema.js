import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    cinemaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cinemas",
      required: true,
    },
    roomNo: {
      type: Number,
      required: true,
    },
    roomName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Rooms = mongoose.model("Rooms", roomSchema);

export default Rooms;
