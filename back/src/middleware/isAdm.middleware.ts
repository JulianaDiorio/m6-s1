import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appErrors";

export const isAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let foundUser = req.user;

  if (!foundUser.isAdm) {
    throw new AppError("User is not an administrator", 403);
  }
  return next();
};
