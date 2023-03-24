export interface IContactsRequest {
  name: string;
  email: string;
  phone: string;
}

export interface IContactsUpdate {
  name: string;
  email: string;
  phone: string;
}

export interface IContactsReturn {
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}
