import { Badge } from '@/components/badge';

export const metadata = {
  title: 'Sonu Sahu - Skills',
  description:
    'Explore the technical skills and expertise of Sonu Sahu in software development.',
};

export default function SkillsPage() {
  const skills = [
    { id: '19', skill: 'HTML' },
    { id: '8', skill: 'CSS' },
    { id: '1', skill: 'JavaScript' },
    { id: '2', skill: 'TypeScript' },
    { id: '3', skill: 'Python' },
    { id: '4', skill: 'React.js' },
    { id: '5', skill: 'Next.js' },
    { id: '5', skill: 'Nest.js' },
    { id: '6', skill: 'Redux' },
    { id: '7', skill: 'Zustand' },
    { id: '9', skill: 'TailwindCSS' },
    { id: '12', skill: 'Shadcn UI' },
    { id: '14', skill: 'MongoDB' },
    { id: '15', skill: 'PostgreSQL' },
    { id: '16', skill: 'Git' },
  ];

  return (
    <section
      className="lg:my-40 my-20"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <div className=" mb-10 text-center">
        <h1 id="skills-heading" className="text-3xl font-semibold">
          Skills
        </h1>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map(({ id, skill }) => (
            <Badge
              key={id}
              variant="secondary"
              className="text-sm py-2 px-3"
              aria-label={`Skill: ${skill}`}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
