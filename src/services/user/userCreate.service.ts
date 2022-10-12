import { isContext } from "vm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { ICreateUser } from "../../interfaces/user";
import bcrypt from "bcrypt";

const userCreateService = async ({
  email,
  name,
  age,
  password,
}: ICreateUser) => {
  const userRepository = AppDataSource.getRepository(User);

  const newUser = userRepository.create({
    email,
    name,
    age,
    password: bcrypt.hashSync(password, 10),
  });

  await userRepository.save(newUser);

  return newUser;
};

export default userCreateService;
