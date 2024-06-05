import express from "express";
import {
  deleteSeatPriceController,
  getSeatPriceController,
  getSeatPriceIdController,
  patchSeatPriceController,
  postSeatPriceController,
} from "../controllers/seatPrice.js";
import {
  authorizeAdmin,
  authMiddleware,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, authorizeAdmin, postSeatPriceController);
router.get("/", getSeatPriceController);
router.get("/:id", getSeatPriceIdController);
router.patch("/:id", authMiddleware, authorizeAdmin, patchSeatPriceController);
router.delete(
  "/:id",
  authMiddleware,
  authorizeAdmin,
  deleteSeatPriceController
);

export default router;
