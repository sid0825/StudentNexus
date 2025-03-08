import { IUser, IUserResponse } from "../../types/user";
import HttpClient from "../http-client/http-client";

type UsersResponse = { users: IUser[] };

export default class UserService {
  /**
   * getUsers
   * @returns {Promise<UserResponse>}
   */
  public static async getAllUsers(): Promise<UsersResponse> {
    const response = await HttpClient.get("/user");
    const data = response.data;
    return data;
  }

  /**
   * updateUser
   * @returns {Promise<UserResponse>}
   */
  public static async updateUser(user: IUser): Promise<IUserResponse> {
    const response = await HttpClient.put(`/user/${user._id}`, user);
    const data = response.data;
    return data;
  }

  /**
   * getUserbyId
   * @returns {Promise<UserResponse>}
   */
  public static async getUserbyId(id: string): Promise<IUserResponse> {
    const response = await HttpClient.get(`/user/${id}`);
    const data = response.data;
    return data;
  }
}
