import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

let user = [];

let token;

export const register = async (req, res) => {
  const { email, pwd } = req.body;
  // console.log("email and password ", email, pwd);

  let user1 = user.find((i) => i.email == email);
  if (user1) {
    return res.json({
      msg: "user already there",
      success: true,
    });
  }

  let hash = await bcrypt.hash(pwd, 10);
  // console.log(hash);
  if (hash) {
    user.push({
      email,
      pwd: hash,
      success: true,
    });
  }
  res.json({
    user1,
  });
};

export const login = async (req, res) => {
  const { email, pwd } = req.body;

  let user1 = user.find((i) => i.email == email);
  // console.log(user1);

  if (!user1) {
    return res.json({
      success: false,
      msg: "user not existed",
    });
  }

  let isMatch = await bcrypt.compare(pwd, user1.pwd);
  if (!isMatch) {
    return res.json({
      success: false,
      msg: "invalid password",
    });
  }

  token = jwt.sign({ user1 }, "codeware");

  res.json({
    success: true,
    user1,
    token,
  });
};

export const dashboard = (req, res) => {
  res.json({
    msg: "authenticated",
    success: true,
  });
};
