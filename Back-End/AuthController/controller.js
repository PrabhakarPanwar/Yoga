import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import yogaUser from "../models/yogaSchema.js";

let token;

export const register = async (req, res) => {
  const { email, name, pwd } = req.body;
  // console.log("email and password ", email, pwd);
  let user = await yogaUser.find();
  //Storing dataBase in user variable

  let user1 = user.find((i) => i.email == email);
  //checking if dataBase contain user email

  if (user1) {
    return res.json({
      msg: "User Already Registered",
      success: true,
    });
  }
  let hash = await bcrypt.hash(pwd, 10);
  await yogaUser.create({ pwd: hash, name, email });
  //Storing hashpassword in pwd

  res.json({
    msg: "Successfully Registered",
    success: true,
  });
  //hashing
};

export const login = async (req, res) => {
  const { email, pwd } = req.body;

  let user = await yogaUser.find();
  //Storing dataBase in user variable

  let user1 = user.find((i) => i.email == email);
  //checking if dataBase contain user email

  if (!user1) {
    return res.json({
      success: false,
      msg: "user not existed",
    });
  }

  let isMatch = await bcrypt.compare(pwd, user1.pwd);
  //Using hashpassword(pwd:hash) stored in database

  if (!isMatch) {
    return res.json({
      success: false,
      msg: "invalid password",
    });
  }

  token = jwt.sign({ user1 }, "codeware");

  res.json({
    success: true,
    token,
  });
};
