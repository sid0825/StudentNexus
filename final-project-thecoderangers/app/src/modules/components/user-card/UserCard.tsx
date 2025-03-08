import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Avatar,
    Grid,
    // Button,
    // CardActions,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

type Props = { user: any };

const UserCard = ({ user }: Props) => {
    const navigate = useNavigate();
    const handleCardClick = () => {
        // console.log(user._id);
        navigate(`/Find-Roommates/${user._id}`);
    };
    return (
        <div onClick={handleCardClick}>
            <Card sx={{ display: "flex", mb: 2, alignItems: "center" }}>
                <CardContent
                    sx={{ flex: "1 0 auto", display: "flex", alignItems: "center" }}
                >
                    <Avatar sx={{ bgcolor: blue[500], marginRight: 2 }}
                        src={user.photo || "/assets/avatars/profile.png"}
                    >
                        {/* Display the first letter of the name if available */}
                        {user.firstName ? user.firstName.charAt(0) : ""}
                    </Avatar>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography component="div" variant="h6">
                                {user.firstName} {user.lastName}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">{user.aboutMe}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {/* <Typography variant="body2">{user.university}</Typography> */}
                            <Typography variant="body2">Notheastern University</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">{user.major}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">{user.intake}</Typography>
                        </Grid>
                        {/* <Grid item xs={12}>
            <Typography variant="body2">
            Experience: {user.workExperience} Months
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="body2">Hometown: {user.homeTown}</Typography>
          </Grid>
          <Grid item xs={12}>
            {user.previousEducation.map((education: string) => {
              return <Typography variant="body2">{education}</Typography>;
            })}
          </Grid> */}
                    </Grid>
                </CardContent>
                {/* <CardActions>
        <Button size="small" variant="outlined">
          Contact
        </Button>
      </CardActions> */}
            </Card>
        </div>
    );
};

export default UserCard;
