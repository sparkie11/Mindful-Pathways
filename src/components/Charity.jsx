import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Fade, Zoom } from '@mui/material';
import profileData from '../data/profile.json';

const Charity = () => {
  const [charityWork, setCharityWork] = useState([]);

  useEffect(() => {
    setCharityWork(profileData.charity);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 }, height: "100vh" }}>
      <Box sx={{ my: { xs: 2, md: 4 } }}>
        <Fade in timeout={1000}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              gap: 2,
              mb: { xs: 3, md: 4 },
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            <img
              src="https://gautamwise.com/_next/image?url=%2Fimages%2Fprofile.jpeg&w=256&q=75"
              alt="Charity Initiatives"
              style={{ width: 60, height: 60, borderRadius: '50%', marginBottom: '0px' }}
            />
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                background: 'linear-gradient(90deg, #283e51 0%, #485563 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                mb: 0,
                fontSize: { xs: '2.2rem', sm: '2.5rem', md: '3rem' },
              }}
            >
              Charitable Initiatives
            </Typography>
          </Box>
        </Fade>

        <Typography
          variant="h6"
          color="text.secondary"
          paragraph
          sx={{ textAlign: { xs: 'center', sm: 'left' }, fontSize: { xs: '1rem', md: '1.15rem' }, mb: { xs: 3, md: 5 } }}
        >
          Making a difference in the community through dedicated healthcare services and support.
        </Typography>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {charityWork.map((work, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Zoom in style={{ transitionDelay: `${index * 150}ms` }}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
                    background: 'linear-gradient(145deg, #f0f4f8, #d9e2ec)',
                    boxShadow: '0 2px 8px rgba(40, 62, 81, 0.15)',
                    borderRadius: 3,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 30px rgba(40, 62, 81, 0.3)',
                      background: 'linear-gradient(145deg, #d9e2ec, #c0cde6)',
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                      <img
                        src={work.icon || "https://gautamwise.com/_next/image?url=%2Fimages%2Fprofile.jpeg&w=256&q=75"}
                        alt={work.organization || 'Charity Icon'}
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          marginRight: 16,
                          objectFit: 'cover',
                          flexShrink: 0,
                          filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.1))',
                        }}
                      />
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="h5"
                          component="div"
                          sx={{
                            fontWeight: 600,
                            fontSize: { xs: '1.3rem', md: '1.5rem' },
                            color: '#1e2e45',
                          }}
                        >
                          {work.organization}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            mt: 0.5,
                            color: '#395878',
                            fontWeight: '500',
                          }}
                        >
                          {work.role}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant="body1"
                      paragraph
                      sx={{ textAlign: 'justify', mt: 1.5, color: '#2e3a59', fontSize: { xs: '0.95rem', md: '1rem' } }}
                    >
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
