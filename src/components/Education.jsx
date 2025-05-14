import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Divider, Zoom, Box } from '@mui/material';
import profileData from '../data/profile.json';

const Education = () => {
  const [education, setEducation] = useState([]);
  const [accolades, setAccolades] = useState([]);

  useEffect(() => {
    setEducation(profileData.education);
    setAccolades(profileData.accolades);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom 
        sx={{
          mt: { xs: 2, md: 4 }, 
          mb: { xs: 3, md: 5 },
          textAlign: { xs: 'center', md: 'left' },
          fontSize: { xs: '2.2rem', sm: '2.5rem', md: '3rem' },
          fontWeight: 'bold',
          color: 'primary.main'
        }}
      >
        Education & Accolades
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom color="primary" sx={{ mb: 3, fontSize: { xs: '1.8rem', md: '2.2rem' }, textAlign: { xs: 'center', md: 'left' } }}>
            Education
          </Typography>
          {education.map((edu, index) => (
            <Zoom in style={{ transitionDelay: `${index * 150}ms` }}>
              <Card key={index} sx={{
                mb: 2,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)'
                },
                background: 'linear-gradient(to right bottom, #ffffff, #f5f5f5)'
              }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                    <img
                      src={edu.icon || "https://gautamwise.com/_next/image?url=%2Fimages%2Fprofile.jpeg&w=256&q=75"} 
                      alt={edu.institution || 'Education Icon'}
                      style={{ width: '48px', height: '48px', borderRadius: '8px', marginRight: '16px', objectFit: 'cover', flexShrink: 0 }}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" component="div" sx={{ fontWeight: 'medium' }}>
                        {edu.degree}
                      </Typography>
                      <Typography color="text.secondary" variant="subtitle1">
                        {edu.institution}
                      </Typography>
                    </Box>
                  </Box>
                <Typography color="text.secondary" gutterBottom sx={{ fontStyle: 'italic', mt: 0.5 }}>
                  Year: {edu.year}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1.5, textAlign: 'justify' }}>
                  {edu.description}
                </Typography>
              </CardContent>
            </Card>
            </Zoom>
          ))}
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom color="primary" sx={{ mb: 3, fontSize: { xs: '1.8rem', md: '2.2rem' }, textAlign: { xs: 'center', md: 'left' } }}>
            Accolades
          </Typography>
          {accolades.map((accolade, index) => (
            <Zoom in style={{ transitionDelay: `${index * 150}ms` }}>
              <Card key={index} sx={{
                mb: 2,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)'
                },
                background: 'linear-gradient(to right bottom, #ffffff, #f5f5f5)'
              }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                    <img
                      src={accolade.icon || "https://gautamwise.com/_next/image?url=%2Fimages%2Fprofile.jpeg&w=256&q=75"} 
                      alt={accolade.title || 'Accolade Icon'}
                      style={{ width: '48px', height: '48px', borderRadius: '8px', marginRight: '16px', objectFit: 'cover', flexShrink: 0 }}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" component="div" sx={{ fontWeight: 'medium' }}>
                        {accolade.title}
                      </Typography>
                      <Typography color="text.secondary" variant="subtitle1">
                        {accolade.issuer}
                      </Typography>
                    </Box>
                  </Box>
                <Typography color="text.secondary" sx={{ fontStyle: 'italic', mt: 0.5 }}>
                  Year: {accolade.year}
                </Typography>
              </CardContent>
            </Card>
            </Zoom>
          ))}
        </Grid>
    </Grid>

      <Divider sx={{ my: 4 }} />
      
      <Typography variant="body2" color="text.secondary" align="center">
        Maintained by gautamwise.com
      </Typography>
    </Container>
  );
};

export default Education;