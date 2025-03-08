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

const ForgetPassword = (props: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [email, setEmail] = React.useState<string>("");
  const [emailSent, setEmailSent] = React.useState<boolean>(false); // State to hold email sent status
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    []
  );
  const handleSendEmail = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const response: { message?: string } = await AuthService.forgotPassword(
        email
      );
      if (response.message) {
        console.log(response);
        setEmailSent(true);
        // demonstrate local storage usage
        localStorage.setItem("email", email);
        setTimeout(() => {
          navigate("/reset-password");
        }, 3000);
      } else {
        console.log(response);
      }
    },
    [email, navigate]
  );

  return (
    <React.Fragment>
      <NavigationBar />
      <Box sx={{ display: "flex" }}>
        <Container maxWidth="sm">
          <Box sx={{ mt: 7, mb: 12 }}>
            <Paper sx={{ py: { xs: 4, md: 8 }, px: { xs: 3, md: 6 } }}>
              <React.Fragment>
                <Typography variant="h3" gutterBottom align="center">
                  {t("forget-password-title")}
                </Typography>
              </React.Fragment>
              {emailSent && emailSent ? (
                <Alert severity="success" variant="filled" sx={{ m: 2 }}>
                  Email Sent
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
                    value={email}
                    onChange={handleChange}
                    autoFocus
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
                    {t("forget-password-button")}
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

export default withRoot(ForgetPassword);
