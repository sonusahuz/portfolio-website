import { ArrowUpRight } from 'lucide-react';
import { Badge } from './badge';

// Define the TypeScript type for experience
type ExperienceType = {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string | string[]; // Can be a string or an array of strings
  technologies: string[];
  link: string;
};

// Experience data with proper types
const experiences: ExperienceType[] = [
  {
    id: 1,
    role: 'Frontend Engineer',
    company: 'Idbook Hotels',
    period: 'Jan 2025 - May 2025',
    description: [
      'Collaborated with designers to build clean, responsive, and pixel-perfect UI designs',
      'Integrated RESTful APIs to manage and display dynamic hotel data efficiently',
      'Developed responsive and modern UI components using React and Tailwind CSS, improving user experience across devices',
      'Built and maintained admin and hotelier dashboards for efficient property and booking management',
      'Implemented features for adding and managing hotels, rooms, and amenities, streamlining daily operations',
      'Worked closely with the development team during sprints to ensure smooth feature delivery and testing',
    ],
    technologies: [
      'React',
      'Next.js',
      'TailwindCSS',
      'TypeScript',
      'JavaScript',
      'Zustand',
      'Redux',
      'Bootstrap',
    ],
    link: 'https://www.idbookhotels.com/',
  },

  {
    id: 2,
    company: 'Khatushyam Technologies',
    role: 'Frontend Developer Intern',
    period: 'July 2024 - Dec 2024',
    description: [
      'Built and styled interactive web pages using React, Next.js, and Tailwind CSS',
      'Improved UI consistency and fixed layout issues to enhance user experience',
      'Integrated REST APIs to fetch and display real-time data on web pages',
      'Learned from senior developers how to write optimized and efficient code to boost app performance',
      'Worked closely with the team to create responsive and accessible web designs',
      'Participated in code reviews and followed best practices in frontend development',
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
    link: 'https://khatushyamtechnologies.com/',
  },
];

// Define prop type for ExperienceCard
const ExperienceCard: React.FC<{ experience: ExperienceType }> = ({
  experience,
}) => {
  return (
    <div className="md:p-6 p-4 rounded-2xl backdrop-blur-sm border transition-all duration-300">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-semibold text-black dark:text-white mb-1">
            {experience.role}
          </h3>
          <p className="text-sm text-muted-foreground dark:text-white mb-4">
            {experience.company} - ({experience.period})
          </p>
        </div>
        <a
          href={experience.link}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ArrowUpRight className="w-5 h-5 text-sm text-muted-foreground" />
        </a>
      </div>

      {/* Render description as bullet points */}
      <ul className="text-sm text-muted-foreground mb-4 list-disc list-inside space-y-2">
        {Array.isArray(experience.description) ? (
          experience.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))
        ) : (
          <li>{experience.description}</li>
        )}
      </ul>

      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <div className="" id="experience">
      <div className="text-center mb-10">
        <h1 id="projects-heading" className="text-3xl font-semibold">
          Work Experience
        </h1>
      </div>

      <div className="space-y-8">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
