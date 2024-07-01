import { project } from '@/lib/constants';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Sonu Sahu - Projects',
};
const Projects = () => {
  return (
    <div>
      <div className='text-center'>
        <h1 className='text-3xl'>Projects </h1>
        <p className="text-[#5a5a5a] text-sm py-2">
          Here are some of my projects
        </p>
      </div>
      {project.map((item) => (
        <div key={item.id}>
          <div className="border my-6 p-4 rounded-lg">
            <div className="flex items-center justify-between flex-wrap">
              <Link
                href={item.link}
                className=" text-lg lg:text-xl hover:underline font-medium"
              >
                {item.projectName}
              </Link>
              <div className="flex items-center justify-left gap-3">
                <Link href={item.link} target="_blank" title="visit">
                  <FiExternalLink size={18} />
                </Link>
                <Link href={item.github} target="_blank" title="visit">
                  <BsGithub size={18} />
                </Link>
              </div>
            </div>
            <div>
              <p className="text-[#5a5a5a] text-sm py-2">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
