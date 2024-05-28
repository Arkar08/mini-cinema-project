import express from "express";
import {
  deleteMovieControllers,
  getMovieControllers,
  getMovieIdControllers,
  patchMovieControllers,
  postMovieControllers,
} from "../controllers/movie.js";

const router = express.Router();

router.get("/", getMovieControllers);
router.post("/", postMovieControllers);
router.get("/:id", getMovieIdControllers);
router.patch("/:id", patchMovieControllers);
router.delete("/:id", deleteMovieControllers);
export default router;
