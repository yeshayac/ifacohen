import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const courses = [
  { code: "SOC 100", title: "Introduction to Sociology", description: "This class is intended to provide students with a broad overview of sociology, the study of social behavior and human society. As such, the goal of such a course is to ensure graduates demonstrate an understanding of factors associated with global interdependence, including economic, political, psychological, cultural and linguistic forces. Over the course of the semester, students become familiar with sociology as an academic discipline. Students are introduced to the basic concepts and methods of sociology through addressing questions about how and why society is organized as it is, how our lives are shaped by broader (and generally unseen) social forces, and how aspects of our lives and statuses (e.g. gender, race, and class) structure our experiences. Societies are always changing, and we ask questions throughout this course about how and why social change occurs." },
  { code: "SOC 150", title: "Social Problems", description: "This course is a study of present-day problems in contemporary societies, such as racism, sexism, ageism, alcoholism, drug addiction, physical and mental health, war and environmental issues - their significance and current policies and action. It provides sociological analysis of major social problems in contemporary society. This course focuses on both the institutional and personal causes and consequences of these problems. Major subject areas include problems of social inequality, deviance, conformity, well-being, social institutions, and global impact. Far too many individuals engage in discussions about these issues and propose solutions to them, while understanding rather little about them. In this course, students learn to take a sociological lens to these problems, their causes, consequences, and suggested solutions, and confront their own preconceived notions about them. This class is not exclusively conducted through a lecture format, but instead relies on a combination of group discussion and the Socratic teaching method." },
  { code: "SOC 211", title: "Social Science Writing", description: "This course is a writing intensive course designed to improve student ability to communicate effectively and use empirical evidence to support their broader claims. We do this by crafting our own arguments as well as analyzing the arguments of others—both those from within class and in the professional literature. Writing is more than communication; it is a tool that we can use to develop and clarify one's thinking. It is not a skill which is perfectly innate to anyone. Instruction and practice shape our capacities to write well. Often, we can draw our motivation, inspiration, and even energy for writing from our community and social networks. We add to this community by supporting each other across the semester. Social science writing entails explicit and implicit types of knowledge. Explicit knowledge lends itself to verbal learning instruction, while implicit knowledge is difficult to learn without observing it in action and practicing it. This course is designed to train students in both the explicit and the implicit knowledge of writing. It covers the structure, mechanics, and rules of writing, as well as the stages of the literary construction process. Students practice these fundamentals by designing and developing their own research proposals, the final drafts of which are due at the end of the semester." },
  { code: "SOC 392", title: "Sociology of Pop Culture", description: "This class has students explore the importance and impact of popular culture on our individual lives and society as a whole. Popular culture is a reflection of the national and global cultural environment in which we live our lives. It is a near bottomless fount of content which entertains, informs, excites, and outrages us. We explore various forms of popular culture over the course of the semester, including: reality tv, music, graphic novels/anime, professional wrestling, fanfiction, social media, Sci-fi, and more. Through utilizing a wide range of topics and ideas, we investigate the saturation of popular culture in our lives and society, how it impacts our respective identities and relationships, and how culture can be used to create and reinforce stratification in our society." },
  { code: "SOC 392", title: "Sociology of Gaming", description: "This course analyzes gaming and gaming culture from a sociological perspective and how it both shapes and reflects social interactions and social institutions. Gaming is increasingly enmeshed in our everyday activities, even to degrees that we don’t often take note of. Over the course of the semester, we explore a wide variety of gaming experiences over the course of the semester, including tabletop games, collectable/trading card games, live action role playing (LARPing), athletic games, gambling, and (of course) video games. Through utilizing a wide range of topics and ideas, we examine gaming’s influence on our personal lives, our society, and our future." },
  { code: "SOC 402/502", title: "Social Deviance", description: "This course investigates how behaviors become defined as deviant and what makes people deviant. Deviance can be criminal or non-criminal. Since what is labeled as deviance can be controversial, this course looks at theoretical perspectives that attempt to explain deviance, definitions of different types of deviance, and how deviance is managed and controlled. Multiple contemporary forms of deviance are investigated, discussed, and analyzed over the course of the semester. These include (but are not limited to) domestic abuse, diverse forms of expression and living, self-destructive behaviors, substance abuse, and other forms of deviance which are not often discussed in detail. Through the utilization of a wide range of topics and ideas, we examine social deviance and its influence on our personal lives, our society, and our future." },
  { code: "SOC 410/510", title: "Research Methods", description: "This course is an introduction to sociological research methods. The primary goal of this course is to expose students to the array of research methods used by sociologists and other social researchers such as experiments, surveys, qualitative interviews, historical/comparative research, and ethnography. A secondary goal of this course is to prepare students to conduct research in real world settings. As a result, students are asked to come up with a sociological research question, propose a way in which to investigate this question, and then carry it out through quantitative and qualitative methods. Students should leave this course with a working knowledge of research methods such that they can apply this knowledge to real world settings and situations. The last thing which must be mentioned here is that this class is not a lecture class, but one which is based entirely on the fruits of the student's labors. Methods of Sociological Research is a class emphasizing research, specifically the research students conduct throughout the semester." },
  { code: "SOC 480/590", title: "Sociology of Education", description: "This course primarily focuses on the education system and schools within the contemporary United States but may reference education systems outside of the western context as well. In this course, students learn to take a sociological lens to the institution, examine how it operates/functions, and confront their own preconceived notions about it. As such, we investigate the manner in which these intricate social organizations reflect, are influenced by, and shape/are shaped by society. To understand these processes, we draw upon a rich assortment of theoretical perspectives, empirical studies, and films. In doing so, we explore: the history of our modern educational institutions, levels and manners of educational access, sociological explanations of inequities in schools, culture and peer groups in schools, and the manner in which schools impact/are impacted by modern society." },
  { code: "SOC 491", title: "Sociological Ethnography", description: "This course is an introduction to sociological ethnographic methods. The primary goal of this course is to expose students to the array of ethnographic research methods used by sociologists and other social researchers such as semi-structured interviews, participant observation, discourse analysis, and video ethnography. Major subject areas may include scientific methods and their application in sociological research, problem selection, research design, data collection, and evaluation of data. A secondary goal of this course is to prepare students to conduct research in real world settings. As a result, students are asked to come up with a sociological research question and propose a way in which to investigate this question. Students should leave this course with a working knowledge of ethnographic research methods such that they can apply this knowledge to real world settings and situations." },
];

const Teaching = () => (
  <Layout>
    <div className="container py-16 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Teaching</h1>
      <p className="text-muted-foreground mb-10">Courses, teaching philosophy, and student mentoring.</p>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 font-sans">Teaching Philosophy</h2>
        <p className="text-foreground leading-relaxed mb-4">
          My teaching is grounded in the belief that sociology is most powerful when students learn to use it as a way of seeing, questioning, and analyzing the social world. Across my courses, I emphasize conceptual clarity, evidence-based reasoning, applied sociological analysis, and the connection between classroom learning and contemporary public issues.
        </p>
        <p className="text-foreground leading-relaxed">
          I regularly teach courses serving both sociology majors and students from across the university. These courses include introductory sociology, social problems, social deviance, research methods, sociology of education, sociology of popular culture, and the sociology of gaming. Because many students encounter sociology for the first time in general education courses, I place strong emphasis on helping students connect sociological concepts to lived experience, public debate, professional practice, and institutional life.
        </p>
        <p className="text-foreground leading-relaxed mb-4">
          My teaching also reflects an ongoing interest in pedagogical innovation. I use applied assignments, collaborative work, public-facing analysis, media engagement, and student-led inquiry to help students develop sociological habits of mind. In upper-level courses, I place particular emphasis on research design, interpretation, argumentation, and the ethical use of evidence. My pedagogical work includes peer-reviewed scholarship on the digital unessay, as well as course development around open educational resources, experiential learning, accessibility, and ungrading.
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
    <div className="mt-10 border rounded-lg p-5 bg-card">
  <h2 className="text-lg font-semibold font-sans mb-2">Teaching Resources</h2>
  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
    Selected assignments, course media, unessay materials, and pedagogical resources are collected on a separate resources page.
  </p>
  <Link
    to="/teaching-resources"
    className="text-primary hover:underline text-sm font-medium font-sans"
  >
    View teaching resources →
  </Link>
</div>
  </Layout>
);

export default Teaching;
