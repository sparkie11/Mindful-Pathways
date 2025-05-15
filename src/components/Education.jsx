import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Zoom,
  Box,
} from '@mui/material';
import profileData from '../data/profile.json';

const Education = () => {
  const [education, setEducation] = useState([]);
  const [accolades, setAccolades] = useState([]);

  useEffect(() => {
    setEducation(profileData.education || []);
    setAccolades(profileData.accolades || []);
  }, []);

  const cardStyle = {
    mb: 2,
    px: 2,
    py: 2,
    background: 'linear-gradient(135deg, #fdfdfd, #f5f7fa)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    borderRadius: '12px',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
      background: 'linear-gradient(135deg, #e3f2fd, #f1f8ff)',
    },
  };

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
          color: 'primary.main',
        }}
      >
        Education & Accolades
      </Typography>

      <Grid container spacing={4}>
        {/* Education */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            gutterBottom
            color="primary"
            sx={{
              mb: 3,
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Education
          </Typography>

          {education.map((edu, index) => (
            <Zoom in key={index} style={{ transitionDelay: `${index * 150}ms` }}>
              <Card sx={cardStyle}>
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: 600, mb: 0.5 }}
                  >
                    {edu.degree}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {edu.institution}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ fontStyle: 'italic', mb: 1 }}
                  >
                    Year: {edu.year}
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                    {edu.description}
                  </Typography>
                </CardContent>
              </Card>
            </Zoom>
          ))}
        </Grid>

        {/* Accolades */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            gutterBottom
            color="primary"
            sx={{
              mb: 3,
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Accolades
          </Typography>

          {accolades.map((accolade, index) => (
            <Zoom in key={index} style={{ transitionDelay: `${index * 150}ms` }}>
              <Card sx={cardStyle}>
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: 600, mb: 0.5 }}
                  >
                    {accolade.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {accolade.issuer}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ fontStyle: 'italic' }}
                  >
                    Year: {accolade.year}
                  </Typography>
                </CardContent>
              </Card>
            </Zoom>
          ))}
        </Grid>
      </Grid>

      <Divider sx={{ my: 5 }} />

      <Typography variant="body2" color="text.secondary" align="center">
        Maintained by gautamwise.com
      </Typography>
    </Container>
  );
};

export default Education;

