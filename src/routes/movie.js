import express from "express";
import {
  deleteMovieControllers,
  getMovieControllers,
  getMovieIdControllers,
  patchMovieControllers,
  postMovieControllers,
} from "../controllers/movie.js";
import {
  authorizeAdmin,
  authMiddleware,
} from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/", getMovieControllers);
router.post("/", authMiddleware, authorizeAdmin, postMovieControllers);
router.get("/:id", getMovieIdControllers);
router.patch("/:id", authMiddleware, authorizeAdmin, patchMovieControllers);
router.delete("/:id", authMiddleware, authorizeAdmin, deleteMovieControllers);
export default router;
