import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDropUp, ArrowDropDown } from '@mui/icons-material';
import { textLinks, imageLinks, audioLinks } from './links';
import { HamburgerIcon } from '../../assets/svgIcons';

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
    path: "/faqs"
  },
  {
    name: "Contact Us",
    path: "/contact"
  },
];

const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDropDown = () => {
    setOpen(prev => !prev);
  };

  const Links = ({linkType, title}: LinksComponentProps) => {
    return (
      <div className='p-3 max-w-7xl'>
        <p className='border-b-[1px] border-gray-300 pb-2 mb-5 text-lg'>
          {title}
        </p>
        <div className='grid grid-cols-2 gap-7 xs:grid-cols-1'>
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
    <nav className="border-gray-600 bg-gray-900 sticky top-0 z-10">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Toolbox</span>
        </a>
        <button type="button" className="md:inline-flex hidden items-center p-2 ml-1 text-sm rounded-lg  focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <HamburgerIcon />
        </button>
        <div id="mega-menu-full" className="items-center justify-between font-medium md:hidden w-full 2xl:w-auto 2xl:order-1">
          <ul className="flex sm:flex-col sm:p-4 p-0 sm:mt-4 flex-row space-x-8 mt-0 md:bg-gray-900 border-gray-700">
            {pages.map(page => {
              return page.name === "Tools" ? (
                <li key={page.name} onClick={toggleDropDown}>
                  <Link to={''} className="block py-2 pl-3 pr-4 rounded md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700" aria-current="page">
                    {page.name} {open ? <ArrowDropUp /> : <ArrowDropDown />}
                  </Link>
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
        <div id="mega-menu-full-dropdown" className="mt-1 shadow-sm border-y bg-gray-800 border-gray-600 z-10">
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