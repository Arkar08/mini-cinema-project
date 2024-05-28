import express from "express";
import {
  deleteRoomController,
  getRoomController,
  getRoomIdController,
  patchRoomController,
  postRoomController,
} from "../controllers/room.js";

const router = express.Router();

router.post("/", postRoomController);
router.get("/", getRoomController);
router.get("/:id", getRoomIdController);
router.patch("/:id", patchRoomController);
router.delete("/:id", deleteRoomController);

export default router;
