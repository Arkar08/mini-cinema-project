import express from "express";
import {
  getBookingAdminController,
  postBookingController,
  getBookingUserController,
} from "../controllers/booking.js";
import {
  authMiddleware,
  authorizeAdmin,
  authorizeUser,
} from "../middleware/authMiddleware.js";

const router = express.Router();
//admin route
router.get("/admin", authMiddleware, authorizeAdmin, getBookingAdminController);

// user route
router.post("/user", authMiddleware, postBookingController);
router.get("/user", authMiddleware, authorizeUser, getBookingUserController);
export default router;
