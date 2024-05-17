// const express = require("express");
import express, { NextFunction, Request, Response } from "express"
// import { Request } from 'express';
// import { Response } from 'express';
// import { NextFunction } from 'express';
const app = express();
const userRouter = express.Router();

// parser
app.use(express.json())

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method, req.hostname)
    next()
}

app.use("/", userRouter);



userRouter.post("/api/v/users/create-user", (req: Request, res: Response) => {
    const user = req.body;
    console.log(user)
    res.json({
        success: true,
        message: " create successfully",
        data: user
    })
    
})




// app.get("/", (req : Request , res : Response) => {
//   res.send("Hello Developer!");
// });

// query
// http://localhost:3000?email=arzena@mai.com&name=arzena
app.get("/", logger, (req: Request, res: Response,next: NextFunction) => {
    try {
        res.send(something)
        
    }
    catch (error) {
        console.log(error);
        next(error)
       
        
    }
    console.log(req.query);
  res.send("Hello Developer!");
});



//localhost:3000/20

app.get("/:id",logger, (req: Request, res: Response) => {
  console.log(req.params);
  res.send("Hello Developer!");
});

app.post("/", (req: Request, res: Response) => {
    console.log(req.body)
    const body = req.body
    // res.send(body);
    res.json({
        message: " successfully send",
        data : body
    })
})

app.all("*", (req: Request, res: Response) => {
    res.status(400).json({
        success: false,
        message: "Route is not found !"
    })
    
})


// error handler
app.use((error:any, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
    if (error) {
      res.status(400).json({
        success: false,
        message: "Something went wrong !",
      });
  }
})

export default app;