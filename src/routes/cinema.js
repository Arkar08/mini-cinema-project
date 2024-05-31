import express from "express";
import {
  deleteCinemaController,
  getCinemaController,
  getCinemaIdController,
  patchCinemaController,
  postCinemaController,
} from "../controllers/cinema.js";
import {
  authMiddleware,
  authorizeAdmin,
} from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/", authMiddleware, authorizeAdmin, postCinemaController);
router.get("/", getCinemaController);
router.get("/:id", getCinemaIdController);
router.patch("/:id", authMiddleware, authorizeAdmin, patchCinemaController);
router.delete("/:id", authMiddleware, authorizeAdmin, deleteCinemaController);

export default router;
