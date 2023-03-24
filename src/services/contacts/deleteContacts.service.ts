import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { AppError } from "../../errors/appErrors";

export const deleteContactService = async (contact_id: string) => {
  const contactsRepo = AppDataSource.getRepository(Contacts);
  const contact = await contactsRepo.findOneBy({ id: contact_id });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  await contactsRepo.save(contact);
  return {};
};
