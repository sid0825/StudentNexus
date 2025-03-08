import * as React from 'react';
import { Box, Card, CardContent, Button, Snackbar } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useTranslation } from "react-i18next"; // Importing useTranslation

function ProductCTA() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setError(false); // Reset error state when user types
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //Validation for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(true);
      return;
    }

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { t } = useTranslation(); // Using useTranslation hook

  return (
    <Container component="section" sx={{ mt: 10, display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: '#a5d9ff',
              py: 8,
              px: 3,
            }}
          >
            <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
              <Typography variant="h2" component="h2" gutterBottom>
                {t('Receive Notifications on Availability')}
              </Typography>
              <Typography variant="h5">
                {t('For regular notifications of House Availability, Please Sign up using your email Address')}
              </Typography>
              <TextField
                placeholder="Your email"
                variant="standard"
                value={email}
                onChange={handleEmailChange}
                error={error} 
                helperText={error ? t('Please enter a valid email address') : ''} 
                sx={{ 
                  width: '100%', 
                  mt: 3, 
                  mb: 2, 
                  '& .MuiOutlinedInput-notchedOutline': { border: 'none' } 
                }}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: '100%' }}
              >
                {t('Keep me updated')}
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              background: 'url(/static/themes/onepirate/productCTAImageDots.png)',
            }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750"
            alt="call to action"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        onClose={handleClose}
        message={t("We will send you our best offers, once a week.")}
      />
    </Container>
  );
}

export default ProductCTA;
