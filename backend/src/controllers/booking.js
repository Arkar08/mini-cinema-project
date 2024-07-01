import Booking from "../models/bookingSchema.js";

// post booking
export const postBookingController = async (req, res) => {
  const {
    userId,
    movieId,
    seatId,
    roomId,
    cinemaId,
    seatPriceId,
    showDate,
    showTime,
  } = req.body;
  if (
    !userId ||
    !movieId ||
    !seatId ||
    !roomId ||
    !cinemaId ||
    !seatPriceId ||
    !showDate ||
    !showTime
  ) {
    return res.status(400).json("Plz filled out in the fields");
  }
  try {
    const newBooking = new Booking({
      userId,
      movieId,
      seatId,
      roomId,
      cinemaId,
      seatPriceId,
      showDate,
      showTime,
    });
    await newBooking.save();
    return res.status(201).json(newBooking);
  } catch (error) {
    console.log("postBookingController", error);
    return res.status(500).json("internet server error");
  }
};

//get user Booking
export const getBookingUserController = async (req, res) => {
  try {
    const { _id: userId } = req.user;
    const bookings = await Booking.find({ userId: userId });

    res.status(200).json({ bookings });
  } catch (error) {
    console.error("Error in getBookingUserController:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// get booking
export const getBookingAdminController = async (req, res) => {
  try {
    const getBooking = await Booking.find();
    return res.status(200).json(getBooking);
  } catch (error) {
    console.log("getBookingAdminController", error);
    return res.status(500).json("internet server error");
  }
};
export const getBookingIdAdminController = async (req, res) => {
  const { id } = req.params;
  try {
    const BookingId = await Booking.findById({ _id: id });
    if (BookingId) {
      return res.status(200).json(BookingId);
    } else {
      return res.status(400).json("invalid Id");
    }
  } catch (error) {
    console.log("getBookingIdAdminController", error);
    return res.status(500).json("internet server error");
  }
};
