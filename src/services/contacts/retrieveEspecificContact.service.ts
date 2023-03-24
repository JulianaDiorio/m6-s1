import dataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { AppError } from "../../errors/appErrors";
import { IContactsRequest } from "../../interfaces/contacts/index";

export const retrieveEspecificContactService = async (
  idContact: string
): Promise<IContactsRequest> => {
  const contactRepo = dataSource.getRepository(Contacts);
  const contact = await contactRepo.findOne({
    where: { id: idContact },
    relations: {
      user: true,
    },
  });

  if (!contact) {
    throw new AppError("Product not found", 400);
  }

  return contact;
};
