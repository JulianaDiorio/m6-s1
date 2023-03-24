import { authTokenMiddleware } from "./../middleware/authToken.middleware";
import {
  createContactController,
  listContactsController,
  retrieveEspecificContactController,
  updateContactController,
  deleteContactController,
} from "./../controllers/contacts.controller";
import { Router } from "express";
import { isAdmMiddleware } from "../middleware/isAdm.middleware";
import { ensureDataValidMiddleware } from "../middleware/ensureDataValid.middleware";
import { contactsSchemaReq } from "../schemas/contacts.schemas";

export const contactsRoutes = Router();

contactsRoutes.post(
  "",
  ensureDataValidMiddleware(contactsSchemaReq),
  authTokenMiddleware,
  isAdmMiddleware,
  createContactController
);
contactsRoutes.get("", listContactsController);
contactsRoutes.get("/:id", retrieveEspecificContactController);
contactsRoutes.patch(
  "/:id",
  authTokenMiddleware,
  isAdmMiddleware,
  updateContactController
);
contactsRoutes.delete(
  "/:id",
  authTokenMiddleware,
  isAdmMiddleware,
  deleteContactController
);
