import Image from "next/image";
const Grid = () => {
  return (
    <section id="about">
      
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-3 gap-5 md:max-w-5xl lg:max-w-6xl">

      <div className="col-span-2 row-span-2 bg-white-100 rounded-2xl">

        <div className="p-6">
          
          <h1 className="text-2xl font-bold">My Story</h1>

              <div className="flex">
                <div>
          
                  <p className="mt-3 tracking-tighter leading-tight">
                    I'm a curious and collaborative problem-solver <br/>
                    who enjoys learning and iterating to take <br/>
                    concepts from raw ideas to polished designs, <br/>
                    while working within evolving design systems. <br/>
                  </p>
                
                  <p className="mt-3 tracking-tighter leading-tight"> 
                    I'm drawn to purpose-driven missions focused <br/>
                    on making everyday lives easier and sparking <br/>
                    positive change.
                  </p>
                
                  <p className="mt-3 tracking-tighter leading-tight">
                    As a designer, I'm bright, determined, and <br/>
                    constantly ready to grasp new knowledge. I like <br/>
                    to radiate warmth in my collaboration and <br/>
                    communication, and I've worked with teams <br/>
                    across Product, Engineering, Marketing, and <br/>
                    Customer Experience to bring ideas to life. <br/>
                  </p>
                  
                  <p className="mt-3 tracking-tighter leading-tight">
                  Thanks for stopping by!
                  </p>
                </div>

                <div>
                  <Image src="" alt="Picture of young stud"></Image>
                </div>
          </div>
          
          
      </div>
        </div>
 
    

  <div className="col-span-2 bg-white rounded-2xl ">
    <div className="p-6">
    <h1 className="text-2xl font-bold">Stack</h1>
    </div>
  </div>

  <div className="col-span-2 bg-white-100 rounded-2xl">
    <div className="p-6">
    <h1 className="text-2xl font-bold">How I Work</h1>
    </div>
  </div>

  <div className=" bg-white-100 rounded-2xl">
    <div className="p-6">
    <h1 className="text-2xl font-bold">Areas of Interest</h1>
      </div>
  </div>

  <div className=" bg-white-100 rounded-2xl">
  <div className="p-6">
  <h1 className="text-2xl font-bold">Contact Me</h1>
      </div>
  </div>

  <div className="col-span-2 bg-white-100 rounded-2xl">
  <div className="p-6">
  <h1 className="text-2xl font-bold">When not working...</h1>
      </div>
  </div>


  
</div>

    </section>
  );
};

export default Grid;
