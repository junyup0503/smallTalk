/**
 * This middleware is responsible for returning a json every time
 * an error comes in. We use in the app.js as global middleware
 */
import { config } from "dotenv";

config();

export default (err, request, response, next) => {
  const isProduction = process.env.NODE_ENV === "production";
  let errorMessage = {};

  if (response.headersSent) {
    return next(err);
  }

  if (!isProduction) {
    errorMessage = err;
    console.log("errMessage:", err);
  }

  return response.status(err.statusCode || 500).json({
    code: err.code || 5000,
    msg: err.msg || err.message,
    ...(err.errors && { errors: err.errors }),
    ...(!isProduction && { trace: errorMessage }),
  });
};
