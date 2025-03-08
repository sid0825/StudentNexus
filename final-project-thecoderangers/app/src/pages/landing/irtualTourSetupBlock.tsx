import * as React from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';

export default function VirtualTourSetupBlock() {
  // Define handler function for the "How to Setup Virtual Tour" button
  const handleVirtualTourSetup = () => {
    // Implement or replace with your logic here
    console.log('How to Setup Virtual Tour clicked');
  };

  return (
    <Box sx={{ width: '100%', padding: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        How to Setup Virtual Tour
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Not confident about virtual tours?
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Take help of your college seniors who will tour various apartments in Boston on your behalf and share their feedback with you.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button variant="contained" color="primary" onClick={handleVirtualTourSetup}>
              Learn More
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
