import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import React, { useState, useRef, ChangeEvent } from "react";
import { ILoginPageState } from "../../types/login";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store";
import { IUser } from "../../types/user";
import UserService from "../../services/user";

type Props = {};

const UserProfile = (props: Props) => {
  const loginState: ILoginPageState = useAppSelector(
    (state: RootState) => state.auth
  );
  const inputRef = useRef<HTMLInputElement>(null);
  interface FileToBase64Result {
    result: string | ArrayBuffer | null;
  }

  const fileToBase64 = (file: File): Promise<FileToBase64Result> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve({ result: reader.result });
      reader.onerror = (error) => reject(error);
  });

  const handleFileChange = async (event: ChangeEvent) => {
    const file = (event.target as HTMLInputElement).files![0];
    const data = await fileToBase64(file);
    user.photo = data.result as string;
    const updateUser = await UserService.updateUser(user as IUser);
    localStorage.setItem("user", JSON.stringify(updateUser.user));
    window.location.reload();
  };
  const handleClick = () => {
    inputRef.current!.click();
  };
  const [user] = useState({ ...loginState.data?.user });
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Avatar
              // src={user.photo}
              src={localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string).photo : "/assets/avatars/profile.png"}
              sx={{
                height: 80,
                mb: 2,
                width: 80,
              }}
            />
            <Typography gutterBottom variant="h5">
              {user.firstName} {user.lastName}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {user.university?.name}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {user.email}
            </Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardActions>
          <input
            style={{ display: 'none' }}
            ref={inputRef}
            type="file"
            onChange={handleFileChange}
            accept="image/png, image/gif, image/jpeg"
          />


          <Button fullWidth variant="text" onClick={handleClick}>
            Upload picture
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default UserProfile;
