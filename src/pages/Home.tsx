import React from 'react';
import Button from '../components/Button';
import Features from '../components/Features';
import Faqs from '../components/Faqs';

const Home: React.FC = () => {
  return (
    <>
      <div 
        className='relative w-[100vw] h-[95vh] max-w-[100] bg-cover bg-hero bg-center bg-no-repeat'
        style={{ backgroundPosition: "50%" }}
      >
        <div className='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed'>
          <div className='flex h-full justify-start items-center'>
            <div className='ml-5'>
              <h1 className='text-[170px] md:text-[125px] xs:text-[100px] text-transparent text-white bg-clip-text font-extrabold bg-gradient-to-tr from-gray-400'>
                Future <br/>is here.
              </h1>
              <h3 className='text-gray-300 text-3xl md:text-2xl xs:text-xl'>
                Experience the power of artificial intelligence.
              </h3>
              <div className='mt-10'>
                <Button className='py-5 px-9 !text-lg xs:py-3 xs:px-5'>Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Faqs />
    </>
  )
}

export default Home;