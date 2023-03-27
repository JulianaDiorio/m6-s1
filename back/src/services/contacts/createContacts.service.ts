import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";
import { IContactsRequest, IContactsReturn } from "../../interfaces/contacts";

export const createContactService = async (
  contactData: IContactsRequest,
  token
): Promise<IContactsReturn> => {
  const { name } = contactData;
  const contactRepo = AppDataSource.getRepository(Contacts);
  const nameContact = await contactRepo.findOneBy({ name: name });
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ id: token });
  if (nameContact) {
    throw new AppError("Contact as already registered", 409);
  }

  const contact = contactRepo.create({ ...contactData, user: user });

  await contactRepo.save(contact);
  return contact;
};
