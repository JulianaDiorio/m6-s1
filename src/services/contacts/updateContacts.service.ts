import {
  IContactsUpdate,
  IContactsReturn,
} from "./../../interfaces/contacts/index";
import dataSource from "../../data-source";
import { AppError } from "../../errors/appErrors";
import { Contacts } from "../../entities/contacts.entity";

export const updateContactService = async (
  contactData: IContactsUpdate,
  contactId: string
): Promise<IContactsReturn> => {
  const contactRepo = dataSource.getRepository(Contacts);
  const contact = await contactRepo.findOne({
    where: { id: contactId },
    relations: { user: true },
  });

  if (!contact) {
    throw new AppError("Contact doesnt exists", 400);
  }

  const updateContact = contactRepo.create({
    ...contact,
    ...contactData,
  });

  await contactRepo.save(updateContact);

  return updateContact;
};
