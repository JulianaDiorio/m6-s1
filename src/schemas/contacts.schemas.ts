import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IContactsRequest,
  IContactsReturn,
} from "../interfaces/contacts/index";

export const contactsSchemaReq: SchemaOf<IContactsRequest> = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().required(),
    phone: yup.string().required(),
  });

export const contactsSchema: SchemaOf<IContactsReturn> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  phone: yup.string().required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
});

export const listContactsSchemaArray: SchemaOf<IContactsRequest[]> =
  yup.array(contactsSchema);
