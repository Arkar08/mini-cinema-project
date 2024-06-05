import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Movies = mongoose.model("Movies", movieSchema);

export default Movies;
