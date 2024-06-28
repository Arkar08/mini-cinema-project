import express from "express";
import {
  getBookingAdminController,
  postBookingController,
  getBookingUserController,
} from "../controllers/booking.js";
import {
  authMiddleware,
  authorizeAdmin,
} from "../middleware/authMiddleware.js";

const router = express.Router();
//admin route
router.get("/:", authMiddleware, authorizeAdmin, getBookingAdminController);

// user route
router.post("/", authMiddleware, postBookingController);
router.get("/", authMiddleware, getBookingUserController);
export default router;
