import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, mt: 'auto' }}>
      <hr/>

      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Lavanya Portfolio. All rights reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Maintained by{' '}
          <Link
            href="https://gautamwise.com"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
          >
            gautamwise.com
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;