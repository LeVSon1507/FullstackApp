import jwt from "jsonwebtoken";
import { createError } from "./error.js";

const verify = (req, res, next, check) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated"));
  }
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid"));
    req.user = user;
    if (!check(user)) {
      return next(createError(403, "You are not authorized"));
    }
    next();
  });
};

export const verifyToken = (req, res, next) => {
  verify(req, res, next, () => true);
};

export const verifyUser = (req, res, next) => {
  verify(req, res, next, (user) => user.id === req.params.id || user.isAdmin);
};

export const verifyAdmin = (req, res, next) => {
  verify(req, res, next, (user) => user.isAdmin);
};
