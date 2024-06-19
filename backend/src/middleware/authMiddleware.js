/* eslint-disable no-undef */
import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";
export const authMiddleware = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.secret_key);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      return res.status(400).json("no authorized token failed");
    }
  } else {
    return res.status(400).json("no token");
  }
};

export const authorizeAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json("not authorized as an admin");
  }
};
