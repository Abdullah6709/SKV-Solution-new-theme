import React from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import WhyEcoVadisSection from './components/WhyEcoVadisSection.jsx';
import OurProcessSection from './components/OurProcessSection.jsx';
import WhyChooseUsSection from './components/WhyChooseUsSection.jsx';
import Footer from './components/Footer.jsx';
import FloatingActions from './components/FloatingActions.jsx';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#ffffff' }}>
      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections matching uploaded image */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <HeroSection />
        <WhyEcoVadisSection />
        <OurProcessSection />
        <WhyChooseUsSection />
      </Box>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions />
    </Box>
  );
}

export default App;
