import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const CV = () => (
  <Layout>
    <div className="container py-16 max-w-3xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Curriculum Vitae</h1>
        <Button className="gap-2">
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 font-sans border-b pb-2">Education</h2>
        <div className="space-y-3">
          <div>
            <p className="font-medium font-sans">Ph.D. in Sociology</p>
            <p className="text-sm text-muted-foreground">Dissertation: Digital Capital and Educational Stratification</p>
          </div>
          <div>
            <p className="font-medium font-sans">M.A. in Sociology</p>
            <p className="text-sm text-muted-foreground">Focus: Education and Social Inequality</p>
          </div>
          <div>
            <p className="font-medium font-sans">B.A. in Sociology</p>
            <p className="text-sm text-muted-foreground">Minor in Digital Studies</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 font-sans border-b pb-2">Academic Appointments</h2>
        <div>
          <p className="font-medium font-sans">Assistant Professor of Sociology</p>
          <p className="text-sm text-muted-foreground">University of South Dakota, 2022–Present</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 font-sans border-b pb-2">Selected Publications</h2>
        <ul className="space-y-2 text-sm text-foreground">
          <li>Cohen, I. F. A. (2025). Digital Capital and Educational Outcomes. <em>Sociology of Education</em>, 98(2).</li>
          <li>Cohen, I. F. A. & Smith, J. (2024). Algorithmic Bias in Educational Assessment. <em>American Sociological Review</em>, 89(4).</li>
          <li>Cohen, I. F. A. (2023). Community Governance in MMOs. <em>New Media & Society</em>, 25(8).</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 font-sans border-b pb-2">Teaching</h2>
        <ul className="space-y-1 text-sm text-foreground">
          <li>SOC 100: Introduction to Sociology</li>
          <li>SOC 280: Social Problems</li>
          <li>SOC 350: Sociology of Gaming</li>
          <li>SOC 410: Research Methods</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 font-sans border-b pb-2">Service & Affiliations</h2>
        <ul className="space-y-1 text-sm text-foreground">
          <li>American Sociological Association, Member</li>
          <li>Society for the Study of Social Problems, Member</li>
          <li>USD Faculty Senate, Department Representative</li>
        </ul>
      </section>
    </div>
  </Layout>
);

export default CV;
