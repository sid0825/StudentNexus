import React, { useState } from 'react';
import { Fab, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function ContactButton() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="contact us"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          backgroundColor: "green",
        }}
        onClick={handleClickOpen}
      >
        <WhatsAppIcon />
      </Fab>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact Us</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To get in touch, please send us a message on WhatsApp.
          </DialogContentText>
          <DialogActions
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <a
              href="https://wa.me/+16172384600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button onClick={handleClose} color="primary" variant='contained'>
                SEND MESSAGE
              </Button>
            </a>
          </DialogActions>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ContactButton;
