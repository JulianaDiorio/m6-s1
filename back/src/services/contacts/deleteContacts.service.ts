import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { AppError } from "../../errors/appErrors";
import { IContactsRequest } from "../../interfaces/contacts";

export const deleteContactService = async (contact_id: string) => {
  const contactsRepo = AppDataSource.getRepository(Contacts);
  const contact: IContactsRequest = await contactsRepo.findOne({
    where: { id: contact_id },
    relations: { user: true },
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  await contactsRepo
    .createQueryBuilder()
    .delete()
    .where("id = :id", { id: contact_id })
    .execute();

  return {};
};
