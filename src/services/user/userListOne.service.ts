import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserListOne } from "../../interfaces/user";
import jwt from "jsonwebtoken";

const userListOneService = async (email: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = user.find((user) => user.email === email);

  return account;
};

export default userListOneService;
