import React, { useState } from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import NavigationBar from "../navigation-bar/NavigationBar";

const ContactUs = () => {
  // State to store form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform any submission logic here, e.g., API call
    console.log("Form submitted:", formData);

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <NavigationBar />
      <Container maxWidth="md" sx={{ py: 6, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom textAlign="center" sx={{ color: "primary.main", mb: 4 }}>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph textAlign="center" sx={{ mb: 3 }}>
          We'd love to hear from you! Please fill out the form below or send us an email at{" "}
          <a href="mailto:studentnexus10@gmail.com" style={{ color: "primary.main" }}>
            studentnexus10@gmail.com
          </a>.
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            bgcolor: "white",
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            maxWidth: "600px",
            mx: "auto",
          }}
          onSubmit={handleSubmit} // Attach the submit handler
        >
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            required
            sx={{ borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label="Your Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            required
            type="email"
            sx={{ borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            required
            multiline
            rows={4}
            sx={{ borderRadius: 1 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2, width: "100%", py: 1.5, fontSize: "16px", borderRadius: 1 }}
          >
            Send Message
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default ContactUs;
