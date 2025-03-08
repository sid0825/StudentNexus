import React, { useState } from "react";
import NavigationBar from "../../modules/components/navigation-bar/NavigationBar";
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import withRoot from "../../modules/withRoot";
import { Field, Form } from "react-final-form";
import { email, required } from "../../modules/form/validation";
import RFTextField from "../../modules/form/RFFTextField";
import { useTranslation } from "react-i18next";
import RegisterHttpClient from "../../services/register/register";
import AppFooter from "../../modules/components/footer/AppFooter";

const Register = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [sent, setSent] = useState<boolean>(false);
  const [registerSuccess, setRegisterSuccess] = useState<boolean | null>(null);

  const validate = (values: { [index: string]: string }) => {
    const errors = required(
      ["firstName", "lastName", "email", "password"],
      values
    );

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  };

  const handleSubmit = async (values: { [index: string]: string }) => {
    console.log(values);
    const registerData = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    };
    try {
      const response = await RegisterHttpClient.registerresponse(registerData);
      console.log(response);
      setRegisterSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.log(error);
      setRegisterSuccess(false);
    }
    setSent(false);
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
                  {t("register-title")}
                </Typography>
                <Typography variant="body2" align="center">
                  <Link to="/login">{t("login-clause")}</Link>
                </Typography>
              </React.Fragment>
              {registerSuccess === true && (
                <Alert severity="success" variant="filled" sx={{ m: 2 }}>
                  User Registered Successfully
                </Alert>
              )}
              {registerSuccess === false && (
                <Alert severity="error" variant="filled" sx={{ m: 2 }}>
                  User Already Registered
                </Alert>
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
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Field
                          autoFocus
                          component={RFTextField}
                          disabled={submitting || sent}
                          autoComplete="given-name"
                          fullWidth
                          label={t("first-name-placeholder")}
                          name="firstName"
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={RFTextField}
                          disabled={submitting || sent}
                          autoComplete="family-name"
                          fullWidth
                          label={t("last-name-placeholder")}
                          name="lastName"
                          required
                        />
                      </Grid>
                    </Grid>
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
                    <Button
                      size="large"
                      disabled={submitting || sent}
                      fullWidth
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      {t("register-button")}
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

export default withRoot(Register);
