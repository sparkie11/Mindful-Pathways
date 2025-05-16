import { Box, Typography, Container, Grid, Paper, Fade, Grow } from '@mui/material';
import { useEffect, useState } from 'react';
import profileData from '../data/profile.json';
import { motion } from 'framer-motion';

const Home = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setProfile(profileData);
  }, []);

  if (!profile) return null;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
      <Box sx={{ my: { xs: 2, md: 4 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: { xs: 3, md: 4 } }}>
        <Fade in timeout={1000}>
          <Box sx={{ flex: 1, textAlign: 'center', order: { xs: 2, md: 1 } }}>
            <Box
              component="img"
              src="/assets/lavanya.jpeg"
              alt="Professional Physiotherapist"
              sx={{
                width: '100%',
                maxWidth: { xs: '200px', sm: '250px', md: '300px' },
                height: 'auto',
                borderRadius: '50%',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.2)'
                }
              }}
            />
          </Box>
        </Fade>
        <Box sx={{ flex: 1.5, order: { xs: 1, md: 2 }, textAlign: { xs: 'center', md: 'left' } }}>
          <Grow in timeout={1500}>
            <Typography variant="h2" component="h1" gutterBottom sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #1976D2 30%, #42A5F5 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: { xs: 2, md: 3 }
            }}>
              Welcome to My Physiotherapy Practice
            </Typography>
          </Grow>
          <Grow in timeout={2000}>
            <Typography variant="h5" color="text.secondary" paragraph sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' }, mb: { xs: 3, md: 0 } }}>
              Dedicated to helping you achieve optimal physical health and wellness through expert care and personalized treatment plans.
            </Typography>
          </Grow>
        </Box>
      </Box>

      <Grid container spacing={{ xs: 2, md: 4 }} sx={{ mt: { xs: 3, md: 5 } }}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper elevation={3} sx={{
              p: 3,
              height: '100%',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)'
              },
              background: 'linear-gradient(to right bottom, #ffffff, #f5f5f5)'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <img
                  src="/assets/lavanya.jpeg" // Consider a specific icon for achievements
                  alt="Latest Achievement"
                  style={{ width: '48px', height: '48px', borderRadius: '8px', marginRight: '16px', objectFit: 'cover' }}
                />
                <Typography variant="h5" component="div" sx={{ m: 0, fontWeight: 'medium', fontSize: { xs: '1.4rem', md: '1.5rem' } }}>
                  Latest Achievement
                </Typography>
              </Box>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                {profile.achievements[0].title} - {profile.achievements[0].year}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                {profile.achievements[0].description}
              </Typography>
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ 
            p: 3, 
            height: '100%',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)'
            },
            background: 'linear-gradient(to right bottom, #ffffff, #f5f5f5)' 
          }}>
            <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'medium', fontSize: { xs: '1.4rem', md: '1.5rem' } }}>
              Recent Thoughts
            </Typography>
            <Typography variant="h6" color="primary.dark" gutterBottom sx={{ fontSize: { xs: '1.1rem', md: '1.2rem' } }}>
              {profile.thoughts[0].title}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'justify' }}>
              {profile.thoughts[0].content}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ 
            p: 3, 
            mt: { xs: 2, md: 4 },
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)'
            },
            background: 'linear-gradient(to right bottom, #ffffff, #f5f5f5)'
          }}>
            <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'medium', fontSize: { xs: '1.4rem', md: '1.5rem' } }}>
              Community Involvement
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {profile.communities[0].name} - {profile.communities[0].role}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'justify' }}>
              {profile.communities[0].description}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* <Box sx={{ mt: { xs: 3, md: 5 }, py: 2, textAlign: 'center', borderTop: '1px solid #e0e0e0' }}> */}
        {/* <Typography variant="body2" color="text.secondary"> */}
          {/* &copy; {new Date().getFullYear()} Physiotherapy Practice. Maintained by gautamwise.com */}
        {/* </Typography> */}
      {/* </Box> */}
    </Container>
  );
};

export default Home;