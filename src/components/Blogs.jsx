import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Fade,
  Zoom,
} from '@mui/material';
import { motion } from 'framer-motion';
import blogsData from '../data/blogs.json';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [open, setOpen] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: '',
    content: '',
    author: '',
  });

  useEffect(() => {
    setBlogs(blogsData.blogs);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewBlog({ title: '', content: '', author: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const newBlogPost = {
      id: blogs.length + 1,
      ...newBlog,
      date: new Date().toISOString().split('T')[0],
    };
    setBlogs((prevBlogs) => [...prevBlogs, newBlogPost]);
    handleClose();
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: { xs: 4, md: 6 },
        background: 'linear-gradient(to bottom right, #e3f2fd, #e1f5fe)',
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Fade in timeout={1000}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: { xs: 3, md: 5 },
            }}
          >
            <img
              src="https://gautamwise.com/_next/image?url=%2Fimages%2Fprofile.jpeg&w=256&q=75"
              alt="Blog Profile"
              style={{ width: '60px', height: '60px', borderRadius: '50%' }}
            />
            <Typography
              variant="h4"
              sx={{
                background: 'linear-gradient(to right, #1976d2, #00bcd4)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
            >
              Physiotherapy Blog
            </Typography>
          </Box>
        </Fade>

        {/* Blog Cards */}
        <Grid container spacing={4}>
          {blogs?.map((blog, index) => (
            <Grid item xs={12} md={6} key={blog.id}>
              <Zoom in style={{ transitionDelay: `${index * 100}ms` }}>
                <Card
                  elevation={4}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.4s ease',
                    borderRadius: 3,
                    background: 'linear-gradient(145deg, #ffffff, #f2f2f2)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <img
                        src="https://gautamwise.com/_next/image?url=%2Fimages%2Fprofile.jpeg&w=256&q=75"
                        alt="Blog Post"
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          marginRight: '12px',
                        }}
                      />
                      <Typography variant="subtitle2" color="text.secondary">
                        {blog.date} — {blog.author}
                      </Typography>
                    </Box>
                    <Typography variant="h6" gutterBottom fontWeight={600}>
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {blog.content.length > 180
                        ? `${blog.content.substring(0, 180)}...`
                        : blog.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Zoom>
            </Grid>
          ))}
        </Grid>

        {/* Add Blog Dialog */}
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
          <DialogTitle sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            Add New Blog Post
          </DialogTitle>
          <DialogContent dividers>
            <TextField
              margin="dense"
              name="title"
              label="Title"
              fullWidth
              variant="outlined"
              value={newBlog.title}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="author"
              label="Author"
              fullWidth
              variant="outlined"
              value={newBlog.author}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="content"
              label="Content"
              fullWidth
              multiline
              rows={5}
              variant="outlined"
              value={newBlog.content}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Post
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Blogs;
