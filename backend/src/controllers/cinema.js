import Cinemas from "../models/cinemaSchema.js";

// post cinema
export const postCinemaController = async (req, res) => {
  const { name, location } = req.body;
  if (!name || !location) {
    return res.status(400).json("Plz fill out in the fields");
  }
  try {
    const newCinema = new Cinemas({
      name,
      location,
    });
    await newCinema.save();
    return res.status(201).json(newCinema);
  } catch (error) {
    console.log("postCinemaController", error);
    return res.status(500).json("internet server error");
  }
};

// get cinema
export const getCinemaController = async (req, res) => {
  try {
    const getCinema = await Cinemas.find();
    return res.status(200).json(getCinema);
  } catch (error) {
    console.log("getCinemaController", error);
    return res.status(500).json("internet server error");
  }
};

// get cinemaId
export const getCinemaIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const cinemaId = await Cinemas.findById({ _id: id });
    if (cinemaId) {
      return res.status(200).json(cinemaId);
    } else {
      return res.status(400).json("invalid Id");
    }
  } catch (error) {
    console.log("getCinemaIdController", error);
    return res.status(500).json("internet server error");
  }
};
// patch cinema
export const patchCinemaController = async (req, res) => {
  const { id } = req.params;
  try {
    const patchCinema = await Cinemas.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    return res.status(200).json(patchCinema);
  } catch (error) {
    console.log("patchCinemaController", error);
    return res.status(500).json("internet server error");
  }
};

// delete cinema
export const deleteCinemaController = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteCinema = await Cinemas.findOneAndDelete({ _id: id });
    if (deleteCinema) {
      return res.status(200).json("delete successfully");
    } else {
      return res.sendStatus(400);
    }
  } catch (error) {
    console.log("deleteCinemaController", error);
    return res.status(500).json("internet server error");
  }
};
