import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import profileData from '../data/profile.json';

const Communities = () => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    setCommunities(profileData.communities);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 }, minHeight: "100vh" }}>
      <Box sx={{ my: { xs: 2, md: 4 } }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontWeight: '700', color: '#0d47a1', textAlign: { xs: 'center', md: 'left' } }}
        >
          Professional Communities
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          paragraph
          sx={{ textAlign: { xs: 'center', md: 'left' }, maxWidth: 600 }}
        >
          Engaging with healthcare professionals and contributing to the physiotherapy community
        </Typography>

        <Grid container spacing={4}>
          {communities.map((community, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  boxShadow: '0 2px 10px rgba(13, 71, 161, 0.15)',
                  background: 'linear-gradient(135deg, #e8f0fe, #c2dbff)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 10px 25px rgba(13, 71, 161, 0.3)',
                    background: 'linear-gradient(135deg, #c2dbff, #90b2ff)',
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 600, color: '#0d47a1' }}
                  >
                    {community.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="primary"
                    gutterBottom
                    sx={{ fontWeight: 500, fontStyle: 'italic' }}
                  >
                    {community.role}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: '#1a237e', lineHeight: 1.6 }}
                  >
                    {community.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Maintained by gautamwise.com
        </Typography>
      </Box>
    </Container>
  );
};

export default Communities;
