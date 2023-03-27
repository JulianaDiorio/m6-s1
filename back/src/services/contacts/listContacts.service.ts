import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";

export const listContactsService = async (): Promise<Contacts[]> => {
  const contactsRepo = AppDataSource.getRepository(Contacts);

  const contacts = await contactsRepo.find();

  return contacts;
};
