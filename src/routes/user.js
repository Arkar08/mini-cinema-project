import express from "express";
import {
  deleteUserController,
  getUserController,
  getUserIdController,
  patchUserController,
  postUserController,
} from "../controllers/user.js";

const router = express.Router();

router.post("/", postUserController);
router.get("/", getUserController);
router.get("/:id", getUserIdController);
router.patch("/:id", patchUserController);
router.delete("/:id", deleteUserController);
export default router;
