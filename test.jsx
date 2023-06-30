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