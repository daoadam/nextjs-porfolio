import React from 'react';

type ProjectProps = {
  // You can customize these props based on your needs
  projectName: string;
  projectDescription: string;
  timeline: string;
  tools: string[];
  client: string;
};

const Project: React.FC<ProjectProps> = ({
  projectName = "Project Name",
  projectDescription = "A brief description of your project showcasing its key features and purpose.",
  timeline = "Jan 2025 - Mar 2025",
  tools = ["HTML", "CSS", "JavaScript"],
  client = "Self-directed",
}) => {
  return (

    <div className='flex flex-row items-center justify-center'>
        <div className="max-w-6xl mx-auto p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{projectName}</h1>
        <p className="text-gray-700">{projectDescription}</p>
      </header>

      <nav className="flex gap-4 mb-8">
        <a href="#overview" className="px-4 py-2 border border-gray-200 rounded hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">Overview</a>
        <a href="#iteration-1" className="px-4 py-2 border border-gray-200 rounded hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">Iteration 1</a>
        <a href="#iteration-2" className="px-4 py-2 border border-gray-200 rounded bg-blue-600 text-white border-blue-600">Iteration 2</a>
        <a href="#iteration-3" className="px-4 py-2 border border-gray-200 rounded hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">Iteration 3</a>
      </nav>

      <section id="overview" className="bg-white rounded-lg p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">Project Overview</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-blue-600">Timeline:</span>
            <span>{timeline}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-blue-600">Tools:</span>
            <span>{tools.join(", ")}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-blue-600">Client:</span>
            <span>{client}</span>
          </div>
        </div>
        <p className="mb-4">This is where you can provide a comprehensive overview of your project. Explain the challenge, your approach, and the overall results. This section should give visitors a clear understanding of what your project is about.</p>
        <p>You can include multiple paragraphs to fully describe your project's scope and significance.</p>
      </section>

      <section id="iteration-2" className="bg-white rounded-lg p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">Iteration 2</h2>
        
        <h3 className="text-xl font-bold mt-6 mb-3">Goals</h3>
        <p>Outline the specific goals and objectives for this iteration of your project. What were you trying to achieve?</p>
        
        <h3 className="text-xl font-bold mt-6 mb-3">Process</h3>
        <ul className="pl-0 list-none">
          {[
            {
              title: "Research and Planning",
              description: "Describe the research process and planning stage. Include any insights or discoveries that informed your approach."
            },
            {
              title: "Design Exploration",
              description: "Explain your design process, including sketches, wireframes, or prototypes. Discuss any design challenges and how you addressed them."
            },
            {
              title: "Implementation",
              description: "Detail how you implemented your designs and brought your ideas to life. Include any technical challenges and solutions."
            },
            {
              title: "Testing and Refinement",
              description: "Describe your testing process and how you refined your work based on feedback or results."
            }
          ].map((step, index) => (
            <li key={index} className="relative pl-12 mb-6">
              <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <h4 className="text-lg font-bold mb-1">{step.title}</h4>
              <p>{step.description}</p>
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Results</h3>
        <p>Share the outcomes of this iteration. What worked well? What did you learn? How did this iteration contribute to the overall project?</p>

        <h3 className="text-xl font-bold mt-6 mb-3">Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={`/api/placeholder/600/400`} 
                alt={`Project image ${item}`} 
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <p>Caption for image {item} - describe what this image shows about your project.</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold mt-6 mb-3">Reflection</h3>
        <p>Reflect on this iteration. What did you learn? What would you do differently? How did this iteration inform your future work?</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {["Design", "UX", "Research", "Prototyping"].map((tag) => (
            <span key={tag} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </section>

      
    </div>
    </div>
    
  );
};

export default Project;