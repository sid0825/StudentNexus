import React, { useCallback, useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { ILoginPageState } from "../../types/login";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store";
import { IUser } from "../../types/user";
import { updateUser } from "../../store/login/slice";

const UserProfileDetails = () => {
  const textFields = [
    "firstName",
    "lastName",
    "aboutMe",
    "homeTown",
    "intake",
    "major",
    "phone",
    "workExperience",
  ];
  const loginState: ILoginPageState = useAppSelector(
    (state: RootState) => state.auth
  );
  const [user, setUser] = useState<IUser>(
    loginState.data?.user ?? ({} as IUser)
  );
  const [phoneError, setPhoneError] = useState<string | null>(null); // Track phone validation errors
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State for Snackbar
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Track button state
  const dispatch: any = useAppDispatch();

  // Check if all required fields are filled
  useEffect(() => {
    const isFormComplete = textFields.every((field) => {
      const value = user[field as keyof IUser];
      return typeof value === "string" && value?.trim(); // Ensure it's a string and trimmed
    }) && !phoneError;
  
    setIsButtonDisabled(!isFormComplete);
  }, [user, phoneError]);
  

  const handleChange = useCallback(
    (event: { target: { name: string; value: string } }) => {
      const { name, value } = event.target;

      if (name === "phone") {
        // Allow only numeric input and limit to 10 digits
        if (!/^\d{0,10}$/.test(value)) {
          return;
        }

        // Check for exactly 10 digits
        if (value.length === 10) {
          setPhoneError(null);
        } else {
          setPhoneError("Phone number must be 10 digits");
        }
      }

      // Update state
      setUser((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      // Ensure phone number is exactly 10 digits before submitting
      if (user.phone && user.phone.length !== 10) {
        setPhoneError("Phone number must be exactly 10 digits");
        return;
      }

      // Dispatch the action and open the Snackbar
      dispatch(updateUser(user));
      setSnackbarOpen(true);
      setPhoneError(null); // Clear any phone validation errors
      setIsButtonDisabled(true); // Disable button after saving
    },
    [dispatch, user]
  );

  const handleSnackbarClose = () => {
    setSnackbarOpen(false); // Close the Snackbar
  };

  return (
    <React.Fragment>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Card>
          <CardHeader title="Details" />
          <CardContent sx={{ pt: 2, pl: 5 }}>
            <Box sx={{ m: -1.5 }}>
              <Grid container spacing={3}>
                {textFields.map((field, index) => (
                  <Grid item sx={{ p: 1 }} xs={12} md={6} key={index}>
                    <TextField
                      fullWidth
                      label={field}
                      name={field}
                      onChange={handleChange}
                      required={true} // All fields are required
                      value={user[field as keyof typeof user] || ""}
                      error={field === "phone" && !!phoneError} // Show error for phone field
                      helperText={field === "phone" ? phoneError : ""} // Show phone error message
                    />
                  </Grid>
                ))}
                <Grid item sx={{ p: 1 }} xs={12} md={12}>
                  <TextField
                    fullWidth
                    label="Previous Education"
                    name="previousEducation"
                    onChange={handleChange}
                    value={user.previousEducation || ""}
                  />
                </Grid>
              </Grid>
            </Box>
          </CardContent>
          <Divider />
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button
              type="submit"
              variant="contained"
              disabled={isButtonDisabled} // Button disabled state
            >
              Save details
            </Button>
          </CardActions>
        </Card>
      </form>
      {/* Snackbar Component */}
      <Snackbar
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        autoHideDuration={3000} // Automatically hides after 3 seconds
        anchorOrigin={{ vertical: "top", horizontal: "right" }} // Top-right placement
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#4caf50", // Green background for success
            color: "white", // White text
            borderRadius: "8px", // Rounded corners
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Soft shadow
            padding: "10px 16px", // Padding for better spacing
            fontSize: "1rem", // Larger font size
          },
        }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          icon={false} // Remove the default icon for a cleaner look
          sx={{
            width: "100%",
            fontWeight: "bold", // Bold text for better visibility
            fontSize: "0.95rem",
            bgcolor: "success.light",
          }}
        >
          Details saved successfully!
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default UserProfileDetails;
