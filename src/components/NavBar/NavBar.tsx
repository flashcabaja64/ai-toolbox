import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useScreenSize from '../../hooks/useScreenSize';
import { ArrowDropUp, ArrowDropDown } from '@mui/icons-material';
import { textLinks, imageLinks, audioLinks } from './links';
import { HamburgerIcon, SiteLogo } from '../../assets/svgIcons';

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

const pages: { name: string, path: string }[] = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Tools",
    path: ""
  },
  {
    name: "FAQ's",
    path: "/#faq-section"
  },
  {
    name: "Contact Us",
    path: "/contact"
  },
];

const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openHam, setOpenHam] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>()
  const screenSize = useScreenSize();

  useEffect(() => {
    if(screenSize.width >= 767 && openHam) {
      setOpenHam(false);
      setOpen(false);
    }
  }, [screenSize.width])

  useEffect(() => {
    const handleOutsideClick = (e: Event) => {
      if (!ref?.current?.contains(e.target as HTMLDivElement)) {
        setOpen(false);
      }
    };

    const timeoutId = setTimeout(() => {
      document.addEventListener("click", handleOutsideClick, false);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("click", handleOutsideClick, false);
    };
  });

  const toggleDropDown = () => {
    setOpen(prev => !prev);
  };

  const toggleHamburger = () => {
    setOpenHam(prev => !prev);
  }

  const Links = ({linkType, title}: LinksComponentProps) => {
    return (
      <div className='p-3 max-w-7xl'>
        <p className='border-b-[1.5px] border-gray-400 pb-2 mb-5 text-lg font-medium'>
          {title}
        </p>
        <div className='grid grid-cols-2 gap-7 sm:grid-cols-1'>
          {
            linkType.map(link => (
              <div key={link.heading}>
                <Link to={link.path} className="flex p-3 rounded-lg hover:bg-gray-700" onClick={toggleDropDown}>
                  <div className='mr-2'>
                    {link.component}
                  </div>
                  <div>
                    <p className='hover:underline font-semibold'>{link.heading}</p>
                    <p className='text-sm text-gray-400'>{link.subHeading}</p>
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
    <nav className="border-gray-600 bg-gray-900 fixed w-full z-10">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-[1600px] p-4">
        <Link to="/" className="flex items-center">
          <SiteLogo className="h-8 mr-3" altText="AI Toolbox logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Toolbox</span>
        </Link>

        <button type="button" 
          onClick={toggleHamburger} 
          className="md:inline-flex hidden items-center p-2 ml-1 text-sm rounded-lg focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" 
          aria-controls="mega-menu-full" 
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <HamburgerIcon />
        </button>
        {/* 2xl:w-auto max:w-auto */}
        <div id="mega-menu-full" className={`${openHam ? '!w-full animate-fadeInSlideDown' : 'md:hidden animate-fadeInSlideUp'} max:w-auto items-center justify-between font-medium 2xl:order-1`}>
          <ul className="flex md:flex-col md:p-4 p-0 md:mt-4 md:space-x-0 flex-row space-x-8 mt-0 md:bg-gray-900 border-gray-700">
            {pages.map(page => {
              return page.name === "Tools" ? (
                <li key={page.name} onClick={toggleDropDown}>
                  <button className="block py-2 pl-3 pr-4 rounded md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700" aria-current="page">
                    {page.name} {open ? <ArrowDropUp /> : <ArrowDropDown />}
                  </button>
                </li>
              ) : (
                <li key={page.name}>
                  <Link to={page.path} className="block py-2 pl-3 pr-4 rounded md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700" aria-current="page">
                    {page.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {open && (
        <div id="mega-menu-full-dropdown" className={`${open && 'mt-1 animate-fadeInSlideDown shadow-sm border-y bg-gray-800 border-gray-600 z-10'} `}>
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-white sm:grid-cols-1 md:px-6">
              <Links linkType={textLinks} title="Text AI" />
              <Links linkType={imageLinks} title="Image AI" />
              <Links linkType={audioLinks} title="Audio AI" />
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar;