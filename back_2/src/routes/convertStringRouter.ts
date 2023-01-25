import express from "express";
import { convertStringController } from "@gnos28/monpackage";

const router = express.Router();

router.post("/", convertStringController.convert);

export default router;
