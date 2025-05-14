import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Box, Fade, Zoom } from '@mui/material';
import { motion } from 'framer-motion';
import blogsData from '../data/blogs.json';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [open, setOpen] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: '',
    content: '',
    author: ''
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
    setNewBlog(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const newBlogPost = {
      id: blogs.length + 1,
      ...newBlog,
      date: new Date().toISOString().split('T')[0]
    };

    setBlogs(prevBlogs => [...prevBlogs, newBlogPost]);
    handleClose();
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 }, height:"100vh" }}>
      
      <Fade in timeout={1000}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: { xs: 2, md: 4 } }}>
          <img
            src="https://gautamwise.com/_next/image?url=%2Fimages%2Fprofile.jpeg&w=256&q=75"
            alt="Blog Profile"
            style={{ width: '60px', height: '60px', borderRadius: '50%' }}
          />
          <Typography variant="h4" component="h1" gutterBottom sx={{
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 0
          }}>
            Physiotherapy Blog
          </Typography>
        </Box>
      </Fade>
      
      {/* <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        sx={{ mb: 4 }}
      >
        Add New Blog Post
      </Button> */}

      <Grid container spacing={4}>
        {blogs?.map((blog,index) => (
          <Grid item xs={12} md={6} key={blog.id}>
            <Zoom in style={{ transitionDelay: `${index * 150}ms` }}>
              <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)'
                },
                background: 'linear-gradient(to right bottom, #ffffff, #f5f5f5)'
              }}>
                <CardContent sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <img
                      src="https://gautamwise.com/_next/image?url=%2Fimages%2Fprofile.jpeg&w=256&q=75"
                      alt="Blog Post"
                      style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '12px' }}
                    />
                    </Box>
                <Typography variant="h5" component="h2" gutterBottom>
                  {blog.title}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  {blog.date} - {blog.author}
                </Typography>
                <Typography variant="body1" paragraph>
                  {blog.content}
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

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Blog Post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="title"
            label="Title"
            type="text"
            fullWidth
            variant="outlined"
            value={newBlog.title}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="author"
            label="Author"
            type="text"
            fullWidth
            variant="outlined"
            value={newBlog.author}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="content"
            label="Content"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={newBlog.content}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Post</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Blogs;