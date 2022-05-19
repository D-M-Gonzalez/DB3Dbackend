import jwt from "jsonwebtoken";
import User from "../models/user";

//JWT library validate function
const verifyToken = (req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    const token = JSON.parse(req.headers.authorization.split(' ')[1])
    jwt.verify(token, process.env.API_SECRET, function (err, decode) {
      if (err) req.user = undefined;
      User.findOne({
          _id: decode.id
        })
        .exec((err, user) => {
          if (err) {
            res.status(500)
              .send({
                message: err
              });
          } else {
            req.user = user;
            next();
          }
        })
    });
  } else {
    req.user = undefined;
    next();
  }
};
export default verifyToken;