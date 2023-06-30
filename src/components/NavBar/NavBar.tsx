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
      <div className='p-3 max-w-7xl'>
        <p className='border-b-[1px] border-gray-300 pb-2 mb-5 text-lg'>
          {title}
        </p>
        <div className='grid grid-cols-2 gap-7 xs:grid-cols-1'>
          {
            linkType.map(link => (
              <div key={link.heading}>
                <Link to={link.path} className="flex p-3 rounded-lg hover:bg-gray-700" onClick={handleClose}>
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
    <nav className="border-gray-600 bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Toolbox</span>
        </a>
        <button type="button" className="md:inline-flex hidden items-center p-2 ml-1 text-sm rounded-lg  focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div id="mega-menu-full" className="items-center justify-between font-medium md:hidden w-full 2xl:w-auto 2xl:order-1">
          <ul className="flex sm:flex-col sm:p-4 p-0 sm:mt-4 flex-row space-x-8 mt-0 md:bg-gray-900 border-gray-700">
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
          </ul>
        </div>
      </div>
      <div id="mega-menu-full-dropdown" className="mt-1 shadow-sm border-y bg-gray-800 border-gray-600 z-10">
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-white sm:grid-cols-1 md:px-6">
            <Links linkType={textLinks} title="Text AI" />
            <Links linkType={imageLinks} title="Image AI" />
            <Links linkType={audioLinks} title="Audio AI" />

          {/* <ul>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-700">
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-700">
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-700">
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-700">
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-700">
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-700">
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  )
}

export default NavBar;