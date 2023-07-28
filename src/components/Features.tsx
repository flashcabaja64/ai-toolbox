import React from 'react';
import Container from './Container';
import { ReadMoreArrow } from '../assets/svgIcons';

const Features: React.FC = () => {
  return (
    <Container className='py-4'>
      <div className="w-full">
        <h2 className="my-8 text-2xl font-bold text-black md:text-4xl">
          Intelligent Personalization: Empowering Tools at Your Fingertips
        </h2>
        <p className="text-gray-500">
          Experience the transformative capabilities of our diverse AI tools and embrace the potential of artificial intelligence, elevating your online experience to new heights. Don't miss out on the future take the next step and explore the limitless possibilities of our AI website now!
        </p>
      </div>
      <div
      className="mt-16 grid grid-cols-4 divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:divide-y-0"
    >
      <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
            className="w-12"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div className="space-y-2">
            <h5
              className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
            >
              First feature
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
              Convert text to stunning visuals effortlessly with AI-Generated Images.
            </p>
          </div>
          <a href="#" className="flex items-center justify-between group-hover:text-secondary hover:font-medium">
            <span className="text-sm">Explore Now!</span>
            <ReadMoreArrow />               
          </a>
        </div>
      </div>
      <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png"
            className="w-12"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div className="space-y-2">
            <h5
              className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
            >
              Second feature
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
            Save time with AI-Powered Summaries, extracting key insights from lengthy text.
            </p>
          </div>
          <a href="#" className="flex items-center justify-between group-hover:text-secondary hover:font-medium">
            <span className="text-sm">Explore Now!</span>
            <ReadMoreArrow />                  
          </a>
        </div>
      </div>
      <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png"
            className="w-12"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div className="space-y-2">
            <h5
              className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
            >
              Third feature
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
            Bring your content to life with Text-to-Audio Conversion
            </p>
          </div>
          <a href="#" className="flex items-center justify-between group-hover:text-secondary hover:font-medium">
            <span className="text-sm">Explore Now!</span>
            <ReadMoreArrow />                   
          </a>
        </div>
      </div>
      <div
        className="group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
      >
        <div
          className="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png"
            className="w-12"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div className="space-y-2">
            <h5
              className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
            >
              More features
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
              There are many more features at the touch of your fingertips.
            </p>
          </div>
          <a href="#" className="flex items-center justify-between group-hover:text-secondary hover:font-medium">
            <span className="text-sm">Explore Now!</span>
            <ReadMoreArrow />                  
          </a>
        </div>
      </div>
    </div>
    </Container>
  )
}

export default Features;