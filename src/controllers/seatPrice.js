import Seats from "../models/SeatSchema.js";
import Rooms from "../models/roomSchema.js";
import seatPrice from "../models/seatPriceSchema.js";
// post price
export const postSeatPriceController = async (req, res) => {
  const { price, roomId, seatId } = req.body;
  if (!roomId || !price || !seatId) {
    return res.status(400).json("plz filled out in the fields");
  }
  try {
    const seat = await Seats.findById({ _id: seatId });
    if (!seat) {
      return res.status(400).json("invalid seatId");
    }
    const room = await Rooms.findById({ _id: roomId });
    if (!room) {
      return res.status(400).json("invalid roomId");
    }
    const newPrice = new seatPrice({
      price,
      roomId: room,
      seatId: seat,
    });
    await newPrice.save();
    return res.status(201).json(newPrice);
  } catch (error) {
    console.log("postSeatPriceController", error);
    return res.status(500).json("internet server error");
  }
};

// get price

export const getSeatPriceController = async (req, res) => {
  try {
    const getPrice = await seatPrice.find();
    return res.status(200).json(getPrice);
  } catch (error) {
    console.log("getSeatPriceController", error);
    return res.status(500).json("internet server error");
  }
};

// get priceId
export const getSeatPriceIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const getPriceId = await seatPrice.findById({ _id: id });
    if (getPriceId) {
      return res.status(200).json(getPriceId);
    } else {
      return res.status(400).json("invalid priceId");
    }
  } catch (error) {
    console.log("getSeatPriceIdController", error);
    return res.status(500).json("internet server error");
  }
};

// patch price
export const patchSeatPriceController = async (req, res) => {
  const { id } = req.params;
  try {
    const patchPrice = await seatPrice.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    return res.status(200).json(patchPrice);
  } catch (error) {
    console.log("patchSeatPriceController", error);
    return res.status(500).json("internet server error");
  }
};

// delete price
export const deleteSeatPriceController = async (req, res) => {
  const { id } = req.params;
  try {
    const deletePrice = await seatPrice.findOneAndDelete({ _id: id });
    if (deletePrice) {
      return res.status(200).json("delete successfully");
    } else {
      return res.sendStatus(400);
    }
  } catch (error) {
    console.log("deleteSeatPriceController", error);
    return res.status(500).json("internet server error");
  }
};
