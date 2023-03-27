import { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContacts.service";
import { listContactsService } from "../services/contacts/listContacts.service";
import { deleteContactService } from "../services/contacts/deleteContacts.service";
import { updateContactService } from "../services/contacts/updateContacts.service";
import { retrieveEspecificContactService } from "../services/contacts/retrieveEspecificContact.service";
import { IContactsUpdate } from "../interfaces/contacts/index";

export const createContactController = async (req: Request, res: Response) => {
  const newContact = await createContactService(req.body, req.user.id);
  return res.status(201).json(newContact);
};

export const listContactsController = async (req: Request, res: Response) => {
  const contacts = await listContactsService();
  return res.status(200).json(contacts);
};

export const retrieveEspecificContactController = async (
  req: Request,
  res: Response
) => {
  const contact = await retrieveEspecificContactService(req.params.id);
  return res.status(200).json(contact);
};

export const updateContactController = async (req: Request, res: Response) => {
  const contactData: IContactsUpdate = req.body;
  const data = await updateContactService(contactData, req.params.id);
  return res.status(200).json(data);
};

export const deleteContactController = async (req: Request, res: Response) => {
  const id = await deleteContactService(req.params.id);
  return res.status(204).json({});
};
