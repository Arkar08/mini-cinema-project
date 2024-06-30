import Rooms from "../models/roomSchema.js";
import SeatPrice from "../models/seatPriceSchema.js";
// post price
export const postSeatPriceController = async (req, res) => {
  const { price, roomId, rowName, seatNo } = req.body;
  if (!roomId || !price || !rowName || !seatNo) {
    return res.status(400).json("plz filled out in the fields");
  }
  try {
    const room = await Rooms.findById({ _id: roomId });
    if (!room) {
      return res.status(400).json("invalid roomId");
    }
    const newPrice = new SeatPrice({
      price,
      roomId: room,
      rowName,
      seatNo,
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
    const Price = await SeatPrice.find();
    return res.status(200).json(Price);
  } catch (error) {
    console.log("getSeatPriceController", error);
    return res.status(500).json("internet server error");
  }
};

// get priceId
export const getSeatPriceIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const getPriceId = await SeatPrice.findById({ _id: id });
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
    const patchPrice = await SeatPrice.findOneAndUpdate(
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
    const deletePrice = await SeatPrice.findOneAndDelete({ _id: id });
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
