import { Request, Response } from "express";
import userListOneService from "../../services/user/userListOne.service";

const userListOneController = async (req: Request, res: Response) => {
  console.log("authorization", req.headers.authorization);

  try {
    const email = req.userEmail;
    const user = await userListOneService(email);

    return res.status(200).send(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userListOneController;