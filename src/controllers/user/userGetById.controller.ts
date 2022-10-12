import { Request, Response } from "express";
import userGetByIdService from "../../services/user/userGetById.service";

const userGetByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await userGetByIdService({ id });
    return res.status(201).json(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userGetByIdController;
