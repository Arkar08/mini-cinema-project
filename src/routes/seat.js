import express from "express";
import {
  deleteSeatController,
  getSeatController,
  getSeatIdController,
  patchSeatController,
  postSeatController,
} from "../controllers/seat.js";
import {
  authorizeAdmin,
  authMiddleware,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, authorizeAdmin, postSeatController);
router.get("/", getSeatController);
router.get("/:id", getSeatIdController);
router.patch("/:id", authMiddleware, authorizeAdmin, patchSeatController);
router.delete("/:id", authMiddleware, authorizeAdmin, deleteSeatController);

export default router;
