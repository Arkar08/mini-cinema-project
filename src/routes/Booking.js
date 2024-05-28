import express from "express";
import {
  getBookingController,
  postBookingController,
} from "../controllers/booking.js";

const router = express.Router();

router.post("/", postBookingController);
router.get("/", getBookingController);
export default router;
