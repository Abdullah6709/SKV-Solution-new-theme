import React from 'react';
import { Box, Fab, Tooltip, Zoom } from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FloatingActions = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 1200,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
      }}
    >
      {/* WhatsApp Action */}
      <Tooltip title="Chat on WhatsApp (+91 8800320483)" placement="left" arrow>
        <Fab
          size="medium"
          component="a"
          href="https://wa.me/918800320483?text=Hi%20SKV%20Solutions,%20I%20would%20like%20to%20enquire%20about%20EcoVadis%20certification%20services."
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            bgcolor: '#25D366',
            color: '#ffffff',
            boxShadow: '0 8px 20px rgba(37, 211, 102, 0.4)',
            '&:hover': {
              bgcolor: '#128C7E',
            },
          }}
        >
          <WhatsAppIcon />
        </Fab>
      </Tooltip>

      {/* Direct Email Action */}
      <Tooltip title="Email Us: enquiry@skvs.in" placement="left" arrow>
        <Fab
          size="medium"
          component="a"
          href="mailto:enquiry@skvs.in"
          sx={{
            bgcolor: '#0284c7',
            color: '#ffffff',
            boxShadow: '0 8px 20px rgba(2, 132, 199, 0.4)',
            '&:hover': {
              bgcolor: '#0369a1',
            },
          }}
        >
          <EmailIcon />
        </Fab>
      </Tooltip>

      {/* Direct Phone Call Action */}
      <Tooltip title="Call Now: 8800320483" placement="left" arrow>
        <Fab
          color="secondary"
          component="a"
          href="tel:8800320483"
          className="animate-pulse-glow"
          sx={{
            bgcolor: '#7C4100',
            color: '#ffffff',
            boxShadow: '0 8px 24px rgba(124, 65, 0, 0.5)',
            '&:hover': {
              bgcolor: '#592e00',
            },
          }}
        >
          <PhoneInTalkIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
};

export default FloatingActions;
