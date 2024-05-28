import mongoose from "mongoose";

const connectedToDb = () => {
  try {
    mongoose
      .connect(
        "mongodb+srv://soearkarmg210:chithmwethant271222@cluster0.8kd8xvb.mongodb.net/mini-cinema?retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(() => {
        console.log("connected to db");
      });
  } catch (error) {
    console.log("db connection", error);
  }
};

export default connectedToDb;
