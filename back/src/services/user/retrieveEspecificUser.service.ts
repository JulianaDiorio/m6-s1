import dataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";
import {
  IUserRequest,
  IUserResponse,
  IUserUpdate,
} from "../../interfaces/users";

export const retrieveEspecificUserService = async (
  body: IUserUpdate,
  idUser: string
): Promise<IUserResponse> => {
  const userRepo = dataSource.getRepository(User);
  const user = await userRepo.findOne({
    where: { id: idUser },
    relations: {
      contacts: true,
    },
  });

  if (!user) {
    throw new AppError("User not found", 400);
  }

  const updateUser = await userRepo.save({
    ...user,
    ...body,
  });

  return updateUser;
};
