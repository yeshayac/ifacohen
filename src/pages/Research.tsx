import { Link } from "react-router-dom";
import { GraduationCap, Cpu, Users, Gamepad2, Home } from "lucide-react";
import Layout from "@/components/Layout";

const themes = [
  {
    icon: GraduationCap,
    title: "Sociology of Education",
    description: "My primary research agenda examines how educational institutions perpetuate or mitigate social inequality. I investigate the mechanisms through which schools, colleges, and universities shape life chances across race, class, and gender lines.",
    projects: ["Multi-level analysis of school climate and academic outcomes", "Longitudinal study of first-generation college students"],
  },
  {
    icon: Cpu,
    title: "AI & Society",
    description: "I study the social implications of artificial intelligence in education and beyond. This includes how teachers perceive and adopt AI tools, how algorithmic systems reproduce bias, and the broader cultural narratives surrounding automation.",
    projects: ["AI in the Classroom project (ongoing)", "Survey of faculty AI adoption across disciplines"],
  },
  {
    icon: Users,
    title: "Digital Capital & Technology",
    description: "Building on Bourdieu's capital framework, I theorize 'digital capital' as a distinct resource that shapes educational and economic outcomes. My work examines how unequal access to technology and digital skills compounds existing forms of inequality.",
    projects: ["Digital capital measurement instrument development", "Cross-national comparison of digital inequality"],
  },
  {
    icon: Home,
    title: "Family & Social Institutions",
    description: "I explore the evolving relationship between families and schools, particularly how digital communication platforms transform parental engagement, teacher-parent dynamics, and educational decision-making.",
    projects: ["Parent communication platforms and school engagement", "COVID-era remote learning and family dynamics"],
  },
  {
    icon: Gamepad2,
    title: "Sociology of Gaming",
    description: "Online gaming communities serve as rich sites for sociological inquiry. I study identity construction, social hierarchies, and cultural production within multiplayer gaming environments.",
    projects: ["Community governance in MMO environments", "Gender and identity in esports"],
  },
];

const Research = () => (
  <Layout>
    <div className="container py-16 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Research</h1>
      <p className="text-muted-foreground mb-12 leading-relaxed">
        My research bridges sociology of education, science & technology studies, and digital culture. Below are the major themes guiding my current and ongoing work.
      </p>

      <div className="space-y-12">
        {themes.map((theme) => (
          <section key={theme.title} className="border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                <theme.icon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-semibold font-sans">{theme.title}</h2>
            </div>
            <p className="text-foreground leading-relaxed mb-4">{theme.description}</p>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 font-sans">Current Projects</h3>
              <ul className="space-y-1">
                {theme.projects.map((p) => (
                  <li key={p} className="text-sm text-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link to="/publications" className="text-primary hover:underline text-sm font-medium font-sans">
          View full publication list →
        </Link>
      </div>
    </div>
  </Layout>
);

export default Research;
