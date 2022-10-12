import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const userDeleteService = async ({ id }) => {
  await AppDataSource.createQueryBuilder()
    .delete()
    .from(User)
    .where("id = :id", { id: 1 })
    .execute();

  return "Deleted";
};

export default userDeleteService;
