import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GraduationCap, Users, Gamepad2, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import headshot from "@/assets/headshot.jpg";

const researchAreas = [
  {
    icon: GraduationCap,
    title: "Sociology of Education",
    description: "Examining how schools, families, and communities shape educational opportunity, institutional trust, and social inequality.",
  },
  {
    icon: Users,
    title: "Family and Institutions",
    description: "Studying how institutional messages, family-school relationships, and policy environments structure civic participation and societal belonging.",
  },
  {
    icon: Cpu,
    title: "Technology, AI, and Society",
    description: "Investigating public trust in artificial intelligence, digital literacy, and the social consequences of emerging technologies.",
  },
  {
    icon: Gamepad2,
    title: "Sociology of Gaming",
    description: "Studying online gaming communities as sites of identity formation, social interaction, and cultural production.",
  },
];

const recentWork = [
    {
    type: "Journal Article",
    title: "Sustainable Consumption under Structural Constraint: An Exploratory Mixed Methods Study in Native American Reservation Communities.",
    venue: "The Journal of Macromarketing, Revising and Resubmitting",
  },
    {
    type: "Journal Article",
    title: "Schooled at Home…Prepared for College? Educational Pathways and the Transition to Higher Education.",
    venue: "The Sociological Quarterly, Under Review",
  },
  {
    type: "Journal Article",
    title: "“Hands Off My School”: Exploring State Regulation of Homeschooling.",
    venue: "The Journal of Education Policy, Under Review",
  },
  {
    type: "Journal Article",
    title: "Signals from the School: Do Positive and Negative Messages Shape Family Involvement?",
    venue: "The Sociological Quarterly, 2026",
  },
  {
    type: "Journal Article",
    title: "Promoting Student Agency in the Social Sciences with the Digital Unessay.",
    venue: "Visualizing Objects, Places, and Spaces: A Digital Project Handbook, 2024",
  },
  {
    type: "Journal Article",
    title: "Promoting Student Agency in the Humanities with the Digital Unessay.",
    venue: "Visualizing Objects, Places, and Spaces: A Digital Project Handbook, 2024",
  },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="container py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] items-center">
        <div className="mx-auto md:mx-0">
          <img
            src={headshot}
            alt="Dr. Isaiah F. A. Cohen"
            className="w-64 h-64 md:w-full md:h-auto rounded-lg object-cover border"
            loading="eager"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4">
            Dr. Isaiah F. A. Cohen
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            Assistant Professor of Sociology · University of South Dakota
          </p>
          <p className="text-base text-muted-foreground italic mb-6 font-serif">
            Researching education, technology, and society.
          </p>
          <p className="text-foreground leading-relaxed mb-8 max-w-xl">
            I study how technology reshapes educational institutions and social inequality. My work bridges sociology of education, digital culture, and emerging AI technologies to understand how people learn, connect, and navigate an increasingly digital world.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Button asChild>
              <Link to="/research">Research</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/publications">Publications</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/teaching">Teaching</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Research Highlights */}
    <section className="bg-card py-16 border-y">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Research Areas</h2>
        <p className="text-muted-foreground mb-10">Core themes guiding my scholarly work.</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {researchAreas.map((area) => (
            <Link
              key={area.title}
              to="/research"
              className="group border rounded-lg p-6 bg-background hover:border-primary/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <area.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-base mb-2 font-sans">{area.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Recent Work */}
    <section className="container py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-1">Recent Work</h2>
          <p className="text-muted-foreground">Selected publications and working papers.</p>
        </div>
        <Button variant="ghost" className="hidden sm:inline-flex text-primary" asChild>
          <Link to="/publications">
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="space-y-4">
        {recentWork.map((item) => (
          <div key={item.title} className="border rounded-lg p-5 hover:border-primary/40 transition-colors">
            <div className="flex items-start gap-3">
              <BookOpen className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{item.type}</span>
                <h3 className="font-medium text-foreground mt-0.5 font-sans">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.venue}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 sm:hidden">
        <Button variant="outline" className="w-full" asChild>
          <Link to="/publications">View all publications</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Index;
