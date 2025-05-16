import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import profileData from '../data/profile.json';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    setAchievements(profileData.achievements);
    setHobbies(profileData.hobbies);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
      
      <Box sx={{ my: { xs: 2, md: 4 } }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          sx={{
            mb: { xs: 3, md: 5 },
            textAlign: { xs: 'center', md: 'left' },
            fontSize: { xs: '2.2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 'bold',
            color: 'primary.main'
          }}
        >
          Achievements & Hobbies
        </Typography>

        <Typography variant="h4" gutterBottom sx={{ mt: { xs: 3, md: 4 }, mb: 3, fontSize: { xs: '1.8rem', md: '2.2rem' }, textAlign: { xs: 'center', md: 'left' } }} color="primary">
          Professional Achievements
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {achievements.map((achievement, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                },
                display: 'flex', 
                flexDirection: 'column',
                background: 'linear-gradient(to right bottom, #ffffff, #f5f5f5)'
              }}>
                <CardContent sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
                  <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'medium', fontSize: { xs: '1.2rem', md: '1.3rem' } }}>
                    {achievement.title}
                  </Typography>
                  <Typography color="text.secondary" gutterBottom sx={{ fontStyle: 'italic', fontSize: { xs: '0.85rem', md: '0.9rem' } }}>
                    Year: {achievement.year}
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'justify', mt: 1.5, fontSize: {xs: '0.95rem', md: '1rem'} }}>
                    {achievement.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" gutterBottom sx={{ mt: { xs: 4, md: 6 }, mb: 3, fontSize: { xs: '1.8rem', md: '2.2rem' }, textAlign: { xs: 'center', md: 'left' } }} color="primary">
          Hobbies & Interests
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {hobbies.map((hobby, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                },
                display: 'flex', 
                flexDirection: 'column',
                background: 'linear-gradient(to right bottom, #ffffff, #f5f5f5)'
              }}>
                <CardContent sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
                  <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'medium', fontSize: { xs: '1.2rem', md: '1.3rem' } }}>
                    {hobby.name}
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'justify', mt: 1, fontSize: {xs: '0.95rem', md: '1rem'} }}>
                    {hobby.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* <Box sx={{ mt: { xs: 3, md: 5 }, py: 2, textAlign: 'center', borderTop: '1px solid #e0e0e0' }}>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Physiotherapy Practice. Maintained by gautamwise.com
        </Typography>
      </Box> */}
    </Container>
  );
};

export default Achievements;