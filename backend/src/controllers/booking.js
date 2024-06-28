import Booking from "../models/bookingSchema.js";

// post booking
export const postBookingController = async (req, res) => {
  console.log(req.body);
  return res.sendStatus(200);
};

//get user Booking
export const getBookingUserController = async (req, res) => {
  console.log(req.body);
  return res.sendStatus(200);
};

// get booking
export const getBookingAdminController = async (req, res) => {
  console.log(req.body);
  return res.sendStatus(200);
};
