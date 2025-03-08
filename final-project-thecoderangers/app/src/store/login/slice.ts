import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ILoginData, ILoginPageState, ILoginResponse } from "../../types/login";
import ErrorHandler from "../error-handler";
import LoginHttpClient from "../../services/login/login";
// import  { updateUser } from "../user/slice";
import UserService from "../../services/user";
import { IUser } from "../../types/user";

const initialState: ILoginPageState = {
  data: undefined,
  loading: false,
  error: undefined,
};
const errorHandler = new ErrorHandler();

export const login = createAsyncThunk(
  "login/user",
  async (credentials: ILoginData) => {
    console.log("credentials", credentials);
    try {
      const response = await LoginHttpClient.loginresponse(credentials);
      console.log("response", response);
      if (!response.user && !response.accessToken) {
        throw new Error("Incorrect Credentials");
      }
      return response;
    } catch (_error: any) {
      const errorMessage = errorHandler.handler(_error);
      throw new Error(errorMessage);
    }
  }
);
export const updateUser = createAsyncThunk(
  "user/update",
  async (user: IUser) => {
    try {
      const response = await UserService.updateUser(user);
      if (!response) {
        throw new Error("Invalid User");
      }
      return response;
    } catch (_error: any) {
      const errorMessage = errorHandler.handler(_error);
      throw new Error(errorMessage);
    }
  }
);

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.loading = false;
      state.data = undefined;
      state.error = undefined;
      localStorage.clear();
    },
  },
  extraReducers(builder): void {
    builder.addCase(login.pending, (state) => {
      console.log("pending");
      state.loading = true;
      state.data = undefined;
      state.error = undefined;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log("fulfilled");
      state.loading = false;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("accessToken", action.payload.accessToken);
      state.data = action.payload as ILoginResponse;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      console.log("fulfilled");
      state.loading = false;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      if (state.data) {
        state.data.user = action.payload.user;
      }
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log("rejected");
      state.loading = false;
      state.error = action.error.message as string;
    });
  },
});
export const { logoutUser } = slice.actions;
export default slice.reducer;
