import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

function PersonalisedHelp() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    >
      <Button
        sx={{
          border: '4px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
        }}
        onClick={handleClickOpen}
      >
        <Typography variant="h4" component="span">
          STILL CONFUSED? NEED PERSONALISED HELP
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        We are here to help. Get in touch!
      </Typography>
      <Box
        component="img"
        src="/Conversation-pana.svg" // Assuming you put the SVG in the public folder
        alt="Helpful Conversation"
        sx={{ width: '100%', maxWidth: '400px' }} // Adjust the size as needed
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Personalised Help</DialogTitle>
        <DialogContent>
          <Typography>Get Connected one to one on +161788888888</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default PersonalisedHelp;
