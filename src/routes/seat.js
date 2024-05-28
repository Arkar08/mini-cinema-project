import express from "express";
import {
  deleteSeatController,
  getSeatController,
  getSeatIdController,
  patchSeatController,
  postSeatController,
} from "../controllers/seat.js";

const router = express.Router();

router.post("/", postSeatController);
router.get("/", getSeatController);
router.get("/:id", getSeatIdController);
router.patch("/:id", patchSeatController);
router.delete("/:id", deleteSeatController);

export default router;
