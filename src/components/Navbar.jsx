import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Stack,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import skvLogo from '../assest/SKV logo.png';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Ecovadis Certification', href: '#ecovadis-certification' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: '#ffffff',
        color: '#0f172a',
        top: 0,
        zIndex: 1100,
        borderBottom: '1px solid #e2e8f0',
        py: 0.5,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 64, md: 80 } }}>
          {/* Logo & Brand Name */}
          <Box
            component="a"
            href="#home"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Box
              component="img"
              src={skvLogo}
              alt="SKV Solution Logo"
              sx={{
                height: { xs: 46, sm: 56, md: 62 },
                maxHeight: 70,
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </Box>

          {/* Desktop Navigation Links */}
          <Stack
            direction="row"
            spacing={0.5}
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
          >
            {navItems.map((item, index) => (
              <Button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                sx={{
                  color: index === 0 ? '#7C4100' : '#334155',
                  fontWeight: index === 0 ? 800 : 600,
                  fontSize: '0.9rem',
                  px: 1.8,
                  py: 1,
                  position: 'relative',
                  borderBottom: index === 0 ? '2px solid #7C4100' : 'none',
                  borderRadius: index === 0 ? '0' : '6px',
                  '&:hover': {
                    bgcolor: 'rgba(124, 65, 0, 0.06)',
                    color: '#7C4100',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          {/* Call CTA Button & Mobile Actions */}
          <Stack direction="row" spacing={1} alignItems="center">
            {/* Desktop / Tablet Call Button */}
            <Button
              variant="contained"
              href="tel:+918800320483"
              startIcon={<PhoneInTalkIcon />}
              sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                bgcolor: '#7C4100',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: { xs: '0.825rem', sm: '0.9rem' },
                borderRadius: '50px',
                px: { sm: 2.2, md: 2.8 },
                py: 1,
                textTransform: 'none',
                boxShadow: '0 4px 14px rgba(124, 65, 0, 0.3)',
                '&:hover': {
                  bgcolor: '#592e00',
                  boxShadow: '0 6px 18px rgba(124, 65, 0, 0.4)',
                },
              }}
            >
              +91 8800320483
            </Button>

            {/* Mobile Direct Call Icon Button */}
            <IconButton
              component="a"
              href="tel:+918800320483"
              sx={{
                display: { xs: 'flex', sm: 'none' },
                bgcolor: '#7C4100',
                color: '#ffffff',
                p: 1,
                '&:hover': { bgcolor: '#592e00' }
              }}
            >
              <PhoneInTalkIcon sx={{ fontSize: 20 }} />
            </IconButton>

            {/* Mobile Hamburger Menu Icon */}
            <IconButton
              color="inherit"
              aria-label="open menu"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, ml: 0.5 }}
            >
              <MenuIcon sx={{ fontSize: 28, color: '#7C4100' }} />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      {/* Mobile Drawer Navigation */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: { width: 290, bgcolor: '#ffffff', p: 3, display: 'flex', flexDirection: 'column' }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box
            component="img"
            src={skvLogo}
            alt="SKV Solution Logo"
            sx={{ height: 44, width: 'auto', objectFit: 'contain' }}
          />
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ mb: 3 }}>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              sx={{
                borderRadius: '8px',
                mb: 0.8,
                py: 1.2,
                '&:hover': { bgcolor: 'rgba(124, 65, 0, 0.08)' }
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: 700, color: '#0f172a', fontSize: '0.95rem' }}
              />
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 'auto', pt: 2, borderTop: '1px solid #e2e8f0' }}>
          <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 800, letterSpacing: '0.05em', display: 'block', mb: 2 }}>
            CONTACT US
          </Typography>
          <Stack spacing={1.5}>
            <Button
              variant="contained"
              fullWidth
              href="tel:+918800320483"
              startIcon={<PhoneInTalkIcon />}
              sx={{
                bgcolor: '#7C4100',
                color: '#ffffff',
                fontWeight: 700,
                py: 1.2,
                borderRadius: '8px',
                textTransform: 'none',
                '&:hover': { bgcolor: '#592e00' }
              }}
            >
              Call: +91 8800320483
            </Button>
            <Button
              variant="outlined"
              fullWidth
              href="mailto:enquiry@skvs.in"
              startIcon={<EmailIcon />}
              sx={{
                borderColor: '#7C4100',
                color: '#7C4100',
                fontWeight: 700,
                py: 1.2,
                borderRadius: '8px',
                textTransform: 'none',
                '&:hover': { borderColor: '#592e00', bgcolor: 'rgba(124, 65, 0, 0.06)' }
              }}
            >
              enquiry@skvs.in
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
