import { useState } from 'react';
import { Box, Typography, TextField, Button, Container, Alert, Snackbar } from '@mui/material';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'YOUR_PUBLIC_KEY'
      );

      setSnackbar({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error'
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prevState => ({ ...prevState, open: false }));
  };

  return (
    <Container maxWidth="sm" sx={{ py: { xs: 4, md: 8 }, bgcolor: '#f5fdfb', borderRadius: 3, boxShadow: '0 4px 15px rgba(0, 109, 101, 0.1)' }}>
      <Box sx={{ my: 3, textAlign: 'center' }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontWeight: '700', color: '#00796b' }}
        >
          Contact Me
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ color: '#004d40', fontSize: { xs: '1rem', md: '1.1rem' } }}
        >
          Feel free to reach out for consultations or inquiries
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            margin="normal"
            variant="outlined"
            sx={{
              bgcolor: 'white',
              borderRadius: 1,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              '& .MuiOutlinedInput-root': {
                transition: 'box-shadow 0.3s ease',
                '&:hover fieldset': {
                  boxShadow: '0 0 8px #00796b',
                  borderColor: '#00796b',
                },
                '&.Mui-focused fieldset': {
                  boxShadow: '0 0 12px #004d40',
                  borderColor: '#004d40',
                },
              },
            }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            margin="normal"
            variant="outlined"
            sx={{
              bgcolor: 'white',
              borderRadius: 1,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              '& .MuiOutlinedInput-root': {
                transition: 'box-shadow 0.3s ease',
                '&:hover fieldset': {
                  boxShadow: '0 0 8px #00796b',
                  borderColor: '#00796b',
                },
                '&.Mui-focused fieldset': {
                  boxShadow: '0 0 12px #004d40',
                  borderColor: '#004d40',
                },
              },
            }}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            margin="normal"
            variant="outlined"
            sx={{
              bgcolor: 'white',
              borderRadius: 1,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              '& .MuiOutlinedInput-root': {
                transition: 'box-shadow 0.3s ease',
                '&:hover fieldset': {
                  boxShadow: '0 0 8px #00796b',
                  borderColor: '#00796b',
                },
                '&.Mui-focused fieldset': {
                  boxShadow: '0 0 12px #004d40',
                  borderColor: '#004d40',
                },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            sx={{
              mt: 3,
              bgcolor: '#00796b',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(0, 121, 107, 0.4)',
              transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                bgcolor: '#004d40',
                boxShadow: '0 6px 18px rgba(0, 77, 64, 0.6)',
              },
            }}
          >
            Send Message
          </Button>
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default Contact;
