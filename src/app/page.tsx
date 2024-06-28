import { skills } from '@/lib/constants';
import React from 'react';

function Home() {
  return (
    <div id="about" className="w-full h-auto lg:mt-4 ">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="text-left mb-10 ">
            <div className="leading-7 text-[16px]">
              <p className="mt-4">
                Hello, I’m Sonu Sahu, a passionate and dedicated{' '}
                <span className=" font-semibold">Full-Stack Developer </span>{' '}
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
            <div className="my-6">
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
            <div>
              <div className="my-5">
                <h1 className="text-xl font-bold">Connect with me:</h1>
              </div>
              <div className="flex items-end justify-between">
                <div className="flex gap-4 flex-wrap text-[16px]">
                  <li>
                    Github -{' '}
                    <a
                      href="https://github.com/sonusahuz"
                      className="text-blue-700 font-medium"
                      target="_blank"
                    >
                      @sonusahuz
                    </a>
                  </li>
                  <li>
                    Hashnode -{' '}
                    <a
                      href="https://sonusahu.hashnode.dev"
                      className="text-blue-700 font-medium"
                    >
                      @sonusahudev
                    </a>
                  </li>
                  <li>
                    Linkedin -{' '}
                    <a
                      href="https://linkedin.com/in/sonusahu"
                      target="_blank"
                      className="text-blue-700 font-medium"
                    >
                      @sonusahu
                    </a>
                  </li>
                  <li>
                    Twitter -{' '}
                    <a
                      href="https://twitter.com/sonusahudev"
                      target="_blank"
                      className="text-blue-700 font-medium"
                    >
                      @sonusahudev
                    </a>
                  </li>
                  <li>
                    Instagram -
                    <a
                      href="https://instagram.com/sonusahudev"
                      target="_blank"
                      className="text-blue-700 font-medium"
                    >
                      @sonusahudev
                    </a>
                  </li>
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
