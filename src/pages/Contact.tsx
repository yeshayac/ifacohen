import { Mail, MapPin, Building, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

const profiles = [
  { label: "Google Scholar", href: "#" },
  { label: "ORCID", href: "#" },
  { label: "ResearchGate", href: "#" },
  { label: "LinkedIn", href: "#" },
];

const Contact = () => (
  <Layout>
    <div className="container py-16 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Contact</h1>
      <p className="text-muted-foreground mb-10">I welcome inquiries about research, collaboration, and student mentoring.</p>

      <div className="grid gap-6 sm:grid-cols-2 mb-12">
        <div className="border rounded-lg p-6">
          <Mail className="h-5 w-5 text-primary mb-3" />
          <h2 className="font-semibold mb-1 font-sans">Email</h2>
          <a href="mailto:isaiah.cohen@usd.edu" className="text-sm text-primary hover:underline">
            isaiah.cohen@usd.edu
          </a>
        </div>
        <div className="border rounded-lg p-6">
          <Building className="h-5 w-5 text-primary mb-3" />
          <h2 className="font-semibold mb-1 font-sans">Department</h2>
          <p className="text-sm text-muted-foreground">Department of Sociology<br />University of South Dakota</p>
        </div>
        <div className="border rounded-lg p-6">
          <MapPin className="h-5 w-5 text-primary mb-3" />
          <h2 className="font-semibold mb-1 font-sans">Office</h2>
          <p className="text-sm text-muted-foreground">414 E. Clark Street<br />Vermillion, SD 57069</p>
        </div>
        <div className="border rounded-lg p-6">
          <ExternalLink className="h-5 w-5 text-primary mb-3" />
          <h2 className="font-semibold mb-1 font-sans">Academic Profiles</h2>
          <div className="flex flex-col gap-1 mt-1">
            {profiles.map((p) => (
              <a key={p.label} href={p.href} className="text-sm text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
