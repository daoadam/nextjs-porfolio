import React from 'react';
import { cn } from "../utils/cn"; // Adjust the path if needed
import { TextGenerateEffect } from '../components/ui/TextGenerateEffect';
import BorderMagic from './ui/BorderMagic';

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div className=' flex flex-col items-center justify-center text-white'>

        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>

        <TextGenerateEffect 
          className="text-center text-[50px] md:text:5xl lg:text-6xl"
          words="Hi, Im Adam"
          / >

          <p className='text-center md:tracking-wider  text-sm md:text-lg lg:text-1xl'>I&apos;m a full-stack engineer based in Australia</p>
          <p className='text-center md:tracking-wider  text-sm md:text-lg lg:text-1xl'>Student @ The University of Adelaide</p>
          <br/>
          <p className='text-center md:tracking-wider text-sm md:text-lg lg:text-1xl'>Passionate about user experience design,</p>
          <p className='text-center md:tracking-wider text-sm mb-4 md:text-lg md:mb-2 lg:text-1xl lg:mb-1'>productivity, AI, and accessibility</p>


          <div className='flex flex-col md:flex-row initialrow justify-center items-center gap-4'>
              <a href='#About'> 
                <BorderMagic 
                  title="View my work"
                />
              </a>

              <a href='#About'> 
                <BorderMagic 
                  title="About me"
                  bgColor="bg-white-100"
                  textColor="!text-black"
                />
              </a>
          </div>

          


        </div>



      </div>
    </div>
  );
}

export default Hero;
