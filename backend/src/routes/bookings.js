import express from "express";
import {
  getBookingAdminController,
  postBookingController,
  getBookingUserController,
  getBookingIdAdminController,
} from "../controllers/booking.js";
import {
  authMiddleware,
  authorizeAdmin,
  authorizeUser,
} from "../middleware/authMiddleware.js";

const router = express.Router();
//admin route
router.get(
  "/admin/bookings",
  authMiddleware,
  authorizeAdmin,
  getBookingAdminController
);
router.get(
  "/admin/bookings/:id",
  authMiddleware,
  authorizeAdmin,
  getBookingIdAdminController
);

// user route
router.post("/user/bookings", authMiddleware, postBookingController);
router.get(
  "/user/bookings",
  authMiddleware,
  authorizeUser,
  getBookingUserController
);
export default router;
