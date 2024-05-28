import User from "../models/userSchema.js";

//post user
export const postUserController = async (req, res) => {
  const { fullName, password, stateCode, townshipCode, phNumber, dateOfBirth } =
    req.body;

  if (
    !fullName ||
    !password ||
    !stateCode ||
    !townshipCode ||
    !phNumber ||
    !dateOfBirth
  ) {
    return res.status(400).json("Plz filled out in the field");
  }
  try {
    const newUser = new User({
      fullName,
      password,
      stateCode,
      townshipCode,
      phNumber,
      dateOfBirth,
    });
    await newUser.save();
    return res.status(201).json(newUser);
  } catch (error) {
    console.log("postUserController", error);
    return res.status(500).json("internet server error");
  }
};

// get user

export const getUserController = async (req, res) => {
  try {
    const getUser = await User.find();
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
