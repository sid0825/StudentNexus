import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import NavigationBar from "../../modules/components/navigation-bar/NavigationBar";
import RFTextField from "../../modules/form/RFFTextField";
import { email, required } from "../../modules/form/validation";
import withRoot from "../../modules/withRoot";
import { useTranslation } from "react-i18next";
import AppFooter from "../../modules/components/footer/AppFooter";
import { ILoginData, ILoginPageState } from "../../types/login";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { login } from "../../store/login/slice";
import { RootState } from "../../store";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { t } = useTranslation();
  const dispatch: any = useAppDispatch();
  const navigate = useNavigate();
  const [sent, setSent] = useState(false);
  const loginState: ILoginPageState = useAppSelector(
    (state: RootState) => state.auth
  );
  useEffect(() => {
    if (!loginState.loading && loginState.data && !loginState.error) {
      console.log(loginState.data);
      navigate("/");
    } else if (!loginState.loading && !loginState.data && loginState.error) {
      console.log(loginState.error);
    }
  }, [loginState, navigate]);

  const validate = (values: { [index: string]: string }) => {
    const errors = required(["email", "password"], values);
    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }
    return errors;
  };

  const handleSubmit = async (values: { [index: string]: string }) => {
    const loginData: ILoginData = {
      email: values.email,
      password: values.password,
    };
    console.log(loginData);
    dispatch(login(loginData));
    setSent(false);
  };

  // const handleSubmit = async (values: { [index: string]: string }) => {
  //   const loginData: ILoginData = {
  //     email: values.email,
  //     password: values.password,
  //   };
  //   try {
  //     const response = await LoginHttpClient.loginresponse(loginData);
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setSent(false);
  // };

  return (
    <React.Fragment>
      <NavigationBar />
      <Box sx={{ display: "flex" }}>
        <Container maxWidth="sm">
          <Box sx={{ mt: 7, mb: 12 }}>
            <Paper sx={{ py: { xs: 4, md: 8 }, px: { xs: 3, md: 6 } }}>
              <React.Fragment>
                <Typography variant="h3" gutterBottom align="center">
                  {t("login-title")}
                </Typography>
              </React.Fragment>
              {!loginState.loading && !loginState.data && loginState.error ? (
                <Alert severity="error" variant="filled" sx={{ m: 2 }}>
                  Invalid Credentials
                </Alert>
              ) : (
                <></>
              )}
              <Form
                onSubmit={handleSubmit}
                subscription={{ submitting: true }}
                validate={validate}
              >
                {({ handleSubmit: handleSubmit2, submitting }) => (
                  <Box
                    component="form"
                    onSubmit={handleSubmit2}
                    noValidate
                    sx={{ mt: 6 }}
                  >
                    <Grid container spacing={2}></Grid>
                    <Field
                      autoComplete="email"
                      component={RFTextField}
                      disabled={submitting || sent}
                      fullWidth
                      label={t("email-placeholder")}
                      margin="normal"
                      name="email"
                      required
                    />
                    <Field
                      fullWidth
                      component={RFTextField}
                      disabled={submitting || sent}
                      required
                      name="password"
                      autoComplete="new-password"
                      label={t("password-placeholder")}
                      type="password"
                      margin="normal"
                    />
                    <Link to="/forget-password">
                      {t("forget-password-title")}?
                    </Link>
                    <Button
                      size="large"
                      disabled={submitting || sent}
                      fullWidth
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      {t("login-button")}
                    </Button>
                  </Box>
                )}
              </Form>
            </Paper>
          </Box>
        </Container>
      </Box>
      <AppFooter />
    </React.Fragment>
  );
};

export default withRoot(Login);
