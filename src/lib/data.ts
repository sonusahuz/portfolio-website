export const project = [
  {
    id: '1',
    title: 'JSONify React App',
    technologies: [
      'React',
      'Next.js',
      'TailwindCSS',
      'TypeScript',
      'JavaScript',
    ],
    description:
      'Introducing JSONify React, a versatile app built with React.js, Next.js 14, TailwindCSS, and TypeScript. Easily generate dummy JSON data for products, recipes, users, and todos, perfect for any front-end project. With server-side rendering and full support for all HTTP methods (GET, POST, PUT, PATCH, DELETE), JSONify React is your go-to solution for mock data needs.',
    link: 'https://jsonifyreact.vercel.app',
    github: 'https://github.com/sonusahuz/jsonify-react',
  },
  {
    id: '2',
    title: 'Uplift UI',
    technologies: ['React', 'TailwindCSS', 'TypeScript', 'JavaScript'],
    description:
      'Uplift-UI is a versatile React component library that simplifies the development of modern web applications. It provides pre-built UI components that are customizable and easy to use. The library is built using React,TypeScript, and TailwindCSS, making it highly flexible for building responsive and visually appealing interfaces.',
    link: 'https://upliftui.vercel.app',
    github: 'https://github.com/sonusahuz/uplift-ui',
  },
  {
    id: '3',
    title: 'Melodify Music Streaming App',
    technologies: [
      'React.js',
      'Next.js',
      'TailwindCSS',
      'TypeScript',
      'JavaScript',
      'Jio Saavn API',
    ],
    description:
      'Melodify is a feature-rich music streaming application built with React.js, Next.js 14, TailwindCSS, and TypeScript. It offers a seamless user experience with functionalities like searching for songs, creating playlists, and playing music. The app integrates with the Jio Saavn API to provide a vast library of songs and albums. With its modern design and responsive layout, Melodify is perfect for music enthusiasts looking for an intuitive platform to enjoy their favorite tunes.',
    link: 'https://melodify-music.vercel.app',
    github: 'https://github.com/sonusahuz/melodify-music',
  },
];

export const blogList = [
  {
    id: '1',
    title: 'Setting Up Node.js and Express with TypeScript',
    time: '3 min read',
    date: 'May 19, 2024',
    description:
      'Creating a Node.js project with Express and TypeScript allows you to take advantage of TypeScript’s type-checking and modern JavaScript features. This guide will walk you through the process step-by-step...',
    link: 'https://sonusahu.hashnode.dev/setting-up-nodejs-and-express-with-typescript',
  },
  {
    id: '2',
    title: '4 useState Mistakes You Should Avoid in React',
    date: 'April 27, 2024',
    time: '10 min read',
    description:
      'React.js has become a cornerstone of modern web development, with its unique approach to managing state within components.One common hook, useState, is fundamental but often misused...',
    link: 'https://sonusahu.hashnode.dev/4-usestate-mistakes-you-should-avoid-in-react',
  },
  {
    id: '3',
    title:
      'Exploring Scope in JavaScript: Understanding the Four Types of Scopes',
    date: 'March 1, 2024',
    time: '2 min read',
    description:
      'In this blog, we are going to delve into the fascinating world of scope in JavaScript. Scope determines the visibility and accessibility of variables within your code, and in JavaScript...',
    link: 'https://sonusahu.hashnode.dev/scope-in-javascript',
  },
  {
    id: '4',
    title: 'Difference between Shallow Copy and Deep Copy in JavaScript',
    date: 'May 25, 2023',
    time: '4 min read',
    description:
      'In this blog, you’ll learn about shallow copy and deep copy in javascript with the help of examples In JavaScript, the object is copied in two ways: the first way is shallow copy, and the second way is deep copy...',
    link: 'https://sonusahu.hashnode.dev/difference-between-shallow-copy-and-deep-copy-in-javascript',
  },
  {
    id: '5',
    title:
      'Difference between Regular functions and Arrow functions in Javascript',
    time: '3 min read',
    date: 'Apr 1, 2023',
    description:
      'You have probably used the regular or arrow functions at least 100 times, but do you know what the difference is between these two functions? Do not worry; I got covered in this article...',
    link: 'https://sonusahu.hashnode.dev/defference-between-regular-functions-and-arrow-functions-in-javascript',
  },
];

interface Experience {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
  type: string;
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Khatushyam Technologies',
    position: 'Frontend Developer',
    type: 'Internship',
    duration: 'Nov 2024 - Present',
    responsibilities: [
      'Led a team of 5 developers in building a complex SaaS platform',
      'Implemented responsive designs using React and Tailwind CSS',
      'Improved application performance by 40% through code optimization',
      'Mentored junior developers and conducted code reviews',
    ],
    technologies: [
      'React',
      'Next.js',
      'TailwindCSS',
      'JavaScript',
      'Node.js',
      'Zustand',
      'Redux',
    ],
  },
  {
    company: 'Idbook Hotels',
    type: 'Internship',
    position: 'Frontend Developer',
    duration: 'Jan 2025 - Present',
    responsibilities: [
      'Developed and maintained multiple client websites using React and Next.js',
      'Collaborated with UX designers to implement pixel-perfect designs',
      'Integrated RESTful APIs and GraphQL endpoints',
      'Participated in agile development processes and sprint planning',
    ],
    technologies: [
      'React',
      'Next.js',
      'TailwindCSS',
      'TypeScript',
      'JavaScript',
      'Redux',
    ],
  },
];
