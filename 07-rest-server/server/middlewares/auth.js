const jwt = require("jsonwebtoken");
/**
 * Verify token
 */
let verifyToken = (req, res, next) => {
  let token = req.get("Authorization");

  jwt.verify(token, process.env.SEED, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err: {
          message: "Token invalid."
        }
      });
    }

    req.user = decoded.user;
    next();
  });
};

let verifyRole = (req, res, next) => {
  let user = req.user;

  if (user.role !== "ADMIN_ROLE") {
    return res.status(401).json({
      ok: false,
      err: {
        message: "need admin role"
      }
    });
  }

  next();
};

module.exports = {
  verifyToken,
  verifyRole
};
