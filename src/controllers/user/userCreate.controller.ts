import { Request, Response } from "express";
import userCreateService from "../../services/user/userCreate.service";

const userCreateController = async (req: Request, res: Response) => {
  const { email, name, age, password } = req.body;

  const newUser = await userCreateService({ email, name, age, password });

  return res.status(201).json(newUser);
};

export default userCreateController;
