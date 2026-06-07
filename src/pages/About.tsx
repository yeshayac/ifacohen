import Layout from "@/components/Layout";
import headshot from "@/assets/headshot.jpg";

const About = () => (
  <Layout>
    <div className="container py-16 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">About</h1>
      <div className="flex flex-col sm:flex-row gap-8 mb-10">
        <img src={headshot} alt="Dr. Isaiah F. A. Cohen" className="w-48 h-48 rounded-lg object-cover border flex-shrink-0" />
        <div>
          <h2 className="text-xl font-semibold mb-3 font-sans">Professional Biography</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Dr. Isaiah F. A. Cohen is an Assistant Professor of Sociology at the University of South Dakota. My research and teaching explore how institutions shape opportunity, identity, and belonging, with particular attention to education, family-school relationships, digital culture, public policy, and emerging technologies.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            My scholarship is rooted in the sociology of education and extends into work on technology, artificial intelligence, gaming, social media, and public life. Across these areas, I study how people encounter institutions, interpret institutional messages, and navigate changing social and technological environments. In investigating these topics, I utilize quantitative, qualitative, and mixed-methods approaches.
          </p>
           <p className="text-foreground leading-relaxed mb-4">
            My teaching emphasizes applied sociological thinking, critical thinking and engagement with evidence, and the use of sociological tools to understand contemporary public issues. I am also committed to public sociology, student mentorship, and community-facing educational programming. At USD, I teach courses introducing sociology to majors and non-majors and on topics like social problems, sociology of pop culture, sociology of gaming, social deviance, research methods, family, law, and sociology of education.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            I am committed to student mentorship, public sociology, and community-facing academic programming. My broader goal as a sociologist is to produce work that is not just analytically rigorous, but publicly useful and attentive to the societal conditions that shape people’s lives.
          </p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 font-sans">Research Interests</h2>
        <ul className="grid sm:grid-cols-2 gap-2">
          {["Sociology of Education", "Family-School Interactions", "Educational Policy and Governance", "Technology, AI, and Society", "Digital Culture", "Research Methods", "Social Deviance", "Public Sociology"].map((interest) => (
            <li key={interest} className="flex items-center gap-2 text-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {interest}
            </li>
          ))}
        </ul>
      </section>

     <section className="mb-10">
  <h2 className="text-xl font-semibold mb-4 font-sans">Academic Background</h2>
  <div className="space-y-3">
    <div className="border rounded-lg p-4">
      <p className="font-medium font-sans">Ph.D. in Sociology</p>
      <p className="text-sm text-muted-foreground">
        Dissertation: Family Matters. Or Does It? Family Involvement in American Education.
      </p>
    </div>

    <div className="border rounded-lg p-4">
      <p className="font-medium font-sans">M.A. in Sociology</p>
    </div>

    <div className="border rounded-lg p-4">
      <p className="font-medium font-sans">B.A. in Political Science</p>
      <p className="text-sm text-muted-foreground">Minor in Sociology</p>
    </div>

    <div className="border rounded-lg p-4">
      <p className="font-medium font-sans">A.A. in General Studies</p>
    </div>
  </div>
</section>

      <section>
        <h2 className="text-xl font-semibold mb-4 font-sans">A Note on Mentoring</h2>
        <p className="text-foreground leading-relaxed">
          I am deeply committed to mentoring undergraduate and graduate students in their academic journeys. I welcome research inquiries from students interested in education, inequality, social deviance, public sociology, research methods, and related areas. At the same time, mentorship is not limited to research alone, or to students majoring in sociology. Sociological inquiry is strongest when informed by multiple perspectives and interdisciplinary thought. Students interested in collaboration, research development, or related academic opportunities are welcome to reach out.
        </p>
      </section>
    </div>
  </Layout>
);

export default About;
