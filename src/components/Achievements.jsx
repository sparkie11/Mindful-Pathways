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
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
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
            color: '#1a237e',
          }}
        >
          Achievements & Hobbies
        </Typography>

        {/* --- Achievements Section --- */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            mt: { xs: 3, md: 4 },
            mb: 3,
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            textAlign: { xs: 'center', md: 'left' },
            color: '#0d47a1',
          }}
        >
          Professional Achievements
        </Typography>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          {achievements.map((achievement, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
                  transition: 'all 0.4s ease',
                  borderRadius: 3,
                  boxShadow: '0 2px 12px rgba(33, 150, 243, 0.2)',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 10px 24px rgba(30, 136, 229, 0.3)',
                    background: 'linear-gradient(135deg, #bbdefb, #90caf9)',
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, fontSize: { xs: '1.2rem', md: '1.3rem' }, color: '#0d47a1' }}
                  >
                    {achievement.title}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ fontStyle: 'italic', fontSize: { xs: '0.85rem', md: '0.9rem' } }}
                  >
                    Year: {achievement.year}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: 'justify',
                      mt: 1.5,
                      fontSize: { xs: '0.95rem', md: '1rem' },
                      color: '#263238',
                    }}
                  >
                    {achievement.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* --- Hobbies Section --- */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            mt: { xs: 4, md: 6 },
            mb: 3,
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            textAlign: { xs: 'center', md: 'left' },
            color: '#4a148c',
          }}
        >
          Hobbies & Interests
        </Typography>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          {hobbies.map((hobby, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  background: 'linear-gradient(135deg, #f3e5f5, #ce93d8)',
                  transition: 'all 0.4s ease',
                  borderRadius: 3,
                  boxShadow: '0 2px 12px rgba(156, 39, 176, 0.2)',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 10px 24px rgba(123, 31, 162, 0.3)',
                    background: 'linear-gradient(135deg, #ce93d8, #ba68c8)',
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, fontSize: { xs: '1.2rem', md: '1.3rem' }, color: '#6a1b9a' }}
                  >
                    {hobby.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: 'justify',
                      mt: 1,
                      fontSize: { xs: '0.95rem', md: '1rem' },
                      color: '#4e342e',
                    }}
                  >
                    {hobby.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          mt: { xs: 3, md: 6 },
          py: 2,
          textAlign: 'center',
          borderTop: '1px solid #ccc',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Physiotherapy Practice. Maintained by gautamwise.com
        </Typography>
      </Box>
    </Container>
  );
};

export default Achievements;
