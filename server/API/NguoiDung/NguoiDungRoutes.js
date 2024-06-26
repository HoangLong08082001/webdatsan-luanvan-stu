import { Login, createNew, getAll, getById } from "./NguoiDungController";

const express = require("express");
const router = express.Router();
export default function NguoiDungRoutes(app) {
  router.get("/get-all", getAll);
  router.post("/login", Login);
  router.post("/register", createNew);
  router.get("/get-by-id/:id", getById);
  return app.use("/khach-hang", router);
}
