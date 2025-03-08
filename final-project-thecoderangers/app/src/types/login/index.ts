import { IUser } from "../user";

export interface ILoginData {
  email: string;
  password: string;
}

export interface ILoginResponse {
  user: IUser;
  accessToken: string;
}

export interface ILoginPageState {
  data: ILoginResponse | undefined;
  loading: boolean;
  error?: string;
}
