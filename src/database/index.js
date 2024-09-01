// import mongoose from "mongoose";

const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  const connectionURL =
    "mongodb+srv://windb320:9cBTFK9ZBtgogYei@cluster0.lxocqqj.mongodb.net/";

  mongoose
    .connect(connectionURL)
    .then(() => console.log("join board database connection is successfull"))
    .catch((error) => console.log(error));
};

export default connectToDB;
