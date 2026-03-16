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
            Dr. Isaiah F. A. Cohen is an Assistant Professor of Sociology at the University of South Dakota. His research sits at the intersection of education, technology, and social inequality. He examines how digital technologies—from AI tools to online gaming platforms—reshape learning, access, and identity in contemporary society.
          </p>
          <p className="text-foreground leading-relaxed">
            Prior to joining USD, Dr. Cohen completed his Ph.D. in Sociology, where his dissertation explored the concept of "digital capital" and its role in educational stratification. He is committed to interdisciplinary collaboration and mentoring the next generation of social scientists.
          </p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 font-sans">Research Interests</h2>
        <ul className="grid sm:grid-cols-2 gap-2">
          {["Sociology of Education", "Artificial Intelligence & Society", "Digital Capital & Inequality", "Family-School Interaction", "Sociology of Gaming", "Research Methods"].map((interest) => (
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
            <p className="text-sm text-muted-foreground">Dissertation: Digital Capital and Educational Stratification</p>
          </div>
          <div className="border rounded-lg p-4">
            <p className="font-medium font-sans">M.A. in Sociology</p>
            <p className="text-sm text-muted-foreground">Focus: Education and Social Inequality</p>
          </div>
          <div className="border rounded-lg p-4">
            <p className="font-medium font-sans">B.A. in Sociology</p>
            <p className="text-sm text-muted-foreground">Minor in Digital Studies</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 font-sans">A Note on Mentoring</h2>
        <p className="text-foreground leading-relaxed">
          I am deeply committed to mentoring undergraduate and graduate students in their research journeys. I believe that sociological inquiry is strengthened by diverse perspectives and interdisciplinary thinking. If you're interested in collaborating or exploring research opportunities, please don't hesitate to reach out.
        </p>
      </section>
    </div>
  </Layout>
);

export default About;
