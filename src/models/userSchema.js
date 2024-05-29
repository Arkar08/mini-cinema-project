import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    stateCode: {
      type: Number,
      required: true,
    },
    townshipCode: {
      type: String,
      required: true,
    },
    phNumber: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: "false",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
