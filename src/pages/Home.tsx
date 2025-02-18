

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { Container, TextField, Button, Typography, Card, CardContent, Box, Stack } from '@mui/material';
import Navbar from '../components/Navbar';
import AnalyzeButton from '../Utils/AnalyzeButton.tsx';
import DescCard from '../Utils/DescCard.tsx';
import SearchButton from '../Utils/SearchButton.tsx';
import Particles from '../Utils/Background.tsx';



const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    //console.log("test1");
      navigate('/article/');
  };

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      
      {/* Background Particles Container */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0, // Ensures this is behind everything else
          pointerEvents: 'none', // Prevents background from capturing any mouse events
        }}
      >
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </Box>
    <Box sx={{ bgcolor: '#111827', color: 'white', minHeight: '100vh' }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
  <Typography
    variant="h2"
    fontWeight="bold"
    gutterBottom
    sx={{
        background: 'linear-gradient(90deg, #3b82f6, #2563eb)', // Mid-blue gradient
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)', // Softer shadow for depth
    }}
  >
    Discover Different Perspectives
  </Typography>
  <Typography variant="h6" sx={{ color: 'white', maxWidth: '600px', mx: 'auto' }}>
    Enter an article URL to analyze multiple viewpoints and engage in meaningful discussions.
  </Typography>
</Box>

        
        <Box component="form" maxWidth="sm" mx="auto" mb={8}>
          <SearchButton />


          <div className='align-centre ml-50 mt-10' onClick={()=>{handleSubmit()}}>
            <AnalyzeButton />
          </div>
        </Box>

        <Stack spacing={4} direction={{ xs: 'column', md: 'row' }} justifyContent="center" alignItems="center">
          {[
            { title: 'Multiple Perspectives', description: 'Get diverse viewpoints on any topic from various reliable sources.' },
            { title: 'AI-Powered Analysis', description: 'Advanced AI algorithms analyze and summarize different opinions.' },
            { title: 'Interactive Discussion', description: 'Engage in meaningful conversations about the content.' },
          ].map((feature, index) => (
            <DescCard key={index} title={feature.title} description={feature.description} />
          ))}
        </Stack>

      </Container>
    </Box>
    </Box>
  );
};

export default Home;

