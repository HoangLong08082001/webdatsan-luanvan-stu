import { create, getAll, login, getById } from "./AdminController";

const express = require("express");
const router = express.Router();

export default function AdminRoutes(app) {
  router.post("/create", create);
  router.post("/login", login);
  router.get("/get", getAll);
  router.get("/get-by-id/:id", getById);
  return app.use("/admin", router);
}
