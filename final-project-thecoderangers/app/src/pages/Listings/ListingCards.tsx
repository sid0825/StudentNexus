import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import Listing from '../../models/Listing';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { getDistance } from 'geolib'; // Geolocation library to calculate distance

interface ListingCardProps {
  listings: Listing[];
}

const ListingCard: React.FC<ListingCardProps> = (props: ListingCardProps) => {
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [distances, setDistances] = useState<{ [key: string]: number }>({});
  const navigate = useNavigate();

  // Fetch the user's location on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting geolocation: ", error);
        }
      );
    }
  }, []);

  // Calculate distances when user location is available
  useEffect(() => {
    if (userLocation && props.listings.length > 0) {
      const newDistances: { [key: string]: number } = {};

      props.listings.forEach((listing) => {
        const distance = getDistance(
          { latitude: userLocation.latitude, longitude: userLocation.longitude },
          { latitude: listing.location.latitude, longitude: listing.location.longitude }
        );
        newDistances[listing.address] = distance / 1609.34; // Convert meters to miles
      });

      setDistances(newDistances);
    }
  }, [userLocation, props.listings]);

  const handleCardClick = (listing: Listing) => {
    navigate(`/listing-detail/${listing.address}`, { state: { listing } });
  };

  return (
    <Grid container spacing={2}>
      {props.listings.map((listing, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Card
            sx={{
              maxWidth: 280,
              Height: 350,
              cursor: 'pointer', // Make the cursor a pointer
              transition: 'transform 0.3s ease-in-out', // Smooth scaling transition
              '&:hover': {
                transform: 'scale(1.05)', // Pop effect (scale up the card)
              },
            }}
            onClick={() => handleCardClick(listing)}
          >
            <CardMedia
              component="img"
              height="140"
              image={listing.imageUrl[0]}
              alt={listing.address}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {listing.address}
              </Typography>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOnIcon sx={{ mr: 0.5 }} />
                  {userLocation && distances[listing.address] !== undefined
                    ? `${distances[listing.address].toFixed(2)} miles`
                    : 'Loading...'}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                  <HotelIcon sx={{ mr: 0.5 }} /> {listing.beds} Beds
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                  <BathtubIcon sx={{ mr: 0.5 }} /> {listing.baths} Baths
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                  <SquareFootIcon sx={{ mr: 0.5 }} /> {listing.sqft} Sqft
                </Typography>
              </Box>
              <Typography variant="h6" color="success.main" fontWeight="bold" mt={1}>
                Rent ${listing.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ListingCard;
