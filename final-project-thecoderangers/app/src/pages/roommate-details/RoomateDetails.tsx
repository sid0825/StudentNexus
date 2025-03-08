import React, { useEffect } from "react";
import UserService from "../../services/user";
import { IUser } from "../../types/user";
import { useParams } from "react-router-dom";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import AppFooter from "../../modules/components/footer/AppFooter";
import NavigationBar from "../../modules/components/navigation-bar/NavigationBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const RoomateDetails = () => {
  const { id } = useParams();
  const [user, setUser] = React.useState<IUser>();

  const fetchUserDetails = async (id: string) => {
    const response = await UserService.getUserbyId(id);
    setUser(response?.user);
   
  };

  useEffect(() => {
    if (id) {
      fetchUserDetails(id);
    }
  }, [id]);
  const handleCardBack = () => {
    window.history.back();
  };
  return (
    <React.Fragment>
      <NavigationBar />
      <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
        <Paper sx={{ maxWidth: 1200, my: 1, mx: "auto", p: 2 }}>
          <Button variant="contained" onClick={handleCardBack}>
            <ArrowBackIcon /> Back
          </Button>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6}>
              {user && (
                <Box>
                  <Avatar
                    alt="Profile"
                    src = {user?.photo || "/assets/avatars/profile.png"}
                    sx={{ width: 150, height: 150, mb: 2, mx: "auto" }}
                  />
                  <Typography
                    variant="h5"
                    gutterBottom
                    component="div"
                    textAlign="center"
                  >
                    {user?.firstName} {user?.lastName}
                  </Typography>
                  <List>
                    <ListItem divider>
                      <ListItemText primary="Email" secondary={user?.email} />
                    </ListItem>
                    <ListItem divider>
                      <ListItemText primary="Phone" secondary={user?.phone} />
                    </ListItem>
                    <ListItem divider>
                      <ListItemText
                        primary="About Me"
                        secondary={user?.aboutMe}
                      />
                    </ListItem>
                    <ListItem divider>
                      <ListItemText
                        primary="Home Town"
                        secondary={user?.homeTown}
                      />
                    </ListItem>
                    <ListItem divider>
                      <ListItemText primary="Major" secondary={user?.major} />
                    </ListItem>
                    <ListItem divider>
                      <ListItemText
                        primary="University"
                        secondary={user?.university?.name}
                      />
                    </ListItem>
                    <ListItem divider>
                      <ListItemText
                        primary="Previous Education"
                        secondary={user?.previousEducation}
                      />
                    </ListItem>
                    <ListItem divider>
                      <ListItemText
                        primary="Work Experience"
                        secondary={user?.workExperience}
                      />
                    </ListItem>
                    {/* Add more personal details here */}
                  </List>
                </Box>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              {user && (
                <List>
                  <ListItem divider>
                    <ListItemText primary="Preferences" />
                  </ListItem>
                  {/* Add preferences details here */}
                  <ListItem divider>
                    <ListItemText
                      primary="Rent"
                      secondary={user?.preferences?.rent}
                    />
                  </ListItem>
                  <ListItem divider>
                    <ListItemText
                      primary="Dietary"
                      secondary={user?.preferences?.dietary}
                    />
                  </ListItem>
                  <ListItem divider>
                    <ListItemText
                      primary="Smoking"
                      secondary={user?.preferences?.smoking}
                    />
                  </ListItem>
                  <ListItem divider>
                    <ListItemText
                      primary="Drinking"
                      secondary={user?.preferences?.drinking}
                    />
                  </ListItem>
                  <ListItem divider>
                    <ListItemText
                      primary="Beds"
                      secondary={user?.preferences?.beds}
                    />
                  </ListItem>
                  <ListItem divider>
                    <ListItemText
                      primary="Baths"
                      secondary={user?.preferences?.baths}
                    />
                  </ListItem>
                  <ListItem divider>
                    <ListItemText
                      primary="Laundry"
                      secondary={user?.preferences?.laundry}
                    />
                  </ListItem>
                  <ListItem divider>
                    <ListItemText
                      primary="Pet"
                      secondary={user?.preferences?.pet}
                    />
                  </ListItem>
                  <ListItem divider>
                    <ListItemText
                      primary="Distance"
                      secondary={user?.preferences?.distance}
                    />
                  </ListItem>
                  <ListItem divider>
                    <ListItemText
                      primary="Rent Includes"
                      secondary={user?.preferences?.rentInclude.join(", ")}
                    />
                  </ListItem>
                </List>
              )}
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <AppFooter />
    </React.Fragment>
  );
};

export default RoomateDetails;
