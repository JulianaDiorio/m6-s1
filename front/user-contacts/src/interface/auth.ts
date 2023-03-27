export interface IRegister {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirm_password?: string;
}

export interface IAuthResponse {
  data: {
    user: {
      id: string;
    };
    accessToken: string;
  };
}

export interface IDataUser extends IRegister {
  name: string;
  phone: string;
  email: string;
}
