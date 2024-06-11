import express from "express";
import { userController } from "../controllers/userController.js";

export const router = express.Router();

router.post("/login" , userController().login );
router.post("/signup" , userController().signUp);
router.post("/logout" , userController().logout);