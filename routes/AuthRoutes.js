import {register, login, logout, getUserData} from "../controller/Auth.js";
import express from "express";

const AuthRoutes = express.Router();
// user registration route
AuthRoutes.post("/register",register)
AuthRoutes.post("/login",login)
AuthRoutes.post("/logout",logout)
AuthRoutes.post("/getUserData/:id",getUserData)

export default AuthRoutes
