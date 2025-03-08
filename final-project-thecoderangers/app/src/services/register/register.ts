import {
  IRegisterData,
  // IRegisterResponse,
  IRegisterResponseShort,
} from "../../types/register";
import HttpClient from "../http-client/http-client";

export default class RegisterHttpClient {
  public static async registerresponse(
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
}
