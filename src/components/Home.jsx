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
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      <Box
        sx={{
          my: { xs: 2, md: 5 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: 4, md: 6 }
        }}
      >
        <Fade in timeout={1000}>
          <Box sx={{ flex: 1, textAlign: 'center', order: { xs: 2, md: 1 } }}>
            <Box
              component="img"
              src="https://gautamwise.com/_next/image?url=%2Fimages%2Fprofile.jpeg&w=256&q=75"
              alt="Professional Physiotherapist"
              sx={{
                width: '100%',
                maxWidth: { xs: '180px', sm: '220px', md: '280px' },
                height: 'auto',
                borderRadius: '50%',
                boxShadow: '0 12px 30px rgba(33, 150, 243, 0.3)',
                transition: 'transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.08)',
                  boxShadow: '0 18px 45px rgba(33, 150, 243, 0.45)'
                }
              }}
            />
          </Box>
        </Fade>

        <Box sx={{ flex: 1.5, order: { xs: 1, md: 2 }, textAlign: { xs: 'center', md: 'left' } }}>
          <Grow in timeout={1500}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontSize: { xs: '2.3rem', sm: '2.8rem', md: '3.2rem' },
                fontWeight: 700,
                background: 'linear-gradient(45deg, #0288d1, #26a69a)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: { xs: 2, md: 3 },
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
              }}
            >
              Welcome to My Physiotherapy Practice
            </Typography>
          </Grow>

          <Grow in timeout={2000}>
            <Typography
              variant="h6"
              color="text.secondary"
              paragraph
              sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' }, lineHeight: 1.7, color: '#455a64' }}
            >
              Restoring movement, relieving pain, and improving lives—one personalized plan at a time.
            </Typography>
          </Grow>
        </Box>
      </Box>

      <Grid container spacing={4} sx={{ mt: { xs: 3, md: 5 } }}>
        {/* Achievement */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Paper
              elevation={6}
              sx={{
                p: 4,
                height: '100%',
                borderRadius: 3,
                background: 'linear-gradient(to right bottom, #e3f2fd, #e0f7fa)',
                border: '1px solid #81d4fa',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 15px 30px rgba(2, 136, 209, 0.4)'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <img
                  src="https://gautamwise.com/_next/image?url=%2Fimages%2Fprofile.jpeg&w=256&q=75"
                  alt="Achievement"
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    marginRight: '16px',
                    objectFit: 'cover',
                    boxShadow: '0 2px 8px rgba(33, 150, 243, 0.3)'
                  }}
                />
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#0277bd' }}>
                  Latest Achievement
                </Typography>
              </Box>
              <Typography variant="subtitle1" color="#0277bd" gutterBottom>
                {profile.achievements[0].title} - {profile.achievements[0].year}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'justify', color: '#37474f' }}>
                {profile.achievements[0].description}
              </Typography>
            </Paper>
          </motion.div>
        </Grid>

        {/* Recent Thoughts */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              height: '100%',
              borderRadius: 3,
              background: 'linear-gradient(to right bottom, #ffffff, #b2ebf2)',
              border: '1px solid #4dd0e1',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 15px 30px rgba(38, 198, 218, 0.35)'
              }
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: '#00796b' }}>
              Recent Thoughts
            </Typography>
            <Typography variant="h6" color="#004d40" gutterBottom>
              {profile.thoughts[0].title}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'justify', color: '#263238' }}>
              {profile.thoughts[0].content}
            </Typography>
          </Paper>
        </Grid>

        {/* Community Involvement */}
        <Grid item xs={12}>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 3,
              background: 'linear-gradient(to right bottom, #ffffff, #e0f2f1)',
              border: '1px solid #80cbc4',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 15px 30px rgba(38, 166, 154, 0.35)'
              }
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: '#00695c' }}>
              Community Involvement
            </Typography>
            <Typography variant="subtitle1" color="#004d40" gutterBottom>
              {profile.communities[0].name} - {profile.communities[0].role}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'justify', color: '#37474f' }}>
              {profile.communities[0].description}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Footer */}
      <Box
        sx={{
          mt: { xs: 4, md: 6 },
          py: 2,
          textAlign: 'center',
          borderTop: '1px solid #cfd8dc',
          color: '#546e7a',
          fontWeight: 500
        }}
      >
        <Typography variant="body2" color="inherit">
          &copy; {new Date().getFullYear()} Physiotherapy Practice. Crafted with care.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
