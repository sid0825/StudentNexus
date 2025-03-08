// SearchPage.tsx
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Button from "@mui/material/Button";

import ListingCard from "./ListingCards";
// import ListingCard from "./ListingCards"; // Your existing ListingCard component
import GoogleMapComponent from "../../Components/maps"; // Your existing GoogleMapComponent
import Listings, { listings } from "../../models/Listing"; // Your listings data
import NavigationBar from "../../modules/components/navigation-bar/NavigationBar";
import AppFooter from "../../modules/components/footer/AppFooter";
import { Container } from "@mui/material";

interface FilterDrawerProps {
  updateListings: (filters: {
    maxRent: number;
    categories: string[];
    rooms: number;
    bathrooms: number;
  }) => void;
}
const FilterDrawer: React.FC<FilterDrawerProps> = ({ updateListings }) => {
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [maxRentOpen, setMaxRentOpen] = useState(true);
  const [roomsOpen, setRoomsOpen] = useState(true);
  const [bathroomsOpen, setBathroomsOpen] = useState(true);

  const [maxRentValue, setMaxRentValue] = useState(8000); // Initial value for max rent
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [rooms, setRooms] = useState(1); // Initial value for rooms
  const [bathrooms, setBathrooms] = useState(1); // Initial value for bathrooms

  const toggleCategories = () => {
    setCategoriesOpen(!categoriesOpen);
  };

  const toggleMaxRent = () => {
    setMaxRentOpen(!maxRentOpen);
  };

  const toggleRooms = () => {
    setRoomsOpen(!roomsOpen);
  };

  const toggleBathrooms = () => {
    setBathroomsOpen(!bathroomsOpen);
  };

  const handleMaxRentChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setMaxRentValue(newValue);
    }
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const categoryName = event.target.name;
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedCategories([...selectedCategories, categoryName]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== categoryName)
      );
    }
  };

  const handleRoomsChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setRooms(newValue);
    }
  };

  const handleBathroomsChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setBathrooms(newValue);
    }
  };

  const applyFilters = () => {
    const filters = {
      maxRent: maxRentValue,
      categories: selectedCategories,
      rooms: rooms,
      bathrooms: bathrooms,
    };
    const filtersChanged =
      maxRentValue !== 8000 ||
      selectedCategories.length !== 0 ||
      rooms !== 1 ||
      bathrooms !== 1;

    if (filtersChanged) {
      updateListings(filters);
    }

    updateListings(filters);
  };
  return (
    // <Drawer
    //   variant="permanent"
    //   // anchor="left"
    //   sx={{
    //     width: 240,
    //     flexShrink: 0,
    //     marginTop: 50, // Set margin top to 50
    //     [`& .MuiDrawer-paper`]: {
    //       width: 240,
    //       boxSizing: "border-box",
    //       height: "auto",
    //     }, // Remove full height behavior
    //   }}
    // >
    <Drawer
  variant="permanent"
  anchor="left"
  sx={{
    width: 240,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
      width: 240,
      boxSizing: "border-box",
      position: "sticky",
      top: 70, // Adjust this value to match your AppBar height
      height: "100vh", // Full height of the viewport
      overflowY: "auto", // Enable scrolling within the drawer
    },
  }}
>
  <Box sx={{ overflow: "auto" }}>
    <List>
      <ListItem button onClick={toggleMaxRent}>
        <Typography variant="h6">Maximum Rent</Typography>
        {maxRentOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      {maxRentOpen && (
        <ListItem>
          <Slider
            defaultValue={8000}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={handleMaxRentChange}
            max={10000}
            min={1000}
          />
        </ListItem>
      )}

      <ListItem button onClick={toggleRooms}>
        <Typography variant="h6">Number of Rooms</Typography>
        {roomsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      {roomsOpen && (
        <ListItem>
          <Slider
            value={rooms}
            onChange={handleRoomsChange}
            aria-label="Number of Rooms"
            valueLabelDisplay="auto"
            max={10}
            min={1}
          />
        </ListItem>
      )}
      <ListItem button onClick={toggleBathrooms}>
        <Typography variant="h6">Number of Bathrooms</Typography>
        {bathroomsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      {bathroomsOpen && (
        <ListItem>
          <Slider
            value={bathrooms}
            onChange={handleBathroomsChange}
            aria-label="Number of Bathrooms"
            valueLabelDisplay="auto"
            max={5}
            min={1}
          />
        </ListItem>
      )}
      <ListItem>
        <Button variant="contained" onClick={applyFilters}>
          Apply Filters
        </Button>
      </ListItem>
    </List>
  </Box>
</Drawer>

  );
};

const ListingPage: React.FC = () => {
  const [view, setView] = useState("list");
  const [filteredListings, setFilteredListings] = useState(listings);
  const handleViewChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string
  ) => {
    setView(nextView);
  };

  const updateListings = (filters: { [key: string]: any }) => {
    // Apply filters to the original listings data
    const filteredListing = listings.filter((listing) => {
      if (filters?.maxRent < listing?.price) {
        return false;
      }

      if (filters?.rooms > listing?.beds) {
        return false;
      }
      if (filters?.bathrooms > listing?.baths) {
        return false;
      }
      return true; // Include this listing by default
    });

    // Set the filtered data as the new state
    setFilteredListings(filteredListing);
  };

  return (
    <React.Fragment>
      <NavigationBar />
      <Box sx={{ display: "flex" }}>
        <FilterDrawer updateListings={updateListings} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/*TODO: please change the navbar */}
          {/* <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              StudentNexus
            </Typography>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search apartment"
                inputProps={{ "aria-label": "search apartment" }}
              />
            </Paper>
          </Toolbar>
        </AppBar> */}
          {/* TODO: Please make the nuttons consistent with rest of the design */}
          <Box sx={{ m: 2 }}>
            <Typography variant="h6" component="div">
              {filteredListings.length} apartments found
            </Typography>
            <ToggleButtonGroup
              color="primary"
              value={view}
              exclusive
              onChange={handleViewChange}
            >
              <ToggleButton value="list">List View</ToggleButton>
              <ToggleButton value="map">Map View</ToggleButton>
            </ToggleButtonGroup>
          </Box>

          <Box sx={{ m: 2 }}>
            {view === "list" ? (
              <Box>
                <ListingCard listings={filteredListings} />
              </Box>
            ) : (
              <GoogleMapComponent listings={filteredListings} />
            )}
          </Box>
        </Box>
      </Box>
      <AppFooter />
    </React.Fragment>
  );
};

export default ListingPage;
