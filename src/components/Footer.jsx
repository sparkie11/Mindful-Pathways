import { Box, Container, Typography, Link, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1976d2', 
        color: '#e3f2fd',
        py: { xs: 4, sm: 6 },
        mt: 'auto',
        boxShadow: '0 -2px 10px rgba(25, 118, 210, 0.4)',
        transition: 'all 0.3s ease-in-out',
        borderTop: '1px solid rgba(255, 255, 255, 0.3)', 
      }}
    >
      <Container maxWidth="lg">
        <Divider
          sx={{
            mb: 3,
            borderColor: 'rgba(227, 242, 253, 0.5)', 
          }}
        />
        <Typography
          variant="body2"
          align="center"
          sx={{
            fontSize: { xs: '0.85rem', sm: '1rem' },
            color: '#e3f2fd',
            mb: 1,
          }}
        >
          © {new Date().getFullYear()} Physiotherapist Portfolio. All rights reserved.
        </Typography>

        <Typography
          variant="body2"
          align="center"
          sx={{
            fontSize: { xs: '0.85rem', sm: '1rem' },
            color: '#e3f2fd',
          }}
        >
          Maintained by{' '}
          <Link
            href="https://gautamwise.com"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(90deg,rgb(9, 19, 33),rgb(15, 21, 28))', 
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              transition: 'all 0.3s ease-in-out',
            
            }}
          >
            gautamwise.com
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

