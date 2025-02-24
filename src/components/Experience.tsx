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
    period: 'Jan 2025 - Present',
    description: [
      'Developed a scalable and user-friendly interfaces using React.js and Next.js, ensuring seamless performance and maintainability.',
      'Implemented responsive and modern UI designs with React and Tailwind CSS, enhancing user experience across devices.',
      'Built and maintained hotelier and admin dashboards, enabling efficient management of properties and bookings',
      'Integrated features for adding and managing multiple hotels, rooms, properties, and amenities, streamlining operations.',
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
