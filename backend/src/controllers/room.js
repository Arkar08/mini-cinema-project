import Cinemas from "../models/cinemaSchema.js";
import Rooms from "../models/roomSchema.js";

// post room
export const postRoomController = async (req, res) => {
  const { cinemaId, roomNo, roomName } = req.body;
  if (!cinemaId || !roomNo || !roomName) {
    return res.status(400).json("Plz filled out in the fields");
  }

  try {
    const cinema = await Cinemas.findById(cinemaId);
    if (!cinema) {
      return res.status(400).json("Invalid cinema ID");
    }
    const postRoom = new Rooms({
      cinemaId: cinema,
      roomNo,
      roomName,
    });
    await postRoom.save();
    return res.status(201).json(postRoom);
  } catch (error) {
    console.log("postRoomController", error);
    return res.status(500).json("internet server error");
  }
};

//get room

export const getRoomController = async (req, res) => {
  try {
    const Room = await Rooms.find();
    return res.status(200).json({ Room });
  } catch (error) {
    console.log("getRoomController", error);
    return res.status(500).json("internet server error");
  }
};

// get roomId

export const getRoomIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const getRoomId = await Rooms.findById({ _id: id });
    if (getRoomId) {
      return res.status(200).json(getRoomId);
    } else {
      return res.status(400).json("invalid Id");
    }
  } catch (error) {
    console.log("getRoomIdController", error);
    return res.status(500).json("internet server error");
  }
};

//patch room
export const patchRoomController = async (req, res) => {
  const { id } = req.params;
  try {
    const patchRoom = await Rooms.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    return res.status(200).json(patchRoom);
  } catch (error) {
    console.log("patchRoomController", error);
    return res.status(500).json("internet server error");
  }
};

// delete room

export const deleteRoomController = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteRoom = await Rooms.findOneAndDelete({ _id: id });
    if (deleteRoom) {
      return res.status(200).json("delete successfully");
    } else {
      return res.sendStatus(400);
    }
  } catch (error) {
    console.log("deleteRoomController", error);
    return res.status(500).json("internet server error");
  }
};
