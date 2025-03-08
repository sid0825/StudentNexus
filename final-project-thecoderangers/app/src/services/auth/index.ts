import { ILoginData, ILoginResponse } from "../../types/login";
import { IRegisterData, IRegisterResponseShort } from "../../types/register";
import HttpClient from "../http-client/http-client";

export default class AuthService {
  /**
   * login
   * @returns {Promise<ILoginResponse>}
   */
  public static async login(credentials: ILoginData): Promise<ILoginResponse> {
    // login API
    const {
      data: { user, accessToken },
    } = await HttpClient.post("/auth/login", credentials);
    const response: ILoginResponse = {
      user,
      accessToken,
    };
    return response;
  }

  /**
   * register
   * @returns {Promise<IRegisterResponseShort>}
   */
  public static async register(
    data: IRegisterData
  ): Promise<IRegisterResponseShort> {
    // register API
    const {
      data: { firstName, lastName, email, password, _id },
    } = await HttpClient.post("/auth/register", data);
    const response: IRegisterResponseShort = {
      firstName,
      lastName,
      email,
      password,
      _id,
    };

    return response;
  }
  /**
   * forgotPassword
   * @returns {Promise<IRegisterResponseShort>}
   */
  public static async forgotPassword(email: string): Promise<{}> {
    // register API
    const {
      data: { message },
    } = await HttpClient.post("/auth/forgotpassword", { email });
    const response: { message: string } = {
      message,
    };

    return response;
  }
  /**
   * resetpassword
   * @returns {Promise<IRegisterResponseShort>}
   */
  public static async resetPassword(data: {
    email: string;
    password: string;
    token: string;
  }): Promise<{ user: object }> {
    // register API
    const response: any = await HttpClient.post("/auth/resetpassword", data);

    return response.data;
  }
}
