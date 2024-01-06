import express, { Router } from "express";
import { logIn, signUp } from "../controller/userController";

const auth: Router = express.Router();

auth.post("/logIn", logIn);
auth.post("/signUp", signUp);

export { auth };
