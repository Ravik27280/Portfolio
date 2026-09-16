import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import Image from 'next/image';

const Projects = () => {
  return (
    <div id="projects" className="relative my-12 lg:my-24 border-t border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Projects background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 pointer-events-none"
      />

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl font-bold tracking-wider rounded-md">
            FEATURED PROJECTS
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Grid of the 2 Resume Flagship Projects */}
      <div className="py-6">
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {projectsData.map((project) => (
            <div key={project.id} className="w-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;