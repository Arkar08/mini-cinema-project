import mongoose from "mongoose";

const connectedToDb = () => {
  try {
    mongoose.connect(process.env.MONGO_URL).then(() => {
      console.log("connected to db");
    });
  } catch (error) {
    console.log("db connection", error);
  }
};

export default connectedToDb;
