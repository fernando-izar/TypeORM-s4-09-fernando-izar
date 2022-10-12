import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const userGetByIdService = async ({ id }) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.find({
    where: {
      id: id,
    },
  });

  return user;
};

export default userGetByIdService;
