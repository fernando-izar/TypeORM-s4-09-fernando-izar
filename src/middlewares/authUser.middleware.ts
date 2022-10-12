import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { Any } from "typeorm";

const authUser = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.headers.authorization.split(" ")[1]);
  try {
    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token as string, process.env.JWT_SECRET as string),
      (err: any, decoded: any) => {
        req.userEmail = decoded.email;
        next();
      };
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

export default authUser;
