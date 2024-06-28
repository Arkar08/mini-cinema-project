/* eslint-disable no-undef */
import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";
export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    try {
      const sliceToken = token.slice(7);
      const decoded = jwt.verify(sliceToken, process.env.secret_key);
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
  if (req.user && req.user.isAdmin === true) {
    console.log(req.user);
    next();
  } else {
    res.status(401).json("not authorized as an admin");
  }
};
