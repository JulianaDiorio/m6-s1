import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserResponse, IUserUpdate } from "../../interfaces/users";

export const updateUserService = async (
  body: IUserUpdate,
  user_id: string
): Promise<IUserResponse> => {
  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ id: user_id });

  const updateUser = userRepo.create({
    ...user,
    ...body,
  });

  await userRepo.save(updateUser);

  return updateUser;
};
