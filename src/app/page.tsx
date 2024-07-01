import { skills, socialMediaLink } from '@/lib/constants';
import React from 'react';
import Image from 'next/image';

function Home() {
  return (
    <div id="about" className="w-full h-auto lg:mt-4 ">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="text-left mb-10 ">
            <div className="gap-4 flex justify-between items-center mt-2">
              <div>
                <img
                  alt="logo"
                  className="border rounded-full lg:w-24 w-24 lg:h-24 h-24 aspect-square"
                  src="./logo.png"
                  width={120}
                  height={120}
                />
              </div>
              <div className="flex-col flex flex-1 space-y-0.5">
                <h1 className="lg:text-4xl text-[20px] font-extrabold">
                  Hi, I&apos;m Sonu Sahu👋
                </h1>
                <p className="mt-2 text-sm lg:text-[16px]">
                  Full Stack Developer | Building Engaging Web Applications that
                  Retain Users
                </p>
              </div>
            </div>

            <div className="leading-7 text-[16px] text-[#838383]">
              <div className="mt-6">
                <h1 className="text-xl font-bold text-black mb-1">About Me</h1>
              </div>
              <p>
                Hello, I’m Sonu Sahu, a passionate and dedicated{' '}
                <span className=" font-semibold text-black">
                  Full-Stack Developer{' '}
                </span>{' '}
                with over two years of experience in designing and developing
                websites and applications from scratch. My expertise encompasses
                both frontend and backend development, allowing me to create
                comprehensive, end-to-end solutions that are not only visually
                appealing but also highly functional and user-friendly.
              </p>

              <p className="mt-4">
                My focus is on building responsive user interfaces for web-based
                applications that deliver a seamless and enjoyable user
                experience. I am proficient in using React.js and Next.js for
                frontend development, and I have extensive experience with
                databases such as PostgreSQL and MongoDB.
              </p>

              <p className="mt-4">
                I am confident in my ability to be a valuable asset to any team.
                If you have a project or need a web developer, I would be
                thrilled to collaborate with you to create something truly
                remarkable that makes a real difference. Let&apos;s work
                together to bring your vision to life and achieve outstanding
                results.
              </p>
            </div>
            <div>
              <div className="mt-6 mb-1">
                <h1 className="text-xl font-bold">Skills</h1>
              </div>
              <div className="flex ">
                <div className="gap-4 flex flex-wrap">
                  {skills.map((item) => (
                    <li key={item.id} className="text-[16px]">
                      {item.name}
                    </li>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="mt-6 mb-1">
                <h1 className="text-xl font-bold">Connect with me:</h1>
              </div>
              <div className="flex items-end justify-between">
                <div className="flex gap-4 flex-wrap text-[16px]">
                  {socialMediaLink.map((item) => (
                    <li key={item.id}>
                      {item.title} -{' '}
                      <a
                        href={item.href}
                        className="text-blue-700 font-medium"
                        target="_blank"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
