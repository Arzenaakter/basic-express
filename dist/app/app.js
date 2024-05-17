"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
const express_1 = __importDefault(require("express"));
// import { Request } from 'express';
// import { Response } from 'express';
// import { NextFunction } from 'express';
const app = (0, express_1.default)();
const userRouter = express_1.default.Router();
// parser
app.use(express_1.default.json());
// middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.use("/", userRouter);
userRouter.post("/api/v/users/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: " create successfully",
        data: user
    });
});
// app.get("/", (req : Request , res : Response) => {
//   res.send("Hello Developer!");
// });
// query
// http://localhost:3000?email=arzena@mai.com&name=arzena
app.get("/", logger, (req, res, next) => {
    try {
        res.send(something);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
    console.log(req.query);
    res.send("Hello Developer!");
});
//localhost:3000/20
app.get("/:id", logger, (req, res) => {
    console.log(req.params);
    res.send("Hello Developer!");
});
app.post("/", (req, res) => {
    console.log(req.body);
    const body = req.body;
    // res.send(body);
    res.json({
        message: " successfully send",
        data: body
    });
});
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route is not found !"
    });
});
// error handler
app.use((error, req, res, next) => {
    console.log(error);
    if (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong !",
        });
    }
});
exports.default = app;
