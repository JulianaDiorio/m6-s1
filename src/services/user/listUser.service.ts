import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserCreate } from "../../interfaces/users";
import { allUsersWithoutPassword } from "../../schemas/users.schemas";

export const listUserService = async (): Promise<IUserCreate[]> => {
  const userRep = AppDataSource.getRepository(User);
  const users = await userRep.find();

  const userWithoutPassword = await allUsersWithoutPassword.validate(users, {
    stripUnknown: true,
  });

  return userWithoutPassword;
};
