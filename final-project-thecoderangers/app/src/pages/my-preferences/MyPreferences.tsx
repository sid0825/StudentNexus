import React, { useCallback, useState } from "react";
import NavigationBar from "../../modules/components/navigation-bar/NavigationBar";
import AppFooter from "../../modules/components/footer/AppFooter";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import withRoot from "../../modules/withRoot";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store";
import { ILoginPageState } from "../../types/login";
import { IUser } from "../../types/user";
import { updateUser } from "../../store/login/slice";

const MyPreferences = () => {
  const dispatch: any = useAppDispatch();

  const loginState: ILoginPageState = useAppSelector(
    (state: RootState) => state.auth
  );
  const [user, setUser] = useState<IUser>({
    ...(loginState.data?.user ?? ({} as IUser)),
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const singleSelectPreferences = {
    beds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    baths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    dietary: ["Veg", "NonVeg", "Vegan", "Eggetarian", "Any"],
    spotType: [
      "Private Room",
      "Shared Room",
      "Entire Place",
      "Hall Spot",
      "Any",
    ],
    laundry: ["In Unit", "In Building", "None"],
    drinking: ["Yes", "No", "Any"],
    smoking: ["Yes", "No", "Any"],
    pet: ["Yes", "No", "Any"],
  };

  const multiSelectPreferences = {
    rentInclude: [
      "Any",
      "Heat",
      "Hot Water",
      "Gas",
      "Electricity",
      "Internet",
      "Cable",
    ],
    features: [
      "Any",
      "Gym",
      "Pool",
      "Parking",
      "Elevator",
      "Security",
      "Laundry",
      "Balcony",
      "AC",
      "Furnished",
    ],
  };

  const handleChange = useCallback(
    (event: { target: { name: any; value: any } }) => {
      setUser((prevState) => ({
        ...prevState,
        preferences: {
          ...prevState.preferences,
          [event.target.name]: event.target.value,
        },
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      dispatch(updateUser(user));
      setSnackbarOpen(true); 
    },
    [user, dispatch]
  );

  return (
    <React.Fragment>
      <NavigationBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <Typography variant="h4">My Preferences</Typography>

            <Grid container spacing={3} sx={{ p: 2 }}>
              <React.Fragment>
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                  <Card>
                    <CardHeader title="Preferences" />
                    <CardContent sx={{ pt: 2, pl: 5 }}>
                      <Box sx={{ m: -1.5 }}>
                        <Grid container spacing={3}>
                          <Grid item sx={{ p: 1 }} xs={6} md={3}>
                            <TextField
                              fullWidth
                              label="Rent"
                              name="rent"
                              onChange={handleChange}
                              required
                              value={user?.preferences?.rent}
                            />
                          </Grid>
                          {singleSelectPreferences &&
                            Object.entries(singleSelectPreferences).map(
                              ([key, values]) => (
                                <Grid
                                  item
                                  sx={{ p: 1 }}
                                  xs={6}
                                  md={3}
                                  key={key}
                                >
                                  <TextField
                                    fullWidth
                                    label={key}
                                    name={key}
                                    onChange={handleChange}
                                    required
                                    select
                                    SelectProps={{ native: true }}
                                    value={
                                      user?.preferences?.[
                                        key as keyof (typeof user)["preferences"]
                                      ]
                                    }
                                  >
                                    {values.map((option) => (
                                      <option key={option} value={option}>
                                        {option}
                                      </option>
                                    ))}
                                  </TextField>
                                </Grid>
                              )
                            )}
                          <Grid item sx={{ p: 1 }} xs={6} md={3}>
                            <TextField
                              fullWidth
                              label="Distance From Campus"
                              name="distance"
                              onChange={handleChange}
                              required
                              value={user?.preferences?.distance}
                            />
                          </Grid>
                          {multiSelectPreferences &&
                            Object.entries(multiSelectPreferences).map(
                              ([key, values]) => (
                                <Grid
                                  item
                                  sx={{ p: 1 }}
                                  xs={12}
                                  md={6}
                                  key={key}
                                >
                                  <Autocomplete
                                    multiple
                                    id={key}
                                    options={values as string[]}
                                    getOptionLabel={(option) => option}
                                    filterSelectedOptions
                                    renderInput={(params) => (
                                      <TextField
                                        {...params}
                                        label={key}
                                        placeholder={key}
                                      />
                                    )}
                                    value={
                                      user?.preferences?.[
                                        key as keyof typeof user.preferences
                                      ] as string[]
                                    }
                                    onChange={(event, newValue) => {
                                      handleChange({
                                        target: {
                                          name: key,
                                          value: newValue,
                                        },
                                      });
                                    }}
                                  />
                                </Grid>
                              )
                            )}
                        </Grid>
                      </Box>
                    </CardContent>
                    <Divider />
                    <CardActions sx={{ justifyContent: "flex-end" }}>
                      <Button type="submit" variant="contained">
                        Update Preferences
                      </Button>
                    </CardActions>
                  </Card>
                </form>
              </React.Fragment>
            </Grid>
          </Stack>
        </Container>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }} 
        sx={{ mt: 8 }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{
            width: "100%",
            fontWeight: "bold",
            fontSize: "0.95rem",
            bgcolor: "success.light",
          }}
        >
          Preferences updated successfully!
        </Alert>
      </Snackbar>
      <AppFooter />
    </React.Fragment>
  );
};

export default withRoot(MyPreferences);
