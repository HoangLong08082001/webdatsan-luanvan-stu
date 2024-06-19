import { MomoPayment } from "./PaymentController";

const express = require("express");
const router = express.Router();
export default function PaymentRoutes(app) {
  router.post("/momo", MomoPayment);
  return app.use("/payment", router);
}
