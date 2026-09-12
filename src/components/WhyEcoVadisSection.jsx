import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack
} from '@mui/material';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupsIcon from '@mui/icons-material/Groups';
import LanguageIcon from '@mui/icons-material/Language';

const features = [
  {
    title: 'Enhance Your Reputation',
    description: 'Build trust with customers, investors and stakeholders.',
    icon: <EnergySavingsLeafIcon sx={{ fontSize: 32, color: '#7C4100' }} />
  },
  {
    title: 'Meet Customer Requirements',
    description: 'Stay compliant with supply chain and regulatory demands.',
    icon: <VerifiedUserIcon sx={{ fontSize: 32, color: '#7C4100' }} />
  },
  {
    title: 'Drive Continuous Improvement',
    description: 'Get actionable insights to strengthen your ESG performance.',
    icon: <TrendingUpIcon sx={{ fontSize: 32, color: '#7C4100' }} />
  },
  {
    title: 'Access Global Opportunities',
    description: 'Stand out in the global marketplace with a trusted certification.',
    icon: <GroupsIcon sx={{ fontSize: 32, color: '#7C4100' }} />
  },
  {
    title: 'Make a Positive Impact',
    description: 'Contribute to a more sustainable and responsible future.',
    icon: <LanguageIcon sx={{ fontSize: 32, color: '#7C4100' }} />
  }
];

const WhyEcoVadisSection = () => {
  return (
    <Box
      id="ecovadis-certification"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: '#ffffff',
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, maxWidth: 850, mx: 'auto' }}>
          <Typography
            variant="subtitle2"
            sx={{
              color: '#7C4100',
              fontWeight: 800,
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              mb: 1.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1.5
            }}
          >
            <span style={{ color: '#94a3b8' }}>——</span> WHY ECOVADIS? <span style={{ color: '#94a3b8' }}>——</span>
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '1.8rem', sm: '2.4rem', md: '2.75rem' },
              color: '#0f172a',
              letterSpacing: '-0.02em',
              mb: 2,
            }}
          >
            A Global Standard for Sustainable Business
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#64748b',
              fontSize: { xs: '0.975rem', md: '1.08rem' },
              lineHeight: 1.65,
            }}
          >
            EcoVadis is the world's most trusted provider of business sustainability ratings, helping companies reduce risks, improve performance and create long-term value.
          </Typography>
        </Box>

        {/* 5 Feature Cards Grid */}
        <Grid container spacing={{ xs: 2.5, md: 3 }} justifyContent="center">
          {features.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  textAlign: 'center',
                  borderRadius: '16px',
                  bgcolor: '#ffffff',
                  border: '1px solid #f1f5f9',
                  transition: 'all 0.3s ease-in-out',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 12px 30px rgba(124, 65, 0, 0.08)',
                    borderColor: 'rgba(124, 65, 0, 0.2)',
                  },
                }}
              >
                {/* Green Soft Circle Icon Header */}
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    bgcolor: 'rgba(124, 65, 0, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2.5,
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    fontSize: '1.05rem',
                    color: '#0f172a',
                    mb: 1.2,
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: '#64748b',
                    fontSize: '0.875rem',
                    lineHeight: 1.55,
                  }}
                >
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyEcoVadisSection;
