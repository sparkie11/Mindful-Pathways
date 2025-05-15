import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import profileData from '../data/profile.json';

const Thoughts = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    setThoughts(profileData.thoughts);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 }, minHeight: '100vh' }}>
      <Box sx={{ my: { xs: 2, md: 4 } }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            mb: { xs: 3, md: 4 },
            textAlign: { xs: 'center', md: 'left' },
            fontSize: { xs: '2.2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 'bold',
            color: '#004d40', 
          }}
        >
          Professional Insights
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          paragraph
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            fontSize: { xs: '1rem', md: '1.15rem' },
            mb: { xs: 3, md: 5 },
            color: '#00695c', 
          }}
        >
          Sharing thoughts and perspectives on physiotherapy and healthcare.
        </Typography>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {thoughts.map((thought, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  background: 'linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%)', // subtle teal gradient
                  color: '#004d40',
                  borderRadius: 3,
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease',
                  boxShadow: '0 2px 10px rgba(0, 77, 64, 0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 30px rgba(0, 77, 64, 0.3)',
                    background: 'linear-gradient(135deg, #80cbc4 0%, #4db6ac 100%)', 
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
                  <Typography
                    variant="h5"
                    component="div"
                    gutterBottom
                    sx={{
                      fontWeight: 'medium',
                      fontSize: { xs: '1.3rem', md: '1.5rem' },
                      color: '#004d40',
                    }}
                  >
                    {thought.title}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    gutterBottom
                    sx={{ fontStyle: 'italic', fontSize: { xs: '0.85rem', md: '0.9rem' }, color: '#00796b' }}
                  >
                    {new Date(thought.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </Typography>

                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ textAlign: 'justify', mt: 1.5, fontSize: { xs: '0.95rem', md: '1rem' }, color: '#004d40' }}
                  >
                    {thought.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: { xs: 3, md: 5 }, py: 2, textAlign: 'center', borderTop: '1px solid #b2dfdb' }}>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Physiotherapy Practice. Maintained by gautamwise.com
        </Typography>
      </Box>
    </Container>
  );
};

export default Thoughts;
