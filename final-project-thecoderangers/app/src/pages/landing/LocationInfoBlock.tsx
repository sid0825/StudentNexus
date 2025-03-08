import * as React from 'react';
import { Box, Card, CardContent, Typography, Button, CardActionArea, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function LocationInfoBlock() {
  // Define handler function for the "Street Reviews" button
  const handleStreetReviews = () => {
    // Implement or replace with your routing or logic here
    console.log('Street Reviews clicked');
  };

  return (
    <Box sx={{ width: '100%', padding: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Know More About the Location
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardActionArea>
              <CardContent>
                <LocationOnIcon fontSize="large" />
                <Typography gutterBottom variant="h6" component="div">
                  Location
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Find the best location for your next home.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardActionArea>
              <CardContent>
                <DirectionsIcon fontSize="large" />
                <Typography gutterBottom variant="h6" component="div">
                  Directions
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Get directions to the location with ease.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button variant="contained" color="primary" onClick={handleStreetReviews}>
          Street Reviews
        </Button>
      </Box>
    </Box>
  );
}
