import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Button,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const processSteps = [
  {
    stepNumber: '01',
    title: 'Initial Review',
    icon: <SearchIcon sx={{ fontSize: 26, color: '#ffffff' }} />,
    color: '#7C4100',
    items: [
      'Review of the existing System with respect to Ecovadis Questionnaires',
      'Gap analysis and planning for compliance'
    ]
  },
  {
    stepNumber: '02',
    title: 'Documentation',
    icon: <DescriptionIcon sx={{ fontSize: 26, color: '#ffffff' }} />,
    color: '#9E5400',
    items: [
      'Designing and developing of forms, formats, and procedures',
      'Hand holding/ support for implementation',
      '100% documentation support'
    ]
  },
  {
    stepNumber: '03',
    title: 'Effective Verification',
    icon: <VerifiedUserIcon sx={{ fontSize: 26, color: '#ffffff' }} />,
    color: '#BF6800',
    items: [
      'Submission of documentation as per questionnaires'
    ]
  },
  {
    stepNumber: '04',
    title: 'Achieve Certification',
    icon: <EmojiEventsIcon sx={{ fontSize: 26, color: '#ffffff' }} />,
    color: '#d97706',
    items: [
      'Assessment rating',
      'Corrective action on observations'
    ]
  }
];

const AboutService = () => {
  return (
    <Box
      id="about"
      sx={{
        pb: { xs: 6, sm: 8 },
        bgcolor: '#ffffff',
      }}
    >
      {/* 100% Full-Width Top Banner Bar */}
      <Box
        id="hero"
        sx={{
          width: '100%',
          position: 'relative',
          backgroundImage: 'linear-gradient(135deg, rgba(124, 65, 0, 0.92) 0%, rgba(89, 46, 0, 0.92) 100%), url("/banner_ecovadis.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: '#ffffff',
          py: { xs: 4, sm: 5, md: 6 },
          px: { xs: 2, sm: 4 },
          textAlign: 'center',
          mb: { xs: 5, sm: 6 },
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '1.75rem', sm: '2.4rem', md: '2.8rem' },
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
              mb: 1,
            }}
          >
            ECOVADIS CERTIFICATION
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '0.9rem', sm: '1.05rem', md: '1.15rem' },
              color: '#fef3c7',
              letterSpacing: '0.03em',
              maxWidth: 800,
              mx: 'auto',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
            }}
          >
            Global Sustainability Assessment & Certification Consultancy Services
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>

        {/* Content Paragraphs */}
        <Box sx={{ mb: 5, color: '#334155', lineHeight: 1.75 }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              mb: 2.5,
              color: '#334155',
              lineHeight: 1.75,
            }}
          >
            Ecovadis certification is the world’s leading and largest network of trade partners sharing business data on sustainable development. Ecovadis Certification Assessment provides enterprises with full sustainability services, delivered through a global cloud-based SaaS platform. The Ecovadis certification assessment level covers a wide range of non-financial policy areas including environmental, labor and human rights, ethics, and sustainable procurement impacts.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              mb: 2.5,
              color: '#334155',
              lineHeight: 1.75,
            }}
          >
            The Ecovadis certification assessment combines engineering and development expertise to provide vendors with a simple and reliable scorecard. Following the initial assessment, the Ecovadis certification assessment provides TfS members and suppliers with an opportunity to monitor the progress of sustainable practices in the supply chain.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              mb: 4,
              fontWeight: 600,
              color: '#7C4100',
              lineHeight: 1.75,
            }}
          >
            We can assist organizations with Ecovadis Certification Assessment and Consultancy Services in India and Ecovadis Certification Consultancy Services.
          </Typography>
        </Box>

        {/* Section Heading & Drive Sustainability Text */}
        <Box
          id="services"
          sx={{
            bgcolor: '#f8fafc',
            borderRadius: { xs: '16px', sm: '24px' },
            p: { xs: 3, sm: 4, md: 5 },
            border: '1px solid #e2e8f0',
            mb: { xs: 6, sm: 8 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: '#0f172a',
              mb: 3,
              fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.1rem' },
              letterSpacing: '-0.01em',
            }}
          >
            Drive sustainability and enhance your reputation with Ecovadis certification
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#334155',
              lineHeight: 1.75,
              mb: 3,
              fontSize: { xs: '0.925rem', sm: '1rem' },
            }}
          >
            The Ecovadis certification by SKV is a globally recognized and independent sustainable development standard for businesses of all sizes and types. The certification looks at a company’s sustainable performance in four key areas: the environment, labor and human rights, ethics, and sustainable procurement. The assessment is based on a number of criteria consistent with international sustainability standards, including the UN Global Compact, ILO conventions, and global reporting frameworks Not for the purpose, to show areas for improvement, And their commitment to sustainability allows stakeholders to provide a credible means of demonstration. Ecovadis certification enables companies to raise their profile, increase their competitiveness and contribute to a sustainable future.
          </Typography>


        </Box>

        {/* Implementation & Assessment Process Section */}
        <Box sx={{ mt: { xs: 4, sm: 6 } }}>
          <Box sx={{ textAlign: 'left', mb: { xs: 4, sm: 5 }, maxWidth: 900 }}>
            <Typography
              variant="body1"
              sx={{
                color: '#334155',
                fontSize: { xs: '0.925rem', sm: '1.025rem' },
                lineHeight: 1.75,
              }}
            >
              OurTeam helps organizations implement Ecovadis certification requirements in a flexible and systematic way. The process of program implementation includes initial research, followed by implementation and documentation. Our team provides active support and hand-holding to organizations to achieve successful system implementation and audit results. 100% documentation support is provided to expedite the process. The assessment and implementation process for the Ecovadis certification is described below.:
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
            {processSteps.map((step, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2.5, sm: 3 },
                    height: '100%',
                    borderRadius: '18px',
                    border: '1px solid #e2e8f0',
                    bgcolor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 12px 25px rgba(0, 0, 0, 0.08)',
                      borderColor: step.color,
                    },
                  }}
                >
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.5 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: '12px',
                        bgcolor: step.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {step.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 900, color: '#cbd5e1' }}>
                      {step.stepNumber}
                    </Typography>
                  </Stack>

                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#0f172a', mb: 1.5, fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                    {step.title}
                  </Typography>

                  <Divider sx={{ mb: 1.5 }} />

                  <List disablePadding sx={{ flexGrow: 1 }}>
                    {step.items.map((itemText, itemIdx) => (
                      <ListItem key={itemIdx} disableGutters sx={{ py: 0.5, alignItems: 'flex-start' }}>
                        <ListItemIcon sx={{ minWidth: 22, mt: 0.3 }}>
                          <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: step.color, mt: 0.8 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={itemText}
                          primaryTypographyProps={{
                            fontSize: '0.825rem',
                            fontWeight: 600,
                            color: '#334155',
                            lineHeight: 1.5,
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutService;

