import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { Toolbar, Typography } from '@mui/material';

const pages = ["Home", "Tools", "FAQ's", "Contact Us"]

const NavBar: React.FC = () => {
  return (
    <AppBar position='static'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
    
  )
}

export default NavBar;