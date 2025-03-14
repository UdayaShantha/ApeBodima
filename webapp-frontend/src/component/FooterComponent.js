import React from 'react';
import { Grid, Box, Typography, TextField, Button, IconButton } from '@mui/material';
import { Facebook, LinkedIn, GitHub } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import logo from './images/APEBODIMA.svg';

const FooterComponent = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#f6b3b3', p: 3 }}>
      <Grid container spacing={3}>
        {/* Logo and Newsletter */}
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <img src={logo} alt="logo" style={{ width: '6rem' }} />
            <Typography variant="body1" mt={2}>
              Stay up to date on our latest features and releases by joining our newsletter.
            </Typography>
            <Box component="form" className="subscribe-form" sx={{ display: 'flex', mt: 2, flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center' }}>
              <TextField 
                variant="outlined" 
                placeholder="Your Email Address" 
                sx={{ mb: { xs: 2, sm: 0 }, mr: { sm: 2 }, width: { xs: '100%', sm: 'auto' } }} 
              />
              <Button type="submit" variant="contained" sx={{ width: { xs: '100%', sm: 'auto' }, backgroundColor: '#333' }}>
                Subscribe
              </Button>
            </Box>
          </Box>
        </Grid>
        
        {/* Newsletter Image */}
        <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="newsletter-image.png" alt="Newsletter" className="newsletter-image" style={{ width: '100%', maxWidth: '150px' }} />
        </Grid>
        
        {/* About Us */}
        <Grid item xs={12} md={2}>
          <Typography variant="h6" component="h4">About Us</Typography>
        </Grid>
        
        {/* Quick Links */}
        <Grid item xs={12} md={2}>
          <Typography variant="h6" component="h4">Quick Links</Typography>
          <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
            <li>
              <Link to="/a/#contact-section">
                <Button variant="text" color='primary'>
                  Contact Us
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/a/#learn-more-section">
                <Button variant="text" color='primary'>
                  Learn More
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/a/#qa-section">
                <Button variant="text" color='primary'>
                  FAQ
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/a/#terms-policies-section">
                <Button variant="text" color='primary'>
                  Terms
                </Button>
              </Link>
            </li>
          </Box>
        </Grid>
        
        {/* Social Links */}
        <Grid item xs={12} md={2}>
          <Typography variant="h6" component="h4">Follow Us</Typography>
          <Box className="social-links" sx={{ display: 'flex', flexDirection: 'column', justifyContent: { xs: 'center', md: 'left' }, mt: 2 }}>
            <IconButton aria-label="Facebook" href="https://facebook.com">
              <Facebook />
            </IconButton>
            <IconButton aria-label="LinkedIn" href="https://linkedin.com">
              <LinkedIn />
            </IconButton>
            <IconButton aria-label="GitHub" href="https://github.com">
              <GitHub />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FooterComponent;
