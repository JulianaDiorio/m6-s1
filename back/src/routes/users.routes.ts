import { Router } from "express";
import {
  createUserController,
  listUserController,
  deleteUserController,
  updateUserController,
  retrieveEspecificUserController,
} from "../controllers/user.controller";
import { authTokenMiddleware } from "../middleware/authToken.middleware";
// import { isAdmMiddleware } from "../middleware/isAdm.middleware";
import { ensureDataValidMiddleware } from "../middleware/ensureDataValid.middleware";
import { userSchema } from "../schemas/users.schemas";
import { authIdMiddleware } from "../middleware/authId.middleware";

export const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataValidMiddleware(userSchema),
  createUserController
);

userRoutes.get(
  "",
  authTokenMiddleware,
  // isAdmMiddleware,
  listUserController
);

userRoutes.get("/:id", authTokenMiddleware, retrieveEspecificUserController);

userRoutes.patch(
  "/:id",
  authTokenMiddleware,
  authIdMiddleware,
  // isAdmMiddleware,
  updateUserController
);

userRoutes.delete(
  "/:id",
  authTokenMiddleware,
  // isAdmMiddleware,
  authIdMiddleware,
  deleteUserController
);
