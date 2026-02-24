import jwt from "jsonwebtoken";

function verifyToken(req, res, next) {
  let token = req.headers.token;
  if (!token) {
    return res.json({
      msg: "you are not authorised",
      success: false,
    });
  }

  try {
    const decoded = jwt.verify(token, "codeware");
    req.user = decoded.user1; // attach user info to request
    return res.json({
      msg: "You are authorised",
      success: true,
    });
  } catch (err) {
    return res.json({
      msg: "Token is invalid",
      success: false,
    });
  }

  next();
}

export default verifyToken;
