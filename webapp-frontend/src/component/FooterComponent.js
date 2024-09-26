import React from 'react';
import { Grid, Box, Typography, TextField, Button, IconButton } from '@mui/material';
import { Facebook, LinkedIn, GitHub } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import logo from './images/APEBODIMA.svg';

const FooterComponent = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#f6b3b3', p: { xs: 3, md: 5 }, textAlign: { xs: 'center', md: 'left' } }}>
      <Grid container spacing={3}>
        {/* Logo and Newsletter */}
        <Grid item xs={12} md={4}>
          <Box>
            <img src={logo} alt="logo" style={{ width: '6rem' }} />
            <Typography variant="body1" mt={2}>
              Stay up to date on our latest features and releases by joining our newsletter.
            </Typography>
            <Box component="form" className="subscribe-form" sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2 }}>
              <TextField 
                variant="outlined" 
                placeholder="Your Email Address" 
                sx={{ mb: { xs: 2, sm: 0 }, mr: { sm: 2 }, width: { xs: '100%', sm: 'auto' } }} 
              />
              <Button type="submit" variant="contained" sx={{ backgroundColor: '#333', width: { xs: '100%', sm: 'auto' } }}>
                Subscribe
              </Button>
            </Box>
          </Box>
        </Grid>
        
        {/* Main Sections: About Us, Quick Links, Contact Us */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            
            {/* About Us Column */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" component="h4" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2">
                We are a company dedicated to providing the best platform to connect students with affordable accommodation options.
              </Typography>
            </Grid>

            {/* Quick Links Column */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" component="h4" gutterBottom>
                Quick Links
              </Typography>
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

            {/* Contact Us Column */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" component="h4" gutterBottom>
                Contact Us
              </Typography>
             

              {/* Social Links */}
              <Box component="ul" sx={{ listStyle: 'none',mt: 2, display: 'flex',flexDirection: 'column', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <li>
                <IconButton aria-label="Facebook" href="https://facebook.com">
                  <Facebook />
                </IconButton>
                </li>
                <li>
                <IconButton aria-label="LinkedIn" href="https://linkedin.com">
                  <LinkedIn />
                </IconButton>
                </li>
                <li>
                <IconButton aria-label="GitHub" href="https://github.com">
                  <GitHub />
                </IconButton>
                </li>
              </Box>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FooterComponent;
