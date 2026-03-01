
import express from "express";
import { getcontact, updatecontact } from "../controller/contactcontroller.js";

const router = express.Router();

router.get("/", getcontact);
router.post("/", updatecontact);

export default router;