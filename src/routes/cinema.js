import express from "express";
import {
  deleteCinemaController,
  getCinemaController,
  getCinemaIdController,
  patchCinemaController,
  postCinemaController,
} from "../controllers/cinema.js";

const router = express.Router();

router.post("/", postCinemaController);
router.get("/", getCinemaController);
router.get("/:id", getCinemaIdController);
router.patch("/:id", patchCinemaController);
router.delete("/:id", deleteCinemaController);

export default router;
