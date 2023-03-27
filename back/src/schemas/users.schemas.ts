import { IUserRequest, IUserCreate } from "./../interfaces/users/index";
import * as yup from "yup";

export const userSchema: yup.SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  phone: yup.string().required(),
  password: yup.string().required(),
  // isAdm: yup.boolean().notRequired(),
});

export const userWithoutPasswordSchema: yup.SchemaOf<IUserCreate> = yup
  .object()
  .shape({
    id: yup.string().notRequired(),
    name: yup.string().required(),
    email: yup.string().required(),
    phone: yup.string().required(),
    // isAdm: yup.boolean().notRequired(),
    isActive: yup.boolean().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
  });
export const allUsersWithoutPassword = yup.array(userWithoutPasswordSchema);
