import React, { useCallback } from "react";
import NavigationBar from "../../modules/components/navigation-bar/NavigationBar";
import AppFooter from "../../modules/components/footer/AppFooter";
import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import withRoot from "../../modules/withRoot";
import AuthService from "../../services/auth";

type Props = {};

const ResetPassword = (props: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [passwordResetSuccess, setPasswordResetSuccess] =
    React.useState<boolean>(false);
  const [data, setData] = React.useState<{
    email: string;
    password: string;
    token: string;
  }>({
    email: localStorage.getItem("email") ?? "",
    password: "",
    token: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log(data);

    event.preventDefault();
    const response = await AuthService.resetPassword(data);
    console.log("response", response);
    if (response.user) {
      setPasswordResetSuccess(true);
      setTimeout(() => {
        // navigate after 3 seconds
        navigate("/login");
      }, 3000);
      console.log(response);
    } else {
      console.log(response);
    }
  };

  return (
    <React.Fragment>
      <NavigationBar />
      <Box sx={{ display: "flex" }}>
        <Container maxWidth="sm">
          <Box sx={{ mt: 7, mb: 12 }}>
            <Paper sx={{ py: { xs: 4, md: 8 }, px: { xs: 3, md: 6 } }}>
              <React.Fragment>
                <Typography variant="h3" gutterBottom align="center">
                  {t("reset-password-title")}
                </Typography>
              </React.Fragment>
              {passwordResetSuccess && passwordResetSuccess ? (
                <Alert severity="success" variant="filled" sx={{ m: 2 }}>
                  Password Reset Successful
                </Alert>
              ) : (
                <></>
              )}
              <form onSubmit={handleSendEmail}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1" gutterBottom>
                    {t("email-placeholder")}
                  </Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <TextField
                    label={t("email-placeholder")}
                    variant="outlined"
                    fullWidth
                    name="email"
                    type="email"
                    id="email"
                    autoComplete="email"
                    value={data.email}
                    autoFocus
                    disabled
                  />
                </Box>
                {/* Enter Password */}
                <Box sx={{ mb: 2 }}>
                  <TextField
                    label={t("password-placeholder")}
                    variant="outlined"
                    fullWidth
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="password"
                    value={data.password}
                    onChange={handleChange}
                    autoFocus
                    required
                  />
                </Box>
                {/* Enter OTP */}
                <Box sx={{ mb: 2 }}>
                  <TextField
                    label={t("otp-placeholder")}
                    variant="outlined"
                    fullWidth
                    name="token"
                    type="text"
                    id="token"
                    autoComplete="otp"
                    autoFocus
                    value={data.token}
                    onChange={handleChange}
                    required
                  />
                </Box>
                <Box sx={{ mb: 2 }}>
                  {/* <button type="submit" className="btn btn-primary"></button> */}
                  <Button
                    size="large"
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    {t("reset-password-title")}
                  </Button>
                </Box>
              </form>
            </Paper>
          </Box>
        </Container>
      </Box>
      <AppFooter />
    </React.Fragment>
  );
};

export default withRoot(ResetPassword);
