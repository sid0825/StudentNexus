import * as React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, CardActionArea } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ViewListIcon from '@mui/icons-material/ViewList';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HouseIcon from '@mui/icons-material/House';

export default function RentingProcessBlock() {
  const handleFindMyHome = () => {
    // Implement your routing or logic here
    console.log('Find my Home clicked');
  };

  const handleFindRoommates = () => {
    // Implement your routing or logic here
    console.log('Find Roommates clicked');
  };

  return (
    <Box sx={{ width: '100%', padding: 4 }}>
      <Typography variant="h3" textAlign="center" gutterBottom>
        We take care of your entire renting process!
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345, minHeight: 250 }}>
            <CardContent>
              <SearchIcon fontSize="large" />
              <Typography gutterBottom variant="h5" component="div">
                Search
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Looking for apartments in Boston? Search & select from our list of housing options.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345, minHeight: 250 }}>
            <CardContent>
              <ViewListIcon fontSize="large" />
              <Typography gutterBottom variant="h5" component="div">
                View
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Shortlist apartments you are interested in and get all your questions answered by scheduling a live tour of these properties with us!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345, minHeight: 250 }}>
            <CardContent>
              <AssignmentIcon fontSize="large" />
              <Typography gutterBottom variant="h5" component="div">
                Apply
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Fast-track your application process by using our advanced software to apply to different properties, manage your documents, review and sign leases.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345, minHeight: 250 }}>
            <CardContent>
              <HouseIcon fontSize="large" />
              <Typography gutterBottom variant="h5" component="div">
                Move-in
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Use our dashboard to keep a tab on your payments, communication from your landlord/management, and receive your move-in instructions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 2 }}>
        <Button variant="contained" color="primary" onClick={handleFindMyHome} sx={{ width: '560px' }}>
          Find my Home
        </Button>
        <Button variant="contained" color="secondary" onClick={handleFindRoommates} sx={{ width: '560px' }}>
          Find Roommates
        </Button>
      </Box>
    </Box>
  );
}
