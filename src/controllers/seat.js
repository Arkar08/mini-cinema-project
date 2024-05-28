import Seats from "../models/SeatSchema.js";
import Rooms from "../models/roomSchema.js";

// post seat
export const postSeatController = async (req, res) => {
  const { roomId, seatNo, rowName, seatType } = req.body;

  if (!roomId || !seatNo || !rowName || !seatType) {
    return res.status(400).json("plz filled out in the fields");
  }
  try {
    const room = await Rooms.findById({ _id: roomId });
    if (!room) {
      return res.status(400).json("Invalid roomId");
    }
    if (seatType !== "single" && seatType !== "couple") {
      return res.status(400).json("wrong seatType");
    }
    const newSeat = new Seats({
      roomId: room,
      seatNo,
      rowName,
      seatType,
    });
    await newSeat.save();

    return res.status(201).json(newSeat);
  } catch (error) {
    console.log("postSeatController", error);
    return res.status(500).json("internet server error");
  }
};

// get seat

export const getSeatController = async (req, res) => {
  try {
    const getSeat = await Seats.find();
    return res.status(200).json(getSeat);
  } catch (error) {
    console.log("getSeatController", error);
    return res.status(500).json("internet server error");
  }
};

// get seatId
export const getSeatIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const getSeatId = await Seats.findById({ _id: id });
    if (getSeatId) {
      return res.status(200).json(getSeatId);
    } else {
      return res.status(400).json("invalid Id");
    }
  } catch (error) {
    console.log("getSeatIdController", error);
    return res.status(500).json("internet server error");
  }
};

// patch seat

export const patchSeatController = async (req, res) => {
  const { id } = req.params;
  try {
    const patchSeat = await Seats.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    return res.status(200).json(patchSeat);
  } catch (error) {
    console.log("patchSeatController", error);
    return res.status(500).json("internet server error");
  }
};

// delete seat

export const deleteSeatController = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteSeat = await Seats.findOneAndDelete({ _id: id });
    if (deleteSeat) {
      return res.status(200).json("delete successfully");
    } else {
      return res.sendStatus(400);
    }
  } catch (error) {
    console.log("deleteSeatController", error);
    return res.status(500).json("internet server error");
  }
};
