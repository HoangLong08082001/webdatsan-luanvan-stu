import {
  Login,
  createNew,
  getAll,
  getById,
  renew,
  sendMail,
} from "./NguoiDungController";

const express = require("express");
const router = express.Router();
export default function NguoiDungRoutes(app) {
  router.get("/get-all", getAll);
  router.post("/login", Login);
  router.post("/register", createNew);
  router.get("/get-by-id/:id", getById);
  router.post("/send-mail", sendMail);
  router.put("/re-new", renew);
  return app.use("/khach-hang", router);
}
