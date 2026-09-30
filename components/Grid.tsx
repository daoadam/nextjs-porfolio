import Image from "next/image";
import React from "react";
import Carousel from "./ui/carousel";
import { FaLocationArrow } from "react-icons/fa";
import BorderMagic from "./ui/BorderMagic";
import Link from "next/link";

const Grid = () => {
  return (
    <section id="about" className="flex items-center justify-center">

      

      <div className="p-2 md:p-4 lg:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-auto gap-4 md:max-w-7xl scale-75" >
        
        {/* 🟠 My Story Section */}
        <div className="col-span-2 row-span-2 bg-white-100 rounded-2xl">
          <div className="p-6 ">
            <h1 className="pb-6 md:pb-2 text-2xl font-bold">My Story</h1>
            <div className="flex flex-col-reverse justify-center items-stretch lg:flex-row max-w-5xl mx-auto gap-6">
              
              {/* Text Content */}
              <div className="">
                <p className=" tracking-tighter leading-tight text-base">
                  Hi I&apos;m Adam, a curious and collaborative problem-solver who enjoys learning 
                  and iterating to take concepts from raw ideas to polished designs, 
                  while working within evolving design systems.
                </p>
                <p className="mt-3 tracking-tighter leading-tight text-base"> 
                  I&apos;m drawn to purpose-driven missions focused on making everyday 
                  lives easier and sparking positive change.
                </p>
                <p className="mt-3 tracking-tighter leading-tight text-base">
                  With a background in software development and UX, 
                  I&apos;m bright, determined, and constantly ready to grasp 
                  new knowledge. 
                </p>
                  
                  <p className="mt-3 tracking-tighter leading-tight text-base">
                  I like to radiate warmth in my collaboration and communication, 
                  and I&apos;ve worked with teams across Product, Engineering, Marketing, 
                  and Customer Experience to bring ideas to life.
                  </p>
                <p className="mt-3 tracking-tighter leading-tight text-base">Thanks for stopping by!</p>
              </div>

              {/* Image */}
              <div className="w-auto h-auto  flex-shrink-0 flex flex-col items-center justify-center ">
                <Image 
                  src="/AdamMyStory.jpg" 
                  alt="Picture of young stud" 
                  width={279} 
                  height={499}
                  className=" h-auto max-w-full object-cover rounded-lg shadow-lg"
                />
              </div>

            </div>
          </div>
        </div>

        {/* 🟢 Stack Section */}
        <div className="col-span-2 bg-white-100 rounded-2xl">
          <div className="p-6">
            <h1 className="text-2xl font-bold">Stack</h1>

            <div className="grid grid-cols-4 grid-rows-7 md:grid-cols-6 md:grid-rows-7 lg:grid-cols-9 lg:grid-rows-8 gap-3 md:gap-1 md:max-w-2xl lg:max-w-2xl">
              
              <div className="flex justify-start items-center col-span-3 row-span-1 md:col-span-6 lg:col-span-9">
                <h1 className="text-lg font-semibold ">Software Engineering: </h1>
                </div>

        

              <div className="col-span-2 row-span-1 md:col-span-3 md:row-span-1 lg:col-span-3 lg:row-span-2 flex justify-start  gap-2 items-start">
                <Image 
                  src="/reactIcon.png" 
                  alt="react" 
                  width={1240}
                  height={1240}
                  className="w-12 h-12 object-cover rounded-full border-10 flex items-center justify-center"
                />
                <div className="flex flex-col">
                <p className="font-medium text-base">React</p>
                <p className="text-sm">JS Library</p>
                </div>
              </div>


            
              <div className="col-span-2 row-span-1 md:col-span-3 md:row-span-1 lg:col-span-3 lg:row-span-2 flex justify-start  gap-2 items-start">
                <Image 
                  src="/nextjsIcon.jpeg" 
                  alt="nextjs" 
                  width={1240}
                  height={1240}
                  className="w-12 h-12 object-cover rounded-full border-10 flex items-center justify-center"
                />
                <div className="flex flex-col">
                <p className="font-medium  text-base">Next.js</p>
                <p className="text-sm">React Framework</p>
                </div>
              </div>

              <div className="col-span-2 row-span-1 md:col-span-3 md:row-span-1 lg:col-span-3 lg:row-span-2 flex justify-start  gap-2 items-start">
                <Image 
                  src="/tailwindIcon.jpg" 
                  alt="tailwind" 
                  width={1240}
                  height={1240}
                  className="w-12 h-12 object-cover rounded-full border-10 flex items-center justify-center"
                />
                <div className="flex flex-col">
                <p className="font-medium  text-base">Tailwind</p>
                <p className="text-sm">CSS Framework</p>
                </div>
              </div>

              <div className="col-span-2 row-span-1 md:col-span-3 md:row-span-1 lg:col-span-3 lg:row-span-2 flex justify-start  gap-2 items-start">
                <Image 
                  src="/pythonIcon.png" 
                  alt="python" 
                  width={1240}
                  height={1240}
                  className="w-12 h-12 object-cover rounded-full border-10 flex items-center justify-center"
                />
                <div className="flex flex-col">
                <p className="font-medium  text-base">Python</p>
                <p className="text-sm">Language</p>
                </div>
              </div>

              <div className="col-span-2 row-span-1 md:col-span-3 md:row-span-1 lg:col-span-3 lg:row-span-2 flex justify-start  gap-2 items-start">
                <Image 
                  src="/htmlIcon.png" 
                  alt="trinity" 
                  width={1240}
                  height={1240}
                  className="w-12 h-12 object-cover rounded-full border-10 flex items-center justify-center"
                />
                <div className="flex flex-col">
                <p className="font-medium  text-base">HTML,CSS,JS</p>
                <p className="text-sm">Frontend Trinity</p>
                </div>
              </div>

              

              <div className="flex justify-start items-center col-span-3 row-span-1 md:col-span-6 lg:col-span-9">
                <h1 className="text-lg font-semibold " >User Experience:  </h1>
              </div>

              <div className="col-span-2 row-span-1 md:col-span-3 md:row-span-1 lg:col-span-3 lg:row-span-2 flex gap-2 items-center">
                <Image 
                  src="/figmaIcon.png" 
                  alt="figma" 
                  width={1240}
                  height={1240}
                  className="w-12 h-12 object-cover rounded-full border-10 flex items-center justify-center"
                />
                <div className="flex flex-col">
                <p className="font-medium  text-base">Figma</p>
                <p className="text-sm">Design</p>
                </div>
              </div>

              <div className="col-span-2 row-span-1 md:col-span-3 md:row-span-1 lg:col-span-3 lg:row-span-2 flex justify-start  gap-2 items-start">
                <Image 
                  src="/miroIcon.png" 
                  alt="miro" 
                  width={1240}
                  height={1240}
                  className="w-12 h-12 object-cover rounded-full border-10 flex items-center justify-center"
                />
                <div className="flex flex-col">
                <p className="font-medium  text-base">Miro</p>
                <p className="text-sm">Whiteboarding</p>
                </div>
              </div>

              <div className="col-span-2 row-span-1 md:col-span-3 md:row-span-1 lg:col-span-3 lg:row-span-2 flex justify-start  gap-2 items-start">
                <Image 
                  src="/whimsicalIcon.jpg" 
                  alt="whimsical" 
                  width={1240}
                  height={1240}
                  className="w-12 h-12 object-cover rounded-full border-10 flex items-center justify-center"
                />
                <div className="flex flex-col">
                <p className="font-medium  text-base">Whimsical</p>
                <p className="text-sm">Wireframing</p>
                </div>
              </div>
            
               
         




        
            </div>
            
          </div>
        </div>
       

        {/* 🔵 How I Work Section */}
        <div className="col-span-2 bg-white-100 rounded-2xl">
          <div className="p-6 ">
            <h1 className="text-2xl font-bold">How I Work</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
              <div className="flex flex-col items-center justify-start text-start">

              <div className="flex gap-1 items-center justify-start text-center">
                <Image 
                  src="/cogs.png" 
                  alt="cogs" 
                  width={1240}
                  height={1240}
                  className="w-8 h-8 object-cover rounded-full border-10 flex items-center justify-center"
                />
                <h1 className="font-semibold">Process Lover</h1>
                </div>
                
                <ul className="list-disc pl-8 text-sm">
                    <li>Optimizes workflows for efficiency.</li>
                    <li>Iterates through testing & feedback.</li>
                </ul>
              </div>

              <div className="flex flex-col  items-center justify-start text-start">
                <div className="flex gap-1 items-center justify-start text-center">
                  <Image 
                    src="/color-palette.png" 
                    alt="colorpalette" 
                    width={1240}
                    height={1240}
                    className="w-8 h-8 object-cover rounded-full border-10 flex items-center justify-center"
                  />
                  <h1 className="font-semibold">Design Guru</h1>
                </div>

                <ul className="list-disc pl-8 text-sm">
                  <li>Prioritizes accessibility.</li>
                  <li>Ensures design consistency.</li>
                </ul>
                
              </div>

              <div className="flex flex-col  items-center justify-start text-start">
                <div className="flex gap-1 items-center justify-start text-center">
                  <Image 
                    src="/statistics.png" 
                    alt="chart" 
                    width={1240}
                    height={1240}
                    className="w-8 h-8 object-cover rounded-full border-10 flex items-center justify-center"
                  />
                  <h1 className="font-semibold">Data Driven</h1>
                </div>

                <ul className="list-disc pl-8 text-sm">
                  <li>Bases decisions on data.</li>
                  <li>Uses analytics & A/B testing.</li>
                </ul>
              
              </div>
            </div>
          </div>
        </div>

        {/* 🟣 Areas of Interest Section */}
        <div className="bg-white-100 rounded-2xl">
          <div className="p-6">
            
            
            <h1 className="text-2xl font-bold pb-3">Areas of Interest</h1>

            <div className="flex flex-col justify-start items-start">
            <ul className="list-disc pl-4 text-base">
              <li>Scalable but </li>
              <li>Accessibility & Design</li>
              <li>AI & Automation</li>
              <li>Workflow Optimization</li>
              <li>Web Performance</li>
            </ul>

            <p className="pt-3 pb-2 font-semibold text-lg">Projects 🚀</p>
              <Link href="/work">
             
              <BorderMagic
                  title="View my work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
             
                
              </Link>
            </div>
           
          </div>
        </div>

        {/* 🟡 Contact Me Section */}
        <div className="bg-white-100 rounded-2xl">
      <div className="p-6">
        <h1 className="text-2xl font-bold pb-3">Contact Me</h1>
        <div className="flex flex-col gap-3">

          {/* 🔗 LinkedIn */}
          <a href="https://www.linkedin.com/in/adamddao" 
             target="_blank" rel="noopener noreferrer"
             className="flex gap-3 items-center justify-start text-center hover:opacity-80 transition">
            <Image 
              src="/linked.png" 
              alt="LinkedIn" 
              width={1240}
              height={1240}
              className="w-6 h-6 object-cover rounded-full border-10"
            />
            <h1 className="font-medium">LinkedIn</h1>
          </a>

          {/* 🔗 GitHub */}
          <a href="https://github.com/daoadam" 
             target="_blank" rel="noopener noreferrer"
             className="flex gap-3 items-center justify-start text-center hover:opacity-80 transition">
            <Image 
              src="/github.png" 
              alt="GitHub" 
              width={1240}
              height={1240}
              className="w-6 h-6 object-cover rounded-full border-10"
            />
            <h1 className="font-medium">GitHub</h1>
          </a>

          {/* 🔗 Resume */}
          <a href="/https://violet-josselyn-94.tiiny.site/" 
             target="_blank" rel="noopener noreferrer"
             className="flex gap-3 items-center justify-start text-center hover:opacity-80 transition">
            <Image 
              src="/cv.png" 
              alt="Resume" 
              width={1240}
              height={1240}
              className="w-6 h-6 object-cover rounded-full border-10"
            />
            <h1 className="font-medium">Resume</h1>
          </a>

          {/* ✉️ Email */}
          <a href="mailto:adamddao@gmail.com"
             className="flex gap-3 items-center justify-start text-center hover:opacity-80 transition">
            <Image 
              src="/gmail.png" 
              alt="Email" 
              width={1240}
              height={1240}
              className="w-6 h-6 object-cover rounded-full border-10"
            />
            <h1 className="font-medium">Email</h1>
          </a>

          <a href="/https://discord.com/users/adyzz" 
             target="_blank" rel="noopener noreferrer"
             className="flex gap-3 items-center justify-start text-center hover:opacity-80 transition">
            <Image 
              src="/discord.png" 
              alt="discord" 
              width={1240}
              height={1240}
              className="w-6 h-6 object-cover rounded-full border-10"
            />
            <h1 className="font-medium">Discord</h1>
          </a>

          

        </div>
      </div>
    </div>

        {/* 🟠 When not working Section */}
        <div className="col-span-2 bg-white-100 rounded-2xl">
          <div className="p-6">
            <h1 className="pb-3 text-2xl font-bold">When not working...</h1>
            <Carousel/>
          </div>
        </div>

      </div>
     
     
    </section>
  );
};

export default Grid;
