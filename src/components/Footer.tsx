import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-card py-12 mt-20">
    <div className="container">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-base font-semibold mb-2">Dr. Isaiah F. A. Cohen</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Assistant Professor of Sociology<br />
            University of South Dakota
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 font-sans">Quick Links</h4>
          <div className="flex flex-col gap-1.5">
            {["Research", "Publications", "Teaching", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 font-sans">Profiles</h4>
          <div className="flex flex-col gap-1.5">
            {[
              { label: "Google Scholar", href: "#" },
              { label: "ORCID", href: "#" },
              { label: "ResearchGate", href: "#" },
              { label: "LinkedIn", href: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Isaiah F. A. Cohen. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
