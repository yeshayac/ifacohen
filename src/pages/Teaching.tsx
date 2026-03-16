import { BookOpen } from "lucide-react";
import Layout from "@/components/Layout";

const courses = [
  { code: "SOC 100", title: "Introduction to Sociology", description: "Survey of core sociological concepts, theories, and methods. Emphasizes applying the 'sociological imagination' to everyday life." },
  { code: "SOC 280", title: "Social Problems", description: "Examination of contemporary social problems—poverty, inequality, healthcare, environment—through sociological lenses and evidence-based analysis." },
  { code: "SOC 350", title: "Sociology of Gaming", description: "An upper-division seminar exploring online gaming as a site of community, identity, governance, and cultural production." },
  { code: "SOC 410", title: "Research Methods", description: "Advanced training in qualitative and quantitative research design, data collection, and analysis for social science inquiry." },
];

const Teaching = () => (
  <Layout>
    <div className="container py-16 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Teaching</h1>
      <p className="text-muted-foreground mb-10">Courses, teaching philosophy, and student mentoring.</p>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 font-sans">Teaching Philosophy</h2>
        <p className="text-foreground leading-relaxed mb-4">
          I believe effective teaching in sociology means equipping students with the analytical tools to question taken-for-granted social arrangements. My courses emphasize active learning, real-world applications, and the development of critical thinking skills that extend well beyond the classroom.
        </p>
        <p className="text-foreground leading-relaxed">
          I integrate current research—including my own—into my teaching, and I design assignments that encourage students to apply sociological methods to topics they care about, from social media algorithms to educational policy.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 font-sans">Courses</h2>
        <div className="space-y-4">
          {courses.map((course) => (
            <div key={course.code} className="border rounded-lg p-5">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider font-sans">{course.code}</span>
              </div>
              <h3 className="font-semibold font-sans">{course.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{course.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 font-sans">Student Mentoring</h2>
        <p className="text-foreground leading-relaxed">
          I actively mentor undergraduate and graduate students on independent research projects. Recent student work has examined AI adoption in rural schools, gaming community dynamics, and digital literacy among older adults. Students interested in research opportunities are encouraged to reach out.
        </p>
      </section>
    </div>
  </Layout>
);

export default Teaching;
