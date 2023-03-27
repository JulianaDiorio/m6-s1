import dataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";
import { IUserRequest } from "../../interfaces/users";

export const retrieveEspecificUserService = async (
  idUser: string
): Promise<IUserRequest> => {
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

  return user;
};
