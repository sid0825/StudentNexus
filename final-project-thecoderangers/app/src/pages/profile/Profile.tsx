import React from "react";
import NavigationBar from "../../modules/components/navigation-bar/NavigationBar";
import AppFooter from "../../modules/components/footer/AppFooter";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import UserProfile from "./UserProfile";
import UserProfileDetails from "./UserProfileDetails";
import withRoot from "../../modules/withRoot";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <NavigationBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <div>
              <Typography variant="h4">{t('My Profile')}</Typography>
            </div>
            <div>
              <Grid container spacing={3} sx={{ p: 2 }}>
                <Grid item xs={12} md={5} lg={4} sx={{ p: 2 }}>
                  <UserProfile />
                </Grid>
                <Grid item xs={12} md={7} lg={8} sx={{ p: 2 }}>
                  <UserProfileDetails />
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
      <AppFooter />
    </React.Fragment>
  );
};

export default withRoot(Profile);
