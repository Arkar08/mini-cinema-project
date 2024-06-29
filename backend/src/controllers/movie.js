import Movies from "../models/movieSchema.js";

// get all movie
export const getMovieControllers = async (req, res) => {
  try {
    const movies = await Movies.find();
    return res.status(200).json({ movies });
  } catch (error) {
    console.log("getMovieControllers", error);
    return res.status(500).json("internet server error");
  }
};

// post movie
export const postMovieControllers = async (req, res) => {
  const { title, duration, photo } = req.body;

  if (!title || !duration || !photo) {
    return res.status(400).json("Plz fill out in the fields");
  }
  try {
    const newMovie = new Movies({
      title,
      duration,
      photo,
    });
    await newMovie.save();
    return res.status(201).json(newMovie);
  } catch (error) {
    console.log("postMovieControllers", error);
    return res.status(500).json("internet server error");
  }
};

//get movieId
export const getMovieIdControllers = async (req, res) => {
  const { id } = req.params;
  try {
    const movieId = await Movies.findById({ _id: id });
    if (movieId) {
      return res.status(200).json(movieId);
    } else {
      return res.status(400).json("movie is not found");
    }
  } catch (error) {
    console.log("getMovieIdControllers", error);
    return res.status(500).json("internet server error");
  }
};

//patch Movie
export const patchMovieControllers = async (req, res) => {
  const { id } = req.params;
  try {
    const patchMovie = await Movies.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    return res.status(200).json(patchMovie);
  } catch (error) {
    console.log("patchMovieControllers", error);
    return res.status(500).json("internet server error");
  }
};

// delete movie
export const deleteMovieControllers = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteMovie = await Movies.findOneAndDelete({ _id: id });
    if (deleteMovie) {
      return res.status(200).json("delete successfully");
    }
  } catch (error) {
    console.log("deleteMovieControllers", error);
    return res.status(500).json("internet server error");
  }
};
