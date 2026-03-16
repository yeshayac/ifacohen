import { Cpu, Users, Lightbulb } from "lucide-react";
import Layout from "@/components/Layout";

const projects = [
  {
    icon: Cpu,
    title: "AI & Education Research Lab",
    description: "An interdisciplinary initiative investigating how artificial intelligence tools are adopted, resisted, and adapted within K-12 and higher education settings. The lab brings together sociologists, computer scientists, and educators.",
    status: "Active",
  },
  {
    icon: Users,
    title: "Digital Equity Initiative",
    description: "A community-engaged research project studying digital access and literacy in rural South Dakota. In partnership with local school districts, we're developing recommendations for closing the digital divide.",
    status: "Active",
  },
  {
    icon: Lightbulb,
    title: "Student Research Mentorship Program",
    description: "A structured mentoring program pairing undergraduate students with ongoing research projects. Students gain hands-on experience in research design, data collection, and scholarly writing.",
    status: "Ongoing",
  },
];

const Projects = () => (
  <Layout>
    <div className="container py-16 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Projects & Labs</h1>
      <p className="text-muted-foreground mb-10">Collaborative research initiatives and student engagement.</p>

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
