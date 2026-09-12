import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Stack,
  TextField,
  MenuItem,
  InputAdornment,
  Paper
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BusinessIcon from '@mui/icons-material/Business';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SendIcon from '@mui/icons-material/Send';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    mobile: '',
    businessType: '',
    companySize: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! Our EcoVadis consultant will contact you shortly.');
  };

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        bgcolor: '#faf7f2',
        pt: { xs: 4, md: 6 },
        pb: { xs: 6, md: 10 },
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.75) 0%, rgba(250, 247, 242, 0.95) 100%), url("/hero_sprout_bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, lg: 3 }} alignItems="center">

          {/* Left Column: Headline & Value Prop */}
          <Grid item xs={12} md={6} lg={5.5}>
            <Box sx={{ pr: { lg: 2 } }}>
              {/* Top Tagline */}
              <Typography
                variant="subtitle2"
                sx={{
                  color: '#7C4100',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  mb: 1.5,
                }}
              >
                BUILD A SUSTAINABLE TOMORROW
              </Typography>

              {/* Main Headline */}
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.3rem' },
                  lineHeight: 1.15,
                  color: '#0f172a',
                  letterSpacing: '-0.03em',
                  mb: 2.5,
                }}
              >
                Get Your{' '}
                <Box
                  component="span"
                  sx={{
                    color: '#7C4100',
                    display: 'inline',
                  }}
                >
                  EcoVadis Certification
                </Box>{' '}
                with SKV Solution
              </Typography>

              {/* Description Subtitle */}
              <Typography
                variant="body1"
                sx={{
                  color: '#475569',
                  fontSize: { xs: '0.975rem', md: '1.08rem' },
                  lineHeight: 1.6,
                  mb: 3.5,
                }}
              >
                Demonstrate your commitment to sustainability, responsible business and ethical practices with EcoVadis certification.
              </Typography>

              {/* Bullet Points */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }} flexWrap="wrap" useFlexGap>
                {[
                  'Improve ESG Performance',
                  'Build Trust',
                  'Create Long-Term Value'
                ].map((item, idx) => (
                  <Stack direction="row" spacing={0.8} alignItems="center" key={idx}>
                    <CheckCircleIcon sx={{ color: '#7C4100', fontSize: 20 }} />
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#1e293b', fontSize: '0.875rem' }}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              {/* CTA Button */}
              <Button
                variant="contained"
                href="#contact"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: '#7C4100',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1rem',
                  borderRadius: '50px',
                  px: 3.5,
                  py: 1.4,
                  textTransform: 'none',
                  boxShadow: '0 6px 20px rgba(124, 65, 0, 0.35)',
                  '&:hover': {
                    bgcolor: '#592e00',
                  },
                }}
              >
                Get Started Today
              </Button>
            </Box>
          </Grid>

          {/* Middle Column: Metallic EcoVadis Badge Graphic */}
          <Grid item xs={12} sm={5} md={2} lg={2.5} sx={{ textAlign: 'center', my: { xs: 2, md: 0 } }}>
            <Box
              sx={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                py: 2,
              }}
            >
              {/* Metallic Silver Badge Emblem */}
              <Box
                className="animate-float"
                sx={{
                  width: { xs: 180, sm: 200, md: 220 },
                  height: { xs: 180, sm: 200, md: 220 },
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #e2e8f0 0%, #ffffff 40%, #cbd5e1 70%, #94a3b8 100%)',
                  border: '8px solid #f1f5f9',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.18), inset 0 2px 4px rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 2,
                  position: 'relative',
                }}
              >
                {/* Silver Header Ribbon Banner */}
                <Box
                  sx={{
                    bgcolor: '#475569',
                    color: '#ffffff',
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    px: 1.8,
                    py: 0.4,
                    borderRadius: '12px',
                    textTransform: 'uppercase',
                    mb: 1.5,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                  }}
                >
                  SILVER | Top 15%
                </Box>

                {/* EcoVadis Logo Text */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 900,
                    color: '#1e293b',
                    fontSize: '1.4rem',
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    mb: 0.5,
                  }}
                >
                  ecovadis
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    color: '#64748b',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    mb: 1,
                  }}
                >
                  Sustainability Rating
                </Typography>

                {/* Year Badge */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 900,
                    color: '#0f172a',
                    fontSize: '1.25rem',
                    lineHeight: 1,
                  }}
                >
                  2025
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Column: Floating "Enquire Now" Contact Form */}
          <Grid item xs={12} sm={7} md={4} lg={4}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
                bgcolor: '#ffffff',
              }}
            >
              {/* Form Top Banner Bar */}
              <Box
                sx={{
                  bgcolor: '#7C4100',
                  color: '#ffffff',
                  p: 2.5,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 1.8,
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '10px',
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <DescriptionOutlinedIcon sx={{ color: '#ffffff', fontSize: 26 }} />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.2rem', lineHeight: 1.2 }}>
                    Enquire Now
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.78rem', display: 'block', mt: 0.3 }}>
                    Get a free consultation for your Ecovadis certification
                  </Typography>
                </Box>
              </Box>

              {/* Form Fields */}
              <Box component="form" onSubmit={handleSubmit} sx={{ p: 2.5 }}>
                <Stack spacing={1.6}>
                  <TextField
                    placeholder="Full Name *"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    fullWidth
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutlineIcon sx={{ color: '#64748b', fontSize: 20 }} />
                        </InputAdornment>
                      ),
                      sx: { borderRadius: '8px', fontSize: '0.875rem', bgcolor: '#f8fafc' }
                    }}
                  />

                  <TextField
                    placeholder="Company Name *"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    fullWidth
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <BusinessIcon sx={{ color: '#64748b', fontSize: 20 }} />
                        </InputAdornment>
                      ),
                      sx: { borderRadius: '8px', fontSize: '0.875rem', bgcolor: '#f8fafc' }
                    }}
                  />

                  <TextField
                    placeholder="Email Address *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    fullWidth
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailOutlineIcon sx={{ color: '#64748b', fontSize: 20 }} />
                        </InputAdornment>
                      ),
                      sx: { borderRadius: '8px', fontSize: '0.875rem', bgcolor: '#f8fafc' }
                    }}
                  />

                  <TextField
                    placeholder="Mobile Number *"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    fullWidth
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIphoneIcon sx={{ color: '#64748b', fontSize: 20 }} />
                        </InputAdornment>
                      ),
                      sx: { borderRadius: '8px', fontSize: '0.875rem', bgcolor: '#f8fafc' }
                    }}
                  />

                  <TextField
                    select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                    fullWidth
                    size="small"
                    displayEmpty
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <WorkOutlineIcon sx={{ color: '#64748b', fontSize: 20 }} />
                        </InputAdornment>
                      ),
                      sx: { borderRadius: '8px', fontSize: '0.875rem', bgcolor: '#f8fafc' }
                    }}
                  >
                    <MenuItem value="" disabled>Select Business Type *</MenuItem>
                    <MenuItem value="Manufacturing">Manufacturing</MenuItem>
                    <MenuItem value="IT & Software">IT & Services</MenuItem>
                    <MenuItem value="Logistics & Supply Chain">Logistics & Transport</MenuItem>
                    <MenuItem value="Textile & Apparel">Textile & Apparel</MenuItem>
                    <MenuItem value="Chemicals & Pharma">Chemicals & Pharma</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </TextField>

                  <TextField
                    select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    required
                    fullWidth
                    size="small"
                    displayEmpty
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <GroupsIcon sx={{ color: '#64748b', fontSize: 20 }} />
                        </InputAdornment>
                      ),
                      sx: { borderRadius: '8px', fontSize: '0.875rem', bgcolor: '#f8fafc' }
                    }}
                  >
                    <MenuItem value="" disabled>Select Company Size *</MenuItem>
                    <MenuItem value="1-50 employees">1 - 50 Employees (Small)</MenuItem>
                    <MenuItem value="51-250 employees">51 - 250 Employees (Medium)</MenuItem>
                    <MenuItem value="251-1000 employees">251 - 1,000 Employees (Large)</MenuItem>
                    <MenuItem value="1000+ employees">1,000+ Employees (Enterprise)</MenuItem>
                  </TextField>

                  <TextField
                    placeholder="Your Message (Optional)"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={2}
                    fullWidth
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1 }}>
                          <ChatBubbleOutlineIcon sx={{ color: '#64748b', fontSize: 20 }} />
                        </InputAdornment>
                      ),
                      sx: { borderRadius: '8px', fontSize: '0.875rem', bgcolor: '#f8fafc' }
                    }}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    startIcon={<MailOutlineIcon />}
                    sx={{
                      bgcolor: '#7C4100',
                      color: '#ffffff',
                      fontWeight: 700,
                      py: 1.2,
                      mt: 1,
                      fontSize: '0.95rem',
                      borderRadius: '8px',
                      textTransform: 'none',
                      boxShadow: '0 4px 14px rgba(124, 65, 0, 0.3)',
                      '&:hover': {
                        bgcolor: '#592e00',
                      },
                    }}
                  >
                    Submit Enquiry
                  </Button>

                  {/* Trust Footer */}
                  <Stack direction="row" spacing={0.8} alignItems="center" justifyContent="center" sx={{ pt: 0.5 }}>
                    <ShieldOutlinedIcon sx={{ color: '#7C4100', fontSize: 16 }} />
                    <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.75rem' }}>
                      Your information is safe with us.
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
