export interface IUserRequest {
  name: string;
  email: string;
  phone: string;
  password: string;
  isAdm: boolean;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  isAdm: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserCreate {
  id: string;
  name: string;
  email: string;
  phone: string;
  isActive?: boolean;
  isAdm: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
}

export interface IUserResponse {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
