import { FileText, Film, Lightbulb, Palette, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

type Resource = {
  title: string;
  course?: string;
  description: string;
  status?: string;
  link?: string;
  videoEmbedUrl?: string;
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
        title: "Unessay",
        course: "SOC 100 / lower- & upper-division sociology courses",
        description:
          "An open-format project that asks students to demonstrate sociological understanding through creative work rather than a conventional paper alone.",
        status: "PDF",
        link: `${import.meta.env.BASE_URL}Teaching Resources/Unessay.pdf`,
      },
        {
        title: "Problem Solving Project",
        course: "SOC 150: Social Problems",
        description:
          "Each group of students prepare a poster in electronic form on a sociological issue/problem, its effects on society, and their efforts toward addressing it in the community as a group.",
        status: "PDF",
        link: `${import.meta.env.BASE_URL}Teaching Resources/Problem Solving Project.pdf`,
      },
      {
        title: "Game Creation Collaborative Project",
        course: "SOC 392: Sociology of Gaming",
        description:
          "Students are split into pairs (possibly one trio) for the final project of the semester. Each pair will design a game to express a sociological concept/topic/problem and its impact on society.",
        status: "PDF",
        link: `${import.meta.env.BASE_URL}Teaching Resources/Game Creation Collaborative Project.pdf`,
      },
      {
        title: "Trial in the Court of Public Opinion",
        course: "SOC 402/502: Social Deviance",
        description:
          "Students work in collaborative circles to prepare a presentation on a deviant behavior of your choice and explain the behavior, societal perceptions of this behavior, its impact on society, and (most importantly) make a case for why we should normalize it. These presentations are open to the public and can be done using PowerPoint or other methods. Asynchronous students accomplish this through a Reddit AMA (Ask Me Anything).",
        status: "PDF",
        link: `${import.meta.env.BASE_URL}Teaching Resources/Trial in the Court of Public Opinion.pdf`,
      },
      {
        title: "Education Immersion",
        course: "SOC 480/590: Sociology of Education",
        description:
          "Students spend no less than twenty hours this semester shadowing an educator at either the elementary, middle, or high school level. As they do this, they observe the manner in which material is presented, modalities through which material is delivered, how knowledge is assessed, identifying instructional strategies, teacher-student interactions, student-student interactions, student-teacher interactions, and more. Once students have completed their observation hours, they will craft a reflection and analysis paper through which they will discuss their observations, interrelate concepts we have discussed over the course of the semester, and provide reflections on their experiences (7-8 page minimum).",
        status: "PDF",
        link: `${import.meta.env.BASE_URL}Teaching Resources/Education Immersion.pdf`,
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
        title: "Why I, as a black man, attend KKK rallies. | Daryl Davis | TEDxNaperville",
        course: "SOC 100: Introduction to Sociology",
        description:
          "Selected media used to illustrate intersecting concepts from symbolic interactionism, sociological research methods, and civic dialogue.",
        status: "Publicly available video",
        videoEmbedUrl: "https://www.youtube.com/embed/ORp3q1Oaezw",

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

                  {resource.videoEmbedUrl && (
                    <div className="mt-4 aspect-video overflow-hidden rounded-md border bg-muted">
                      <iframe
                        src={resource.videoEmbedUrl}
                        title={resource.title}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
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