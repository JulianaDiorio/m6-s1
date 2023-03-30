import { IRegister } from "./auth";

export interface IUserContext {
  loginUser: (dataUser: IRegister) => Promise<void>;
  submitRegister: (data: IRegister) => void;
  openModal: () => void;
  sucess: (text: string) => void;
  negative: (text: string) => void;
  modal: boolean;
  update: boolean;
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}
