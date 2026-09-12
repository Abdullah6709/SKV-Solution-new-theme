import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Stack,
  Button
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';

const faqs = [
  {
    question: 'What is EcoVadis and why are our clients requesting it?',
    answer: 'EcoVadis is the world’s most trusted business sustainability ratings platform. Global enterprise buyers (such as Fortune 500 multinationals) mandate EcoVadis scorecards to assess supplier ESG risks across Environment, Labor & Human Rights, Ethics, and Sustainable Procurement before awarding contracts.'
  },
  {
    question: 'How long does the EcoVadis assessment process take with SKV Solutions?',
    answer: 'Typically, the entire process takes 4 to 8 weeks depending on document readiness. SKV Solutions conducts an initial gap analysis within 3-5 days, drafts required ESG policies over 2-3 weeks, and completes line-by-line portal submission.'
  },
  {
    question: 'Can SKV Solutions help upgrade an existing low EcoVadis score?',
    answer: 'Yes! Score improvement is one of our primary core specialties. We analyze your previous EcoVadis scorecard feedback, identify point deductions, craft missing policy documents, and re-submit structured evidence for score upgrade.'
  },
  {
    question: 'What documents do we need to provide to SKV Solutions?',
    answer: 'Key documents include HR policy handbooks, health & safety audit logs, energy/waste utility bills, company code of conduct, anti-corruption policies, and supplier contracts. If your company lacks formal written policies, SKV Solutions will draft customized policies tailored to your organization.'
  },
  {
    question: 'What are the EcoVadis Medal thresholds?',
    answer: 'EcoVadis medals are awarded based on percentile performance: Platinum (Top 1%, score ~78+), Gold (Top 5%, score ~65-77), Silver (Top 15%, score ~56-64), and Bronze (Top 35%, score ~48-55).'
  },
  {
    question: 'How often does EcoVadis re-assessment happen?',
    answer: 'EcoVadis scorecards are valid for 12 months. Most enterprise buyers require annual re-assessments. SKV Solutions provides annual maintenance services to keep your policies updated and ensure continuous medal retention.'
  }
];

const FaqSection = () => {
  const [expanded, setExpanded] = useState(0);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#ffffff',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8, maxWidth: 800, mx: 'auto' }}>
          <Chip
            icon={<HelpOutlineIcon sx={{ color: '#7C4100 !important' }} />}
            label="FREQUENTLY ASKED QUESTIONS"
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
            Everything You Need to Know About <span className="gradient-text">EcoVadis</span>
          </Typography>
          <Typography variant="body1" sx={{ color: '#64748b', fontSize: '1.05rem' }}>
            Have questions regarding EcoVadis assessment, scorecard timeline, or SKV Solutions consulting workflow?
          </Typography>
        </Box>

        {/* Accordions */}
        <Box sx={{ maxWidth: 900, mx: 'auto', mb: 6 }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              sx={{
                mb: 2,
                borderRadius: '16px !important',
                border: '1px solid #e2e8f0',
                boxShadow: expanded === index ? '0 10px 25px rgba(124, 65, 0, 0.08)' : 'none',
                '&:before': { display: 'none' },
                transition: 'all 0.3s ease',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#7C4100' }} />}
                sx={{
                  py: 1.5,
                  px: 3,
                  bgcolor: expanded === index ? 'rgba(124, 65, 0, 0.04)' : '#ffffff',
                  borderRadius: '16px',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    color: expanded === index ? '#7C4100' : '#0f172a',
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3, pt: 1 }}>
                <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.7 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Still Have Questions Box */}
        <Box
          sx={{
            bgcolor: '#f8fafc',
            borderRadius: '20px',
            p: 4,
            textAlign: 'center',
            border: '1px solid #cbd5e1',
            maxWidth: 800,
            mx: 'auto',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#7C4100', mb: 1 }}>
            Have More Questions? We are Here to Help!
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748b', mb: 3 }}>
            Contact SKV Solutions directly for a personalized consultation regarding your EcoVadis requirements.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              href="tel:8800320483"
              startIcon={<PhoneInTalkIcon />}
              sx={{ fontWeight: 700, py: 1.2, px: 3 }}
            >
              Call Us: 8800320483
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              href="mailto:enquiry@skvs.in"
              startIcon={<EmailIcon />}
              sx={{ fontWeight: 700, py: 1.2, px: 3 }}
            >
              Email: enquiry@skvs.in
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default FaqSection;
