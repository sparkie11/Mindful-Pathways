import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Blogs', path: '/blogs' },
    { title: 'Education', path: '/education' },
    { title: 'Achievements', path: '/achievements' },
    { title: 'Communities', path: '/communities' },
    { title: 'Charity', path: '/charity' },
    { title: 'Thoughts', path: '/thoughts' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            // flexGrow: 1,
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
            mr: { sm: 2,md:12,lg:12 } // Add margin to the right on small screens and up
          }}
        >
          Lavanya
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={RouterLink}
              to={item.path}
              sx={{ color: '#fff',paddingX:"15px"  }}
            >
              {item.title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;