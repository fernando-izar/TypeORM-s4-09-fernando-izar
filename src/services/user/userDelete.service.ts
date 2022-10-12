import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const userDeleteService = async ({ id }) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((user) => user.id == id);

  await userRepository.delete(account!.id);

  // await AppDataSource.createQueryBuilder()
  //   .delete()
  //   .from(User)
  //   .where("id = :id", { id: 1 })
  //   .execute();

  return "Deleted";
};

export default userDeleteService;
