import React, { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useNavigate } from 'react-router-dom';

import Listing from "../models/Listing";

type Props = {
  listings: Listing[];
};

const GoogleMapComponent: React.FC<Props> = (props: Props) => {
  
  const navigate = useNavigate();

    const handleMarkerClick = (listing: Listing) => {
      navigate(`/listing-detail/${listing.address}`, { state: { listing } });
      
    };
  const position = { lat: 42.3399, lng: -71.0899 };

  return (
    <APIProvider apiKey="AIzaSyCpisvDv5LcVlhkdCshXEw00sVvoagcLvY">
      <div style={{ height: "100vh", width: "100%" }}>
        <Map zoom={9} center={position} mapId="ID53ea27a06bf54a21">
          {props.listings.map((listing) => (
            <AdvancedMarker
              key={listing._id}
              position={{ lat: Number(listing.location.latitude), lng: Number( listing.location.longitude) }}
              onClick={() => handleMarkerClick(listing)}
            >
              <Pin background="grey" borderColor="green" glyphColor="purple" />
            </AdvancedMarker>
          ))}

       
        </Map>
      </div>
    </APIProvider>
  );
};

export default GoogleMapComponent;
