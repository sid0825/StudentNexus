import {
  Container,
  Typography,
  Button,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next"; // Importing useTranslation

// Customized Button using MUI's styled utility
const StyledButton = styled(Button)({
  margin: "0 8px",
  // Add your custom styles here
});

const RentalSection = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation(); // Using useTranslation hook

  return (
    <Container
      maxWidth="lg"
      sx={{ textAlign: "center", padding: isMobile ? 2 : 4 }}
    >
      {/* <Typography variant="h3" component="h1" gutterBottom>
        Accomodatiom Made Simple & Quick.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            src="./house-searching-animate.svg"
            alt="City Illustration"
            sx={{ width: "100%", maxWidth: "400px" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mt: 12 }}>
          <Typography variant="subtitle1" gutterBottom>
            Simplify the house-hunting experience with Student Nexus. Your one-stop
            place for finding roommates and off-campus apartments in Boston.
          </Typography>
          <Box sx={{ my: 4 }}>
            <StyledButton variant="contained" color="primary">
              Find Home
            </StyledButton>
            <StyledButton variant="contained" color="secondary">
              Find Roommates
            </StyledButton>
          </Box>
        </Grid>
      </Grid> */}
      <Typography variant="h3" component="h1" gutterBottom>
        {t('Accomodation Made Quick & Simple.')}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {t('Simplify the house-hunting experience with Student Nexus. Your one-stop place for finding roommates and off-campus apartments in Boston.')}
      </Typography>
      <Box sx={{ my: 4 }}> 
        {/* http://localhost:3000/find-houses */}
        <StyledButton variant="contained" color="primary" href= '/find-houses'>
          {t("Find my Home")} {/* Translated button text */}
        </StyledButton>
        <StyledButton variant="contained" color="secondary" href= '/Find-Roommates'>
          {t("Find Roommates")} {/* Translated button text */}
        </StyledButton>
      </Box>
      {/* Replace 'illustration.svg' with your actual illustration file */}
      <Box
        component="img"
        src="./house-searching-animate.svg"
        alt="City Illustration"
        sx={{ width: "100%", maxWidth: "600px" }}
      />
    </Container>
  );
};

export default RentalSection;
