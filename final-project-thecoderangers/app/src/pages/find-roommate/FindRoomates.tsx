import React, { useEffect, useState } from "react";
import NavigationBar from "../../modules/components/navigation-bar/NavigationBar";
import AppFooter from "../../modules/components/footer/AppFooter";
import {
    Autocomplete,
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    MenuItem,
    Paper,
    Radio,
    RadioGroup,
    Select,
    Slider,
    TextField,
    Typography,
} from "@mui/material";
import UserCard from "../../modules/components/user-card/UserCard";
// import UserCard from "../../modules/components/user-card/UserCard";
import withRoot from "../../modules/withRoot";
import { IPreferences } from "../../types/preferences";
import UserService from "../../services/user";
import { IUser } from "../../types/user";
import {
    defaultFilters,
    multiSelectPreferences,
    singleSelectPreferences,
} from "../../constants";

const FindRoomate = () => {
    const [filters, setFilters] = useState<IPreferences>({ ...defaultFilters }); // State to hold filter values

    const [searchResults, setSearchResults] = useState<IUser[]>(); // State to hold search results
    const [originalSearchResults, setOriginalSearchResults] = useState<IUser[]>(); // State to hold original search results
    // Fetch all users and set search results
    const fetchUsers = async () => {
        const response = await UserService.getAllUsers();
        // console.log(typeof response.users);
        setSearchResults(response.users);
        setOriginalSearchResults(response.users);
    };

    useEffect(() => {
        fetchUsers();
    }, []);
    // Handler for filter changes

    const handleFilterChange = (event: any) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
       
    };

    // Handler for search
    const handleSearch = () => {
        console.log(filters);

        // Write logic to filter search results based on filters
        const filteredResults = searchResults?.filter((user) => {
            
            const {
                rent,
                beds,
                baths,
                spotType,
                distance,
                dietary,
                drinking,
                smoking,
                laundry,
                pet
            } = filters;
            const rentInclude = filters.rentInclude as unknown as string[] || [];
            const features = filters.features as unknown as string[] || [];
            // Filter based on rent
            if (rent && user.preferences.rent >= rent) {
                return true;
            }
            // Filter based on beds
            else if (beds && user.preferences.beds >= beds) {
                return true;
            }
            // Filter based on baths
            else if (baths && user.preferences.baths >= baths) {
                return true;
            }
            // Filter based on distance
            else if (distance && user.preferences.distance >= distance) {
                return true;
            }
            // Filter based on spotType
            else if (spotType && user.preferences.spotType === spotType) {
                return true;
            }
            // Filter based on dietary
            else if (dietary && user.preferences.dietary === dietary) {
                return true;
            }
            // Filter based on drinking
            else if (drinking && user.preferences.drinking === drinking) {
                return true;
            }
            // Filter based on smoking
            else if (smoking && user.preferences.smoking === smoking) {
                return true;
            }
            // Filter based on laundry
            else if (laundry && user.preferences.laundry === laundry) {
                return true;
            }
            // Filter based on pet
            else if (pet && user.preferences.pet === pet) {
                return true;
            }
            // Check if all value in rentInclude are present in user preferences
            // Filter based on rentInclude
            else if (
                rentInclude &&
                rentInclude.length &&
                rentInclude.every((value) => user.preferences.rentInclude.includes(value)) 
            ) {
                return true;
            }
            // Filter based on features
            else if (
                features &&
                features.length &&
                features?.every((value) => user.preferences.features.includes(value))
            ) {
                return true;
            }
        });
        setSearchResults(filteredResults);
    };
    return (
        <React.Fragment>
            <NavigationBar />
            <React.Fragment>
                <Box sx={{ flexGrow: 1, m: 3 }}>
                    <Grid container spacing={2}>
                        {/* Filter Section */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper elevation={3} sx={{ p: 2 }}>
                                <Typography variant="h6">Filters</Typography>
                                <Box p={2}>
                                    <FormControl fullWidth>
                                        <FormLabel>Rent Budget</FormLabel>
                                        <Slider
                                            aria-label="rent-budget"
                                            defaultValue={defaultFilters.rent}
                                            valueLabelDisplay="auto"
                                            step={10}
                                            min={0}
                                            max={10000}
                                            name="rent"
                                            onChange={handleFilterChange}
                                        />
                                    </FormControl>
                                    <FormControl fullWidth sx={{ width: "46%", mr: 1 }}>
                                        <FormLabel>Beds</FormLabel>
                                        <Select
                                            value={filters.beds}
                                            onChange={handleFilterChange}
                                            name="beds"
                                        >
                                            {[...Array(11)].map((_, index) => (
                                                <MenuItem key={index} value={index}>
                                                    {index}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <FormControl fullWidth sx={{ width: "46%", mr: 1 }}>
                                        <FormLabel>Baths</FormLabel>
                                        <Select
                                            value={filters.baths}
                                            onChange={handleFilterChange}
                                            name="baths"
                                        >
                                            {[...Array(11)].map((_, index) => (
                                                <MenuItem key={index} value={index}>
                                                    {index}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <FormControl fullWidth>
                                        <FormLabel>Distance</FormLabel>
                                        <Slider
                                            aria-label="rent-budget"
                                            defaultValue={defaultFilters.distance}
                                            valueLabelDisplay="auto"
                                            step={0.5}
                                            min={0}
                                            max={30}
                                            name="rent"
                                            onChange={handleFilterChange}
                                        />
                                    </FormControl>

                                    {Object.entries(multiSelectPreferences).map(
                                        ([key, values]) => (
                                            <FormControl fullWidth key={key}>
                                                <FormLabel>{key}</FormLabel>
                                                <Autocomplete
                                                    multiple
                                                    id={key}
                                                    options={values as string[]}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(event, value: string[]) => {
                                                        setFilters((prevFilters) => ({
                                                            ...prevFilters,
                                                            [key]: value,
                                                        }));
                                                    }}
                                                    filterSelectedOptions
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            label={key}
                                                            placeholder={key}
                                                            name={key}
                                                        />
                                                    )}
                                                />
                                            </FormControl>
                                        )
                                    )}
                                    {singleSelectPreferences &&
                                        Object.entries(singleSelectPreferences).map(
                                            ([key, values]) => (
                                                <FormControl fullWidth key={key}>
                                                    <FormLabel id={key}>{key} preference</FormLabel>
                                                    <RadioGroup
                                                        row
                                                        aria-labelledby={key}
                                                        name={key}
                                                        onChange={handleFilterChange}
                                                        defaultValue={
                                                            defaultFilters[key as keyof IPreferences]
                                                        }
                                                    >
                                                        {values.map((option) => (
                                                            <FormControlLabel
                                                                key={option}
                                                                value={option}
                                                                control={<Radio />}
                                                                label={option}
                                                            />
                                                        ))}
                                                    </RadioGroup>
                                                </FormControl>
                                            )
                                        )}
                                </Box>
                                <Button
                                    sx={{ mr: 1 }}
                                    variant="contained"
                                    onClick={handleSearch}
                                >
                                    Apply
                                </Button>
                                <Button
                                    sx={{ mr: 1 }}
                                    variant="contained"
                                    onClick={handleSearch}
                                >
                                    Reset
                                </Button>
                            </Paper>
                        </Grid>

                        {/* Search Results Section */}
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper elevation={3} sx={{ p: 2 }}>
                                <Typography variant="h6">Search Results</Typography>
                                <Grid container spacing={1}>
                                    {searchResults &&
                                        searchResults.map((user: IUser) => (
                                            <Grid item xs={12} md={6} key={user._id}>
                                                <Box p={1}>
                                                    <UserCard key={user._id} user={user} />
                                                </Box>
                                            </Grid>
                                        ))}
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </React.Fragment>
            <AppFooter />
        </React.Fragment>
    );
};

export default withRoot(FindRoomate);
