import { Request, Response, NextFunction } from 'express'
import AppDataSource from '../data-source';
import { User } from '../entities/user.entity';
import { AppError } from '../errors/appErrors';

export const authIdMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userAdm = AppDataSource.getRepository(User);

    const admin = await userAdm.findOneBy({id:req.params.id})

    if (!admin) {
      throw new AppError("Invalid ID", 404)
    }
  
    return next();
  };