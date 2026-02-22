import jwt from "jsonwebtoken";
function verfifyToken(req, res, next) {
  let token = req.headers.token;
  //   console.log("middleware ", token);
  if (!token) {
    return res.json({
      msg: "you are not authorised",
      success: false,
    });
  }

  let decode = jwt.verify(token, "codeware");
  console.log(decode);
  req.user = decode.user1;
  next();
}

export default verfifyToken;
