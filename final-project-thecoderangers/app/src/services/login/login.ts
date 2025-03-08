import { ILoginData, ILoginResponse } from "../../types/login";
import HttpClient from "../http-client/http-client";

export default class LoginHttpClient {
  /**
   * login
   * @returns {Promise<ILoginResponse>}
   */
  public static async loginresponse(
    credentials: ILoginData
  ): Promise<ILoginResponse> {
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
}
