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
      <li>
                <a href="#" className="block py-2 pl-3 pr-4 rounded md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700" aria-current="page">Home</a>
            </li>
            <li>
                <button id="mega-menu-full-dropdown-button" className="flex items-center justify-between w-full py-2 pl-3 pr-4 rounded md:w-auto md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700">Company <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
            </li>
            <li>
                <a href="#" className="block py-2 pl-3 pr-4 rounded md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700">Marketplace</a>
            </li>
            <li>
                <a href="#" className="block py-2 pl-3 pr-4 rounded md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700">Resources</a>
            </li>
            <li>
                <a href="#" className="block py-2 pl-3 pr-4 rounded md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700">Contact</a>
            </li>
    </AppBar>