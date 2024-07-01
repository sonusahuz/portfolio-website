import { blogList } from '@/lib/constants';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Sonu Sahu - Blogs',
};
const Blogs = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl">Blogs </h1>
        <p className="text-[#5a5a5a] text-sm py-2">Here are some of my blogs</p>
      </div>
      {blogList.map((item) => (
        <Link href={item.link} key={item.id}>
          <div className="my-6 flex items-center justify-between flex-wrap border p-4 rounded-lg">
            <h1 className="text-lg lg:text-xl hover:underline font-medium">
              {item.title}
            </h1>
            <div>
              <p className="text-[#5a5a5a] text-sm py-2">{item.description}</p>
            </div>
            <div>
              <div className="flex items-center justify-start my-2 gap-5">
                <span className="text-[#5a5a5a] text-xs">{item.date}</span>
                <span className="text-[#5a5a5a] text-xs">{item.time}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blogs;
