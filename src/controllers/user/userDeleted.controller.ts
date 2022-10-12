import { Request, Response } from "express";
import userDeleteService from "../../services/user/userDelete.service";

const userDeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;

  return await userDeleteService({ id });
};

export default userDeleteController;
