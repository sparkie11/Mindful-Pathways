import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import profileData from '../data/profile.json';

const Communities = () => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    setCommunities(profileData.communities);
  }, []);

  return (
    // <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 }, height:"100vh" }}>

      <Box sx={{ my: { xs: 2, md: 4 } }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Professional Communities
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Engaging with healthcare professionals and contributing to the physiotherapy community
        </Typography>

        <Grid container spacing={3}>
          {communities.map((community, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {community.name}
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {community.role}
                  </Typography>
                  <Typography variant="body1">
                    {community.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Maintained by gautamwise.com
        </Typography>
      </Box>
    </Container>
  );
};

export default Communities;