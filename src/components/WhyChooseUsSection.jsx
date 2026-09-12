import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Paper
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const points = [
  'Experienced and certified consultants',
  'End-to-end support',
  'Transparent process & timely delivery',
  'Focus on your business goals'
];

const WhyChooseUsSection = () => {
  return (
    <Box
      id="why-us"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: '#ffffff',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">

          {/* Left Column: Image Banner with Overlay Script Text */}
          <Grid item xs={12} md={5.5}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
              }}
            >
              <Box
                component="img"
                src="/handshake_partner.jpg"
                alt="Your Sustainability Partner"
                sx={{
                  width: '100%',
                  height: { xs: 300, sm: 380, md: 440 },
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              {/* Overlay Dark Vignette & Script Text */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(124, 65, 0, 0.85) 0%, rgba(0, 0, 0, 0.2) 60%, transparent 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  p: { xs: 3, md: 4 },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: '#ffffff',
                    fontFamily: '"Caveat", "Dancing Script", "Brush Script MT", cursive',
                    fontWeight: 700,
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '2.8rem' },
                    lineHeight: 1.1,
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  Your Sustainability<br />Partner
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Column: Title, Subtitle, Checkpoints */}
          <Grid item xs={12} md={6.5}>
            <Box sx={{ pl: { md: 2 } }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: '#7C4100',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  mb: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                WHY CHOOSE US? <span style={{ color: '#94a3b8' }}>——</span>
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: '1.8rem', sm: '2.4rem', md: '2.75rem' },
                  color: '#0f172a',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  mb: 2.5,
                }}
              >
                Your Trusted Partner for EcoVadis Certification
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#475569',
                  fontSize: { xs: '0.975rem', md: '1.05rem' },
                  lineHeight: 1.65,
                  mb: 3.5,
                }}
              >
                At <strong style={{ color: '#7C4100' }}>SKV Solution</strong>, we specialize in helping businesses achieve <strong style={{ color: '#7C4100' }}>EcoVadis certification</strong> with expert guidance, personalized support and a result-driven approach.
              </Typography>

              {/* Checklist */}
              <Stack spacing={2}>
                {points.map((point, idx) => (
                  <Stack direction="row" spacing={1.5} alignItems="center" key={idx}>
                    <CheckCircleIcon sx={{ color: '#7C4100', fontSize: 22 }} />
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 700,
                        color: '#1e293b',
                        fontSize: { xs: '0.95rem', md: '1rem' }
                      }}
                    >
                      {point}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUsSection;
