import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { Toolbar, Typography, Box, Button, Menu, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FontDownload, ArrowDropUp, ArrowDropDown } from '@mui/icons-material';
//import { Dropdown, DropdownMenuItem, DropdownNestedMenuItem } from './Dropdown';

const pages = ["Home", "Tools", "FAQ's", "Contact Us"];

const NavBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='static'>
      <Container maxWidth="xl" className='bg-gray-700'>
        <Toolbar disableGutters className='justify-between !flex'>
          <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              className='font-bold flex xs:hidden md:flex 2xl:flex text-inherit mr-2 tracking-[.3rem] no-underline'
            >
              Toolbox
          </Typography>
          <Box className="xs:flex hidden">
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                //onClick={handleOpenNavMenu}
                color="inherit"
              >
              <MenuIcon />
            </IconButton>
            {/* Left Drawer component here for mobile */}
          </Box>
          <Box className="xs:hidden md:flex">
            {pages.map(page => {
              return page === "Tools" ? (
                <Button key={page} className='my-2 !text-white block' onClick={handleClick}>
                  {page} {open ? <ArrowDropDown /> : <ArrowDropUp />}
                </Button>
              ) : (
                <Button key={page} className='my-2 !text-white block'>
                  {page}
                </Button>
              )
            })}
          </Box>
          <Menu 
            open={open} 
            onClose={handleClose} 
            anchorEl={anchorEl} 
            transformOrigin={{ vertical: "top", horizontal: 0}}
            anchorReference='anchorEl'
            className='!top-[14px]'
            sx={{ "& .MuiMenu-paper": { minWidth: "100%", left: "0px !important" } }}
          >
            <div className='p-7'>
              <p className='border-b-[1px] border-gray-300 pb-2 mb-5'>
                Text AI
              </p>
              <div className='mt-2'>
                <Link to="/" className="flex" >
                  <div className="mr-2">
                    <FontDownload/>
                  </div>
                  <div>
                    <p className='hover:underline font-medium'>Image To Text</p>
                    <p className='text-sm font-normal'>Convert your image into text</p>
                  </div>
                </Link>
              </div>
            </div>
            {/* <Stack direction="row" justifyContent="space-evenly">

            </Stack> */}
          </Menu>
          <Box className="xs:hidden md:flex">
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar;