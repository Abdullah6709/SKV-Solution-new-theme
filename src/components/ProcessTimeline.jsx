import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  Button
} from '@mui/material';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const steps = [
  {
    stepNum: '01',
    title: 'Gap Analysis & Scope Mapping',
    description: 'We evaluate your existing environmental policies, HR procedures, and ethics documents against EcoVadis evaluation criteria to identify missing score points.',
    icon: <FindInPageIcon sx={{ fontSize: 32, color: '#ffffff' }} />,
    color: '#7C4100',
    tags: ['Policy Audit', 'Scope Mapping', 'Target Score Setup']
  },
  {
    stepNum: '02',
    title: 'Policy & Evidence Documentation',
    description: 'Our consultants draft, structure, and refine missing ESG policies, KPI reporting templates, energy logs, and safety manuals to meet EcoVadis standards.',
    icon: <EditNoteIcon sx={{ fontSize: 32, color: '#ffffff' }} />,
    color: '#9E5400',
    tags: ['ESG Policy Drafting', 'KPI Documentation', 'EcoVadis Evidence']
  },
  {
    stepNum: '03',
    title: 'Questionnaire & Portal Submission',
    description: 'We guide your team line-by-line through the EcoVadis platform questionnaire, cross-linking official evidence files for max credit eligibility.',
    icon: <CloudUploadIcon sx={{ fontSize: 32, color: '#ffffff' }} />,
    color: '#BF6800',
    tags: ['Line-by-Line Filling', 'Evidence Linking', 'Cross-Validation']
  },
  {
    stepNum: '04',
    title: 'Scorecard Review & Medal Award',
    description: 'After EcoVadis analyst review, we analyze your scorecard results, celebrate your medal achievement (Platinum/Gold/Silver/Bronze), and set up annual maintenance.',
    icon: <EmojiEventsIcon sx={{ fontSize: 32, color: '#ffffff' }} />,
    color: '#d97706',
    tags: ['Scorecard Analysis', 'Medal Recognition', 'Annual Maintenance']
  }
];

const ProcessTimeline = () => {
  return (
    <Box
      id="process"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#ffffff',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8, maxWidth: 800, mx: 'auto' }}>

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
            4-Step Path to <span className="gradient-text">EcoVadis Certification</span> Success
          </Typography>
          <Typography variant="body1" sx={{ color: '#64748b', fontSize: '1.05rem' }}>
            A streamlined, hassle-free methodology designed by SKV Solutions to maximize your score
            while minimizing internal workload for your team.
          </Typography>
        </Box>

        {/* Steps Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  p: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 30px rgba(0, 0, 0, 0.08)',
                    borderColor: step.color,
                  },
                }}
              >
                <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  {/* Step Number & Icon Header */}
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2.5 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '16px',
                        bgcolor: step.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 8px 16px ${step.color}40`,
                      }}
                    >
                      {step.icon}
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 900,
                        color: 'rgba(226, 232, 240, 0.8)',
                        fontSize: '2.5rem',
                      }}
                    >
                      {step.stepNum}
                    </Typography>
                  </Stack>

                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#0f172a', mb: 1.5 }}>
                    {step.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: '#64748b', mb: 3, flexGrow: 1, lineHeight: 1.6 }}>
                    {step.description}
                  </Typography>

                  {/* Step Tags */}
                  <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap sx={{ gap: 0.8 }}>
                    {step.tags.map((tag, tagIdx) => (
                      <Chip
                        key={tagIdx}
                        label={tag}
                        size="small"
                        sx={{
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          bgcolor: 'rgba(241, 245, 249, 1)',
                          color: '#334155',
                          border: '1px solid #cbd5e1',
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA Banner */}
        <Box
          sx={{
            bgcolor: 'linear-gradient(135deg, #7C4100 0%, #9E5400 100%)',
            background: 'linear-gradient(135deg, #7C4100 0%, #9E5400 100%)',
            color: '#ffffff',
            borderRadius: '24px',
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(124, 65, 0, 0.3)',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
            Ready to Upgrade Your EcoVadis Scorecard?
          </Typography>
          <Typography variant="body1" sx={{ color: '#e2e8f0', maxWidth: 650, mx: 'auto', mb: 4, fontSize: '1.1rem' }}>
            Speak directly with SKV Solutions senior sustainability consultants today.
            We review your current status free of charge.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="#contact"
              endIcon={<ArrowForwardIcon />}
              sx={{ py: 1.5, px: 4, fontWeight: 800 }}
            >
              Get Free Gap Evaluation
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="tel:8800320483"
              startIcon={<PhoneInTalkIcon />}
              sx={{
                py: 1.5,
                px: 3.5,
                fontWeight: 800,
                color: '#ffffff',
                borderColor: '#ffffff',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: '#ffffff',
                },
              }}
            >
              Call: 8800320483
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ProcessTimeline;
