import User from "../models/userSchema.js";
import brcypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

//post user
export const postUserController = async (req, res) => {
  const {
    fullName,
    password,
    email,
    stateCode,
    townshipCode,
    phNumber,
    dateOfBirth,
  } = req.body;

  if (
    !fullName ||
    !password ||
    !stateCode ||
    !townshipCode ||
    !phNumber ||
    !dateOfBirth ||
    !email
  ) {
    return res.status(400).json("Plz filled out in the field");
  }

  // email validator
  const existEmail = await User.findOne({ email });
  if (existEmail) {
    return res.status(400).json("Email is already exist");
  }

  // password generator
  const salt = await brcypt.genSalt(10);
  const hashPassword = await brcypt.hash(password, salt);

  try {
    const newUser = new User({
      fullName,
      password: hashPassword,
      stateCode,
      townshipCode,
      phNumber,
      dateOfBirth,
      email,
    });
    await newUser.save();
    generateToken(res, newUser._id);
    return res.status(201).json(newUser);
  } catch (error) {
    console.log("postUserController", error);
    return res.status(500).json("internet server error");
  }
};

// get user
export const getUserController = async (req, res) => {
  try {
    const getUser = await User.find({});
    if (getUser) {
      return res.status(200).json(getUser);
    } else {
      return res.sendStatus(400);
    }
  } catch (error) {
    console.log("getUserController", error);
    return res.status(500).json("internet server error");
  }
};

// get userId
export const getUserIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const getUserId = await User.findById({ _id: id });
    if (getUserId) {
      return res.status(200).json(getUserId);
    } else {
      return res.status(400).json("Invalid UserId");
    }
  } catch (error) {
    console.log("getUserIdController", error);
    return res.status(500).json("internet server error");
  }
};

// patch user
export const patchUserController = async (req, res) => {
  const { id } = req.params;
  try {
    const patchUser = await User.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    return res.status(200).json(patchUser);
  } catch (error) {
    console.log("patchUserController", error);
    return res.status(500).json("internet server error");
  }
};

// delete user
export const deleteUserController = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await User.findOneAndDelete({ _id: id });
    if (deleteUser) {
      return res.status(200).json("delete successfully");
    } else {
      return res.sendStatus(400);
    }
  } catch (error) {
    console.log("deleteUserController", error);
    return res.status(500).json("internet server error");
  }
};

// login user
export const loginUserController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const validatorEmail = await User.findOne({ email });

    if (validatorEmail) {
      const validatorPassword = await brcypt.compare(
        password,
        validatorEmail.password
      );
      if (validatorPassword) {
        generateToken(res, validatorEmail._id);

        res.status(200).json({
          email: validatorEmail.email,
          password: validatorEmail.password,
        });
      }
    }
  } catch (error) {
    console.log("loginUserController", error);
    return res.status(500).json("internet server error");
  }
};

// logout user
export const logoutUserController = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    maxAge: new Date(0),
  });
  return res.status(200).json("logout successfully");
};
