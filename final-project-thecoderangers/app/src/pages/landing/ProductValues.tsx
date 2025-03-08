import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HomeIcon from '@mui/icons-material/Home';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { useTranslation } from 'react-i18next';

// Assuming you are using the default theme
const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
  py: 8, // Added padding on the y-axis for spacing
};

function ProductValues() {
  const { t } = useTranslation();
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
        
        {/* Title */}
        <Typography variant="h4" component="h2" sx={{ mb: 5 }}>
          {t('Be a part of the community!')}
        </Typography>

        {/* Grid Container */}
        <Grid container spacing={5} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={4}>
            <Paper sx={{...item, textAlign: 'center'}}>
              <EventAvailableIcon sx={{ fontSize: 55 }} />
              <Typography variant="h6" sx={{ my: 5 }}>
                24 / 7
              </Typography>
              <Typography variant="subtitle1">
                {t('Daily listing updates')}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{...item, textAlign: 'center'}}>
              <HomeIcon sx={{ fontSize: 55 }} />
              <Typography variant="h6" sx={{ my: 5 }}>
                250+
              </Typography>
              <Typography variant="subtitle1">
                {t('Apartments Listed')}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{...item, textAlign: 'center'}}>
              <EmojiPeopleIcon sx={{ fontSize: 55 }} />
              <Typography variant="h6" sx={{ my: 5 }}>
                1000+
              </Typography>
              <Typography variant="subtitle1">
                {t('Community Members')}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
