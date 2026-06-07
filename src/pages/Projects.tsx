```tsx
import { BrainCircuit, GraduationCap, Home, Globe2, Users, Megaphone } from "lucide-react";
import Layout from "@/components/Layout";

const projects = [
  {
    icon: BrainCircuit,
    title: "AI, Trust, and Society",
    description:
      "A collaborative research project examining public trust in artificial intelligence, AI literacy, educational readiness, and the perceived social consequences of emerging technologies. This work considers how different publics understand, evaluate, and respond to AI across institutional and everyday contexts.",
    status: "Active Research",
  },
  {
    icon: GraduationCap,
    title: "Family-School Communication and Educational Inequality",
    description:
      "A research strand examining how schools communicate with families and how those messages shape family involvement, institutional trust, and educational participation. This work connects sociology of education, family-school relationships, and broader questions of inequality and institutional belonging.",
    status: "Active Research",
  },
  {
    icon: Home,
    title: "Homeschooling, Regulation, and Educational Governance",
    description:
      "A policy-focused project studying variation in state homeschool regulation and the political, demographic, and institutional contexts that shape educational oversight. This work examines how debates over schooling, family autonomy, and public responsibility are reflected in state policy environments.",
    status: "Manuscript Development",
  },
  {
    icon: Globe2,
    title: "Healthcare Access and Inequality in the Philippines",
    description:
      "A student-collaborative project examining how residents in the Philippines experience healthcare access, utilization, and quality. The project focuses on the gap between formal coverage and lived access, with attention to inequality across place, gender, age, and social position.",
    status: "Data Collection / Development",
  },
  {
    icon: Users,
    title: "Student Research Mentorship",
    description:
      "An ongoing commitment to mentoring undergraduate and graduate students through research design, data collection, analysis, conference presentation, and scholarly writing. Student projects have addressed topics including medical inequality, symbolic violence, education, public health, and social institutions.",
    status: "Ongoing",
  },
  {
    icon: Megaphone,
    title: "Public Sociology and Community-Facing Programming",
    description:
      "Public-facing academic work focused on bringing sociological analysis into civic and campus conversations. This includes organizing student research events, public lectures, panels, and educational programming on contemporary social issues, including antisemitism, inequality, education, and civic life.",
    status: "Ongoing",
  },
];

const Projects = () => (
  <Layout>
    <div className="container py-16 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Projects</h1>
      <p className="text-muted-foreground mb-10">
        Current research projects, student collaborations, and public-facing academic work.
      </p>

      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.title} className="border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                <project.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="font-semibold font-sans">{project.title}</h2>
                <span className="text-xs text-primary font-medium font-sans">{project.status}</span>
              </div>
            </div>
            <p className="text-foreground leading-relaxed">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default Projects;
