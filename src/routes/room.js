import express from "express";
import {
  deleteRoomController,
  getRoomController,
  getRoomIdController,
  patchRoomController,
  postRoomController,
} from "../controllers/room.js";
import {
  authorizeAdmin,
  authMiddleware,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, authorizeAdmin, postRoomController);
router.get("/", getRoomController);
router.get("/:id", getRoomIdController);
router.patch("/:id", authMiddleware, authorizeAdmin, patchRoomController);
router.delete("/:id", authMiddleware, authorizeAdmin, deleteRoomController);

export default router;
