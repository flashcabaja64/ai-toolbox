import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, Typography, Box, Button, Menu, IconButton, Container, AppBar } from '@mui/material';
import { ArrowDropUp, ArrowDropDown, Menu as MenuIcon } from '@mui/icons-material';
import { textLinks, imageLinks, audioLinks } from './links';

type linksType = {
  heading: string;
  subHeading: string;
  path: string;
  component: React.ReactNode
}

type LinksComponentProps = {
  linkType: linksType[];
  title: string
}

const pages: Array<string> = ["Home", "Tools", "FAQ's", "Contact Us"];

const NavBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const Links = ({linkType, title}: LinksComponentProps) => {
    return (
      <div className='p-7 max-w-7xl'>
        <p className='border-b-[1px] border-gray-300 pb-2 mb-5'>
          {title}
        </p>
        <div className='grid grid-cols-2 gap-7 xs:grid-cols-1'>
          {
            linkType.map(link => (
              <div key={link.heading} className='mt-2'>
                <Link to={link.path} className="flex" onClick={handleClose}>
                  <div className="mr-2">
                    {link.component}
                  </div>
                  <div>
                    <p className='hover:underline font-medium'>{link.heading}</p>
                    <p className='text-sm font-normal'>{link.subHeading}</p>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    )
  }

  return (
    <AppBar position='sticky' className='!bg-white'>
      <Container maxWidth="xl" className='bg-white'>
        <Toolbar disableGutters className='justify-between !flex'>
          <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              className='font-bold text-black flex xs:hidden md:flex 2xl:flex text-inherit mr-2 tracking-[.3rem] no-underline'
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
                className='text-black'
              >
              <MenuIcon />
            </IconButton>
            {/* Left Drawer component here for mobile */}
          </Box>
          <Box className="xs:hidden md:flex">
            {pages.map(page => {
              return page === "Tools" ? (
                <Button key={page} className='my-2 !text-black block' onClick={handleClick}>
                  {page} {open ? <ArrowDropDown /> : <ArrowDropUp />}
                </Button>
              ) : (
                <Button key={page} className='my-2 !text-black block'>
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
            className='!top-[14px] xs:!top-[40px]'
            sx={{ "& .MuiMenu-paper": { minWidth: "100%", maxWidth: "1536px", left: "0px !important" } }}
          >
            <Links linkType={textLinks} title="Text AI" />
            <Links linkType={imageLinks} title="Image AI" />
            <Links linkType={audioLinks} title="Audio AI" />
          </Menu>
          <Box className="xs:hidden md:flex">
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar;