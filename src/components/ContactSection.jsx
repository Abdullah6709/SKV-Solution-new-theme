import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  Chip,
  MenuItem,
  Alert,
  Snackbar
} from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ecoVadisStatusOptions = [
  'First Time EcoVadis Assessment',
  'EcoVadis Score Improvement / Medal Upgrade',
  'Expedited Submission Requirement',
  'Annual Re-Assessment Maintenance',
  'General Inquiry / Consultation'
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    status: 'First Time EcoVadis Assessment',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      return;
    }
    setSubmitted(true);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#f8fafc',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8, maxWidth: 800, mx: 'auto' }}>
          <Chip
            icon={<VerifiedIcon sx={{ color: '#7C4100 !important' }} />}
            label="GET IN TOUCH WITH SKV SOLUTIONS"
            sx={{
              bgcolor: 'rgba(124, 65, 0, 0.1)',
              color: '#7C4100',
              fontWeight: 800,
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              mb: 2,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 800,
              color: '#0f172a',
              mb: 2,
              letterSpacing: '-0.02em',
            }}
          >
            Start Your <span className="gradient-text">EcoVadis Certification</span> Today
          </Typography>
          <Typography variant="body1" sx={{ color: '#64748b', fontSize: '1.05rem' }}>
            Contact our senior ESG compliance team. We provide a 100% confidential gap analysis 
            and tailored consultation.
          </Typography>
        </Box>

        <Grid container spacing={5}>
          {/* Left Column: Direct Contact Info Cards */}
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              {/* Primary Email Card */}
              <Card
                sx={{
                  p: 3,
                  borderRadius: '20px',
                  bgcolor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#7C4100',
                    boxShadow: '0 10px 25px rgba(124, 65, 0, 0.1)',
                  },
                }}
              >
                <Stack direction="row" spacing={2.5} alignItems="center">
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, #7C4100 0%, #9E5400 100%)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 20px rgba(124, 65, 0, 0.3)',
                    }}
                  >
                    <EmailIcon sx={{ fontSize: 28 }} />
                  </Box>

                  <Box>
                    <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 700, letterSpacing: '0.05em' }}>
                      OFFICIAL EMAIL ADDRESS
                    </Typography>
                    <Typography
                      variant="h6"
                      component="a"
                      href="mailto:enquiry@skvs.in"
                      sx={{
                        fontWeight: 800,
                        color: '#7C4100',
                        display: 'block',
                        textDecoration: 'none',
                        '&:hover': { textDecoration: 'underline' },
                      }}
                    >
                      enquiry@skvs.in
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#9E5400', fontWeight: 600 }}>
                      Fast response within 2 business hours
                    </Typography>
                  </Box>
                </Stack>
              </Card>

              {/* Primary Phone Card */}
              <Card
                sx={{
                  p: 3,
                  borderRadius: '20px',
                  bgcolor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#7C4100',
                    boxShadow: '0 10px 25px rgba(124, 65, 0, 0.1)',
                  },
                }}
              >
                <Stack direction="row" spacing={2.5} alignItems="center">
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, #9E5400 0%, #BF6800 100%)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 20px rgba(158, 84, 0, 0.3)',
                    }}
                  >
                    <PhoneInTalkIcon sx={{ fontSize: 28 }} />
                  </Box>

                  <Box>
                    <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 700, letterSpacing: '0.05em' }}>
                      PHONE / WHATSAPP ADVISORY
                    </Typography>
                    <Typography
                      variant="h6"
                      component="a"
                      href="tel:8800320483"
                      sx={{
                        fontWeight: 800,
                        color: '#7C4100',
                        display: 'block',
                        textDecoration: 'none',
                        '&:hover': { textDecoration: 'underline' },
                      }}
                    >
                      8800320483
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#64748b' }}>
                      Direct Call & WhatsApp Consultation
                    </Typography>
                  </Box>
                </Stack>
              </Card>

              {/* Corporate Head Office Card */}
              <Card
                sx={{
                  p: 3,
                  borderRadius: '20px',
                  bgcolor: '#7C4100',
                  color: '#ffffff',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#f59e0b', mb: 2 }}>
                  SKV Solutions Pvt Ltd
                </Typography>

                <Stack spacing={2}>
                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <LocationOnIcon sx={{ color: '#f59e0b', mt: 0.3 }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#f59e0b' }}>
                        Registered Office
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#cbd5e1', fontSize: '0.875rem', mb: 1 }}>
                        7/13, Madhuvan Vihar, Allahabad - 211011, India
                      </Typography>

                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#f59e0b' }}>
                        NCR Office
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#cbd5e1', fontSize: '0.875rem' }}>
                        Plot no-4/4, A-219, Rajhans Plaza, Ahinsa Khand-I, Indirapuram, Ghaziabad - 201014, India
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <AccessTimeIcon sx={{ color: '#f59e0b' }} />
                    <Typography variant="body2" sx={{ color: '#cbd5e1', fontSize: '0.875rem' }}>
                      Working Hours: Mon - Sat (9:30 AM - 6:30 PM IST)
                    </Typography>
                  </Stack>
                </Stack>
              </Card>
            </Stack>
          </Grid>

          {/* Right Column: Interactive Consultation Request Form */}
          <Grid item xs={12} md={7}>
            <Card
              sx={{
                p: { xs: 3, sm: 4 },
                borderRadius: '24px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.06)',
                border: '1px solid #e2e8f0',
                bgcolor: '#ffffff',
              }}
            >
              <CardContent disablePadding>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a', mb: 1 }}>
                  Request Free EcoVadis Consultation
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mb: 4 }}>
                  Fill out the form below. An EcoVadis specialist will reach out to evaluate your assessment needs.
                </Typography>

                {submitted ? (
                  <Alert severity="success" sx={{ py: 3, borderRadius: '16px' }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                      Thank You for Contacting SKV Solutions!
                    </Typography>
                    <Typography variant="body2">
                      Your inquiry has been received. Our EcoVadis expert will review your request and get back to you at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> shortly.
                    </Typography>
                  </Alert>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2.5}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          required
                          label="Your Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          variant="outlined"
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          required
                          type="email"
                          label="Business Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          variant="outlined"
                          helperText="e.g. yourname@company.com"
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          required
                          label="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          variant="outlined"
                          helperText="e.g. 8800320483"
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Company / Enterprise Name"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          variant="outlined"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          select
                          label="Current EcoVadis Requirement"
                          name="status"
                          value={formData.status}
                          onChange={handleChange}
                          variant="outlined"
                        >
                          {ecoVadisStatusOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          label="Message / Specific Requirements"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          variant="outlined"
                          placeholder="Tell us about your industry, company size, or target medal..."
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          fullWidth
                          startIcon={<SendIcon />}
                          sx={{
                            py: 1.8,
                            fontSize: '1rem',
                            fontWeight: 800,
                          }}
                        >
                          Submit Inquiry to SKV Solutions
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Inquiry submitted successfully to enquiry@skvs.in!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;
