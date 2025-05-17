import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Communities from './components/Communities';
import Charity from './components/Charity';
import Thoughts from './components/Thoughts';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      // main: '#2196f3',
      main: '#c3bfd9',

    },
    secondary: {
      // main: '#f50057',
      main: '#f9f8f6',

    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/charity" element={<Charity />} />
            <Route path="/thoughts" element={<Thoughts />} />
          </Routes>
        </Container>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
