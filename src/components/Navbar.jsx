import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';

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

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        backgroundColor: '#1976d2',
        height: '100%',
        color: '#fff',
      }}
    >
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold' }}>
        Therapist
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.title}
            component={RouterLink}
            to={item.path}
            sx={{
              color: '#fff',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
            }}
          >
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar
          sx={{
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {/* Mobile menu icon */}
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Logo */}
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: 'bold',
              flexGrow: isMobile ? 1 : 0,
            }}
          >
            Therapist
          </Typography>

          {/* Desktop nav */}
          {!isMobile && (
            <Box>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: '#fff',
                    px: 2,
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#1565c0',
                      color: '#e0f7fa',
                    },
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;



