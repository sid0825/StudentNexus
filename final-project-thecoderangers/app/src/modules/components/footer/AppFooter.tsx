import React from "react";
import { Box, Typography, Grid, Link, Container, colors } from "@mui/material";
import withRoot from "../../withRoot";
import { useTranslation } from "react-i18next";
import TextField from "../TextField";
import github_icon from "./github-logo-24.png";
import email_icon from "./envelope-solid-24.png";
import { Link as RouterLink } from "react-router-dom";


type Props = {};

function Copyright() {
  return (
    <React.Fragment>
      <Link
        color="inherit"
        href="https://github.com/info-6150-fall-2024/final-project-thecoderangers"
        target="_blank"
      >
        © StudentNexus
      </Link>
      {" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mr: 1,
  "&:hover": {
    bgcolor: "warning.dark",
  },
};

const LANGUAGES = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "zh",
    name: "中文",
  },
  {
    code: "es",
    name: "Español",
  },
];

const AppFooter = (props: Props) => {
  const { i18n } = useTranslation();

  const changeLanguage = (e: string) => {
    i18n.changeLanguage(e);
  };

  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "secondary.light" }}
    >
      <Container sx={{ my: 8, display: "flex", flexDirection: "column" }}>
        <Grid container spacing={5} alignItems="center">
          {/* Left Section - Icons and Copyright */}
          <Grid item xs={12} sm={6} md={4}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: "flex" }}>
                <Box
                  component="a"
                  href="https://github.com/info-6150-fall-2024/final-project-thecoderangers"
                  target="_blank"
                  sx={iconStyle}
                >
                  <img src={github_icon} alt="GitHub" />
                </Box>
                <Box
                  component="a"
                  href="mailto:studentnexus10@gmail.com"
                  sx={iconStyle}
                >
                  <img src={email_icon} alt="Email" />
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>

          {/* Center Section - StudentNexus */}
          <Grid item xs={12} sm={6} md={4} textAlign="center">
            <Typography variant="h6" gutterBottom>
              StudentNexus
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="https://github.com/info-6150-fall-2024/final-project-thecoderangers/blob/main/README.md"
                  target="_blank">
                  <Typography variant="body2">About</Typography>
                </Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
  <Link
    component={RouterLink}
    to="/contact"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Typography variant="body2">Contact Us</Typography>
  </Link>
</Box>

            </Box>
          </Grid>

          {/* Right Section - Language Selector */}
          <Grid item xs={12} sm={6} md={4} textAlign="right">
            <Typography variant="h6" gutterBottom sx={{ mr: 3 }}>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150 }}
              onChange={(e) => changeLanguage(e.target.value)}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
};

export default withRoot(AppFooter);
