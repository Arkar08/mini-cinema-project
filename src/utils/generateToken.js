import jwt from "jsonwebtoken";

export const secret_key = "dksjfkdjfkdjf";
const node_env = "development";

const generateToken = async (res, userId) => {
  const token = jwt.sign({ userId }, secret_key, {
    expiresIn: "30d",
  });
  if (!token) {
    return res.status(400).json("invalid Token");
  }
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: node_env !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
  return token;
};

export default generateToken;
