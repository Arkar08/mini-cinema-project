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
import {
  authMiddleware,
  authorizeAdmin,
} from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/signup", postUserController);
router.post("/login", loginUserController);
router.post("/logout", logoutUserController);
router.get("/", authMiddleware, authorizeAdmin, getUserController);
router.get("/:id", authMiddleware, authorizeAdmin, getUserIdController);
router.patch("/:id", authMiddleware, authorizeAdmin, patchUserController);
router.delete("/:id", authMiddleware, authorizeAdmin, deleteUserController);

export default router;
