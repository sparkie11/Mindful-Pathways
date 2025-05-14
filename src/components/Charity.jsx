import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Fade, Zoom } from '@mui/material';
import { motion } from 'framer-motion';
import profileData from '../data/profile.json';

const Charity = () => {
  const [charityWork, setCharityWork] = useState([]);

  useEffect(() => {
    setCharityWork(profileData.charity);
  }, []);

  return (
    // <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 }, height:"100vh" }}>

      <Box sx={{ my: { xs: 2, md: 4 } }}>
        <Fade in timeout={1000}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row'}, alignItems: 'center', gap: 2, mb: { xs: 3, md: 4 }, textAlign: { xs: 'center', sm: 'left'} }}>
            <img
              src="https://gautamwise.com/_next/image?url=%2Fimages%2Fprofile.jpeg&w=256&q=75" // Consider a specific icon for charity
              alt="Charity Initiatives"
              style={{ width: '60px', height: '60px', borderRadius: '50%', marginBottom: { xs: '16px', sm: '0px' } }}
            />
            <Typography variant="h3" component="h1" gutterBottom sx={{
              background: 'linear-gradient(45deg, #1976D2 30%, #42A5F5 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 0,
              fontSize: { xs: '2.2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 'bold'
            }}>
              Charitable Initiatives
            </Typography>
          </Box>
        </Fade>
        <Typography variant="h6" color="text.secondary" paragraph sx={{ textAlign: { xs: 'center', sm: 'left'}, fontSize: { xs: '1rem', md: '1.15rem' }, mb: { xs: 3, md: 5} }}>
          Making a difference in the community through dedicated healthcare services and support.
        </Typography>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {charityWork.map((work, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Zoom in style={{ transitionDelay: `${index * 150}ms` }}>
                <Card sx={{
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  },
                  background: 'linear-gradient(to right bottom, #ffffff, #f5f5f5)'
                }}>
                  <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                      <img
                        src={work.icon || "https://gautamwise.com/_next/image?url=%2Fimages%2Fprofile.jpeg&w=256&q=75"} // Use dynamic icon if available
                        alt={work.organization || 'Charity Icon'}
                        style={{ width: '48px', height: '48px', borderRadius: '8px', marginRight: '16px', objectFit: 'cover', flexShrink: 0 }}
                      />
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" component="div" sx={{ fontWeight: 'medium', fontSize: { xs: '1.3rem', md: '1.5rem' } }}>
                          {work.organization}
                        </Typography>
                        <Typography variant="h6" color="primary.dark" sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, mt: 0.5 }}>
                          {work.role}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1" paragraph sx={{ textAlign: 'justify', mt: 1.5 }}>
                      {work.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: { xs: 3, md: 5 }, py: 2, textAlign: 'center', borderTop: '1px solid #e0e0e0' }}>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Physiotherapy Practice. Maintained by gautamwise.com
        </Typography>
      </Box>
    </Container>
  );
};

export default Charity;