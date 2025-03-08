import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Listing from "../../models/Listing";
import { loadStripe } from '@stripe/stripe-js';
import Overview from "./ListingDetail/Overview";
import Data from "./ListingDetail/Data";
import Location from "./ListingDetail/Location";
import Spots from "./ListingDetail/Spotsavailable";
import Preferences from "./ListingDetail/Amenitiesandpreferences";
import {
    Container,
    Paper,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Button,
} from "@mui/material";

import "./ListingPage.css";
import NavigationBar from "../../modules/components/navigation-bar/NavigationBar";
import AppFooter from "../../modules/components/footer/AppFooter";
import GoogleMapComponent from "../../Components/maps";

interface ListingDetailProps {
    listings: Listing[];
}



const ListingPage: React.FC<ListingDetailProps> = ({ listings }) => {
    const { listingAddress } = useParams<{ listingAddress: string }>();
    const [listing, setListing] = useState<Listing | null>(null);

    useEffect(() => {
        if (listingAddress) {
            const foundListing = listings.find(
                (listing) => listing.address === listingAddress
            );
            setListing(foundListing || null);
        }
    }, [listingAddress, listings]);

    if (!listing) {
        return <Typography variant="h6" color="error">Listing not found</Typography>;
    }

    const handleBookNow = () => {
        // Replace this with your actual booking logic
        alert("Booking now!");
        makePayment();
    };

    const makePayment = async () => {
        const stripePromise = loadStripe("pk_test_51QTXcXJ5Yt24zL6zFnbWaf3HGBreYwsQsgDtjQLJkduDfl6C3moFQwftytxO8UkTuVtcWiT8FP0rzrNunuLOs8DT00YkcvoMYi");
        const stripe = await stripePromise;
        const body = {
            listing: {
                address: listing.address,
                price: listing.price
            }
        };
        const headers = {
            "Content-Type": "application/json"
        };
        const apiURL = process.env.API_BASEURL || "http://localhost:3001";
        const response = await fetch(`${apiURL}/checkout`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        });

        const session = await response.json();

        if (session.id) {
            // Redirect to the Stripe Checkout page
            const result = await stripe?.redirectToCheckout({
                sessionId: session.id
            });

            if (result && result.error) {
                console.error("Stripe Checkout Error:", result.error.message);
                alert(`Error: ${result.error.message}`);
            }

        }

    }

    return (
        <Container maxWidth={"lg"}>
            <NavigationBar />
            <Paper elevation={3} className="listing-paper">
                {/* Property Address */}
                <Typography variant="h4" align="center" gutterBottom>
                    {listing.address}
                </Typography>

                {/* Property Photos */}
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} >
                        <Card>
                            <CardMedia
                                component="img"
                                height="400"
                                image={listing.imageUrl[0]}
                                alt={listing.address}
                            />
                        </Card>
                       
                        <Card sx={{mt: 2}}>
                            <Box
                                mt={2}
                                display="flex"
                                justifyContent="start"
                                alignItems="start"
                                alignContent="start"
                                padding={2}
                            >
                                <Preferences/>
                            </Box>
                        </Card>
                    </Grid>
                    {/* Other Descriptions */}
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    {listing.address}
                                </Typography>
                                {/* Other details (beds, baths, sqft, price, etc.) */}
                                {/* ... */}
                                <Typography variant="body1">
                                    Beds: {listing.beds} | Baths: {listing.baths}
                                </Typography>
                                <Typography variant="body1">
                                    Square Footage: {listing.sqft} Sqft
                                </Typography>
                                {/* ... */}

                                <Box mt={2}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleBookNow}
                                    >
                                        Book Now
                                    </Button>
                                </Box>
                            </CardContent>
                            <Card sx={{ maxHeight: 200, maxWidth: 360, mt: 5 }}>
                                <GoogleMapComponent listings={listings} />

                            </Card>
                        </Card>
                        
                    </Grid>
                </Grid>

                {/* Additional Details (Overview, Data, Location, Spots, Preferences) */}
                

                

                {/* Amenities Section */}
            
            </Paper>
            <AppFooter />
        </Container>
    );
};

export default ListingPage;
