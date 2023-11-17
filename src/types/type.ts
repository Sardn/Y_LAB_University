export interface IDataUser {
  email: string;
  password: string;
}

export interface IDataUserResponse {
  email: string | undefined;
  password: string | undefined;
  createdAt: string | undefined;
  updatedAt: string | undefined;
  __v?: number | undefined;
  _id?: string | undefined;
  message: string | undefined;
}
