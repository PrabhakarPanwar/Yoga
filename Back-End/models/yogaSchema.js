import mongoose from "mongoose";

const yoga = mongoose.Schema({
  pwd: String,
  name: String,
  email: String,
});

const yogaUser = mongoose.model("yogauser", yoga);

export default yogaUser;
