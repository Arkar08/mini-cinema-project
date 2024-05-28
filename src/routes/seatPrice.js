import express from "express";
import {
  deleteSeatPriceController,
  getSeatPriceController,
  getSeatPriceIdController,
  patchSeatPriceController,
  postSeatPriceController,
} from "../controllers/seatPrice.js";

const router = express.Router();

router.post("/", postSeatPriceController);
router.get("/", getSeatPriceController);
router.get("/:id", getSeatPriceIdController);
router.patch("/:id", patchSeatPriceController);
router.delete("/:id", deleteSeatPriceController);

export default router;
