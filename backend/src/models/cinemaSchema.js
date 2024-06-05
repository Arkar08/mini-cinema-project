import mongoose from "mongoose";

const cinemaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Cinemas = mongoose.model("Cinemas", cinemaSchema);

export default Cinemas;
