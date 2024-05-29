import express from "express";
import {
  deleteUserController,
  getUserController,
  getUserIdController,
  loginUserController,
  logoutUserController,
  patchUserController,
  postUserController,
} from "../controllers/user.js";

const router = express.Router();

router.post("/signup", postUserController);
router.post("/login", loginUserController);
router.post("/logout", logoutUserController);
router.get("/", getUserController);
router.get("/:id", getUserIdController);
router.patch("/:id", patchUserController);
router.delete("/:id", deleteUserController);

export default router;
