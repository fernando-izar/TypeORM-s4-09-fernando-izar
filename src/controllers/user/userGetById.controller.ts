import { Request, Response } from "express";
import userGetByIdService from "../../services/user/userGetById.service";

const userGetByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await userGetByIdService({ id });

  return res.status(201).json(user);
};

export default userGetByIdController;
