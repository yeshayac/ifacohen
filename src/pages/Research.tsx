import { Link } from "react-router-dom";
import { GraduationCap, Cpu, Users, Home, Handshake } from "lucide-react";
import Layout from "@/components/Layout";

const themes = [
  {
    icon: GraduationCap,
    title: "Education, Family-School Relationships, and Inequality",
    description:
      "A central strand of my research examines how educational institutions communicate with families, how families interpret and respond to institutional messages, and how these relationships shape educational involvement and outcomes. This work connects questions of family engagement, institutional trust, educational opportunity, and social inequality.",
    projects: [
      "Family-school communication and elementary educational outcomes",
      "Institutional messages, family involvement, and educational participation",
      "Educational inequality, family engagement, and school-community relationships",
    ],
  },
  {
    icon: Home,
    title: "Educational Governance and Policy",
    description:
      "I also study educational governance and policy variation, including work on homeschool regulation and state-level education policy. This research examines how political, demographic, and institutional contexts shape educational oversight and how policy arrangements reflect broader struggles over authority, family autonomy, public responsibility, and inequality.",
    projects: [
      "State variation in homeschool regulation",
      "Education policy, political context, and institutional oversight",
      "School choice, governance, and educational inequality",
    ],
  },
  {
    icon: Cpu,
    title: "Technology and Society",
    description:
      "My recent collaborative work examines public attitudes toward artificial intelligence, including questions of trust, literacy, educational readiness, and perceived social consequences. I am especially interested in how emerging technologies are interpreted by different publics and how technological change intersects with education, inequality, work, and civic life.",
    projects: [
      "Public trust and literacy regarding artificial intelligence",
      "AI, education, and institutional readiness",
      "User-developer distance and public attitudes toward emerging technologies",
    ],
  },
  {
    icon: Users,
    title: "Pedagogical Scholarship and Applied Sociology",
    description:
      "A related strand of my work focuses on pedagogical scholarship, including peer-reviewed writing on course design, student engagement, applied sociology, and the public value of sociological teaching. This work connects my research interests in education, inequality, institutions, and civic life to questions of how students learn to think sociologically and apply sociological tools beyond the classroom.",
    projects: [
      "Experiential Learning",
      "Ungrading and experimental pedagogy",
      "Open educational resources and digital culture",
    ],
  },
  {
    icon: Handshake,
    title: "Public Sociology, Civic Life, and Institutional Belonging",
    description:
      "My public-facing work engages questions of social inequality, antisemitism, civic education, and institutional responsibility. While distinct from my primary empirical research agenda, this work reflects a broader commitment to using sociology to clarify contemporary public issues and support informed civic dialogue.",
    projects: [
      "Gaming communities and identity formation",
      "Digital interaction, overstimulation, and social media use",
      "Digital culture as a site of social life and inequality",
    ],
  },
];

const Research = () => (
  <Layout>
    <div className="container py-16 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Research</h1>
      <p className="text-muted-foreground mb-12 leading-relaxed">
        My research examines how institutions, technologies, and policy environments shape access, opportunity, trust, and social life. While my work spans several substantive areas, it is organized around a common concern: how people encounter institutions, interpret institutional messages, and navigate social systems that structure access, belonging, and participation.
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
