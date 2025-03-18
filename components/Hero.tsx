import React from 'react';
import Link from 'next/link';
import { TextGenerateEffect } from '../components/ui/TextGenerateEffect';
import BorderMagic from './ui/BorderMagic';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    
    <div className="pb-20 pt-20 text-white">
      <div className="flex justify-center my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          
          {/* Text Effect */}
          <TextGenerateEffect
            className="text-center text-4xl md:text-5xl lg:text-6xl"
            words="Hi, I'm Adam"
          />

          {/* Description */}
          <div className="text-center md:tracking-wider text-sm md:text-lg ">
            <p>I'm a full-stack engineer based in Australia</p>
            <p>Student @ The University of Adelaide</p>
            <br/>
            <p>Passionate about user experience design,</p>
            <p>Productivity, AI, and accessibility</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-2">
            <Link href="/work">
            <div>
            <BorderMagic
                title="View my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </div>
              
            </Link>
            <Link href="/about">
            <div>
            <BorderMagic
                title="About me"
                bgColor="bg-white-100"
                textColor="!text-black"
              />
            </div>
              
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

