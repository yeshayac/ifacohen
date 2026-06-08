import { FileText, Film, Lightbulb, Palette, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

type Resource = {
  title: string;
  course?: string;
  description: string;
  status?: string;
  link?: string;
};

type ResourceSection = {
  icon: React.ElementType;
  title: string;
  description: string;
  resources: Resource[];
};

const sections: ResourceSection[] = [
  {
    icon: FileText,
    title: "Sample Assignments",
    description:
      "Selected assignments and course materials that illustrate my approach to applied, public-facing, and analytically rigorous sociology instruction.",
    resources: [
      {
        title: "The Sociological Unessay",
        course: "SOC 150 / upper-division sociology courses",
        description:
          "An open-format project that asks students to demonstrate sociological understanding through creative, public-facing, or applied work rather than a conventional paper alone.",
        status: "Sample assignment framework forthcoming",
      },
      {
        title: "Research Design Workshop Materials",
        course: "SOC 410: Methods of Social Research",
        description:
          "Materials used to guide students through the process of moving from a broad sociological interest to a feasible research question, design, and evidence strategy.",
        status: "Selected materials forthcoming",
      },
      {
        title: "Debate and Position Memo Assignments",
        course: "SOC 402/502: Social Deviance",
        description:
          "Structured assignments that ask students to analyze contested social issues from multiple theoretical, political, and institutional perspectives.",
        status: "Selected examples forthcoming",
      },
    ],
  },
  {
    icon: Film,
    title: "Selected Course Media",
    description:
      "Films, episodes, games, and digital artifacts I use to help students apply sociological concepts to contemporary culture, institutions, and public life.",
    resources: [
      {
        title: "Media and Moral Boundaries",
        course: "SOC 402/502: Social Deviance",
        description:
          "Selected media used to examine deviance, stigma, social control, moral panic, symbolic violence, and the construction of social problems.",
        status: "Annotated list forthcoming",
      },
      {
        title: "Digital Culture and Social Interaction",
        course: "Sociology of Gaming / Sociology of Popular Culture",
        description:
          "Examples used to explore identity, community, overstimulation, platform life, gaming cultures, and technologically mediated interaction.",
        status: "Annotated list forthcoming",
      },
    ],
  },
  {
    icon: Palette,
    title: "Unessay Projects",
    description:
      "A developing gallery of student-created projects shared with permission. These projects highlight creative and public-facing forms of sociological analysis.",
    resources: [
      {
        title: "Student Unessay Gallery",
        description:
          "A future directory of selected student projects, including project descriptions, course context, and student attribution preferences where permission has been granted.",
        status: "Directory in development",
      },
    ],
  },
  {
    icon: Lightbulb,
    title: "Pedagogical Approaches",
    description:
      "Brief explanations of teaching practices I use across courses, including ungrading, applied learning, active discussion, accessibility, and student-centered research mentorship.",
    resources: [
      {
        title: "Ungrading and Reflective Assessment",
        description:
          "An approach to assessment that emphasizes student reflection, revision, intellectual risk-taking, and demonstrated learning over point accumulation alone.",
        status: "Overview forthcoming",
      },
      {
        title: "Applied Sociology in the Classroom",
        description:
          "Course design strategies that ask students to connect sociological theory and evidence to institutions, media, public issues, and everyday life.",
        status: "Overview forthcoming",
      },
      {
        title: "Student Research Mentorship",
        description:
          "Mentorship practices supporting students through research design, conference presentation, collaborative writing, and independent scholarly development.",
        status: "Overview forthcoming",
      },
    ],
  },
];

const TeachingResources = () => (
  <Layout>
    <div className="container py-16 max-w-4xl">
      <div className="max-w-3xl mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Teaching Resources</h1>
        <p className="text-muted-foreground leading-relaxed">
          Selected course materials, assignment frameworks, media examples, and pedagogical
          resources from my sociology courses. This page is intended as a curated collection rather
          than a full course archive.
        </p>
      </div>

      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.title} className="border rounded-lg p-6">
            <div className="flex items-start gap-3 mb-5">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                <section.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold font-sans">{section.title}</h2>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {section.resources.map((resource) => (
                <div key={resource.title} className="border rounded-md p-4 bg-background">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-medium font-sans">
                        {resource.link ? (
                          <a
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary hover:underline"
                          >
                            {resource.title}
                          </a>
                        ) : (
                          resource.title
                        )}
                      </h3>

                      {resource.course && (
                        <p className="text-xs text-primary mt-1 font-medium font-sans">
                          {resource.course}
                        </p>
                      )}
                    </div>

                    {resource.link && (
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 flex-shrink-0"
                        aria-label={`${resource.title} external link`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <p className="text-sm text-foreground mt-3 leading-relaxed">
                    {resource.description}
                  </p>

                  {resource.status && (
                    <p className="text-xs text-muted-foreground mt-3 italic">
                      {resource.status}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-10 border rounded-lg p-5 bg-card">
        <h2 className="text-lg font-semibold font-sans mb-2">Student Work and Permissions</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Student work will only be shared with explicit permission. When student projects are
          included, students may choose whether to be named, credited by first name only, or listed
          anonymously. Projects may also be removed upon request.
        </p>
      </div>
    </div>
  </Layout>
);

export default TeachingResources;