import express from "express";
import { addDoctor } from "../controllers/admincontroller";
import upload from "../middleware/multer";

const adminRouter = express.Router();
adminRouter.post("/add-docter", upload.single("image"), addDoctor);

export default adminRouter;
