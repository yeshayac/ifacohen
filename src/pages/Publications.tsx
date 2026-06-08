import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

type PublicationSection =
  | "Peer-Reviewed Publications"
  | "Public Scholarship and Applied Writing"
  | "Manuscripts Under Review"
  | "Works in Progress";

type Publication = {
  section: PublicationSection;
  type:
    | "Peer-Reviewed Article"
    | "Public Scholarship"
    | "Report, Public Scholarship, and Applied Writing"
    | "Revise and Resubmit"
    | "Manuscript Under Review"
    | "Work in Progress";
  category: string;
  title: string;
  citation: string;
  abstract?: string;
  url?: string;
  doi?: string;
};

const publications: Publication[] = [
  {
    section: "Peer-Reviewed Publications",
    type: "Peer-Reviewed Article",
    category: "Education",
    title: "Signals from the School: Do Positive and Negative Messages Shape Family Involvement?",
    citation:
      "Cohen, Isaiah F. A., and Mark Schafer. 2026. “Signals from the School: Do Positive and Negative Messages Shape Family Involvement?” The Sociological Quarterly.",
    url: "https://doi.org/10.1080/00380253.2026.2621117"
  },
  {
    section: "Peer-Reviewed Publications",
    type: "Peer-Reviewed Article",
    category: "Pedagogy",
    title: "Promoting Student Agency in the Social Sciences with the Digital Unessay",
    citation:
      "Cohen, Isaiah F. A., and Christopher Adamson. 2024. “Promoting Student Agency in the Social Sciences with the Digital Unessay.” Visualizing Objects, Places, and Spaces: A Digital Project Handbook.",
    url: "https://handbook.pubpub.org/pub/unessay-social-sciences/release/1"
  },
  {
    section: "Peer-Reviewed Publications",
    type: "Peer-Reviewed Article",
    category: "Pedagogy",
    title: "Promoting Student Agency in the Humanities with the Digital Unessay",
    citation:
      "Adamson, Christopher, and Isaiah F. A. Cohen. 2024. “Promoting Student Agency in the Humanities with the Digital Unessay.” Visualizing Objects, Places, and Spaces: A Digital Project Handbook.",
    url: "https://handbook.pubpub.org/pub/unessay-humanities/release/1"     
  },
  {
    section: "Peer-Reviewed Publications",
    type: "Peer-Reviewed Article",
    category: "Education",
    title: "How Is Gentrification Associated with Changes in the Academic Performance of Neighborhood Schools?",
    citation:
      "Barton, Michael S., and Isaiah F. A. Cohen. 2019. “How Is Gentrification Associated with Changes in the Academic Performance of Neighborhood Schools?” Social Science Research.",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0049089X16305166"
    
  },
  {
    section: "Peer-Reviewed Publications",
    type: "Peer-Reviewed Article",
    category: "Health",
    title: "Neighborhood Perception and Self-Rated Health among Mexican American Older Adults.",
    citation:
      "Stroope, Samuel, Isaiah F. A. Cohen, Joshua Tom, and Kyriakos S. Markides. 2017. “Neighborhood Perception and Self-Rated Health among Mexican American Older Adults.” Geriatrics & Gerontology International.",
    url: "https://doi.org/10.1111/ggi.13089"

  },
  {
    section: "Peer-Reviewed Publications",
    type: "Peer-Reviewed Article",
    category: "Education",
    title: "The Impact of Homeschooling on the Adjustment of College Students",
    citation:
      "Drenovsky, Cynthia K., and Isaiah F. A. Cohen. 2012. “The Impact of Homeschooling on the Adjustment of College Students.” International Social Science Review.",
    url: "https://www.jstor.org/stable/41887517"

  },
  {
    section: "Public Scholarship and Applied Writing",
    type: "Public Scholarship",
    category: "Education",
    title: "Homeschooling Grows in Louisiana and the United States",
    citation:
      "Schafer, Mark J., and Isaiah F. A. Cohen. 2017. “Homeschooling Grows in Louisiana and the United States.” LSU AgCenter.",
    url: "https://agcenter.lsu.edu/publications/homeschooling-grows-in-louisiana-and-the-united-states"
  },
  {
    section: "Manuscripts Under Review",
    type: "Revise and Resubmit",
    category: "Inequality",
    title:
      "Sustainable Consumption under Structural Constraint: An Exploratory Mixed Methods Study in Native American Reservation Communities",
    citation:
      "Marshall, Glen, Rand Wergin, and Isaiah F. A. Cohen. “Sustainable Consumption under Structural Constraint: An Exploratory Mixed Methods Study in Native American Reservation Communities.” Revise and resubmit.",
  },
  {
    section: "Manuscripts Under Review",
    type: "Manuscript Under Review",
    category: "Education",
    title: "Schooled at Home…Prepared for College? Educational Pathways and the Transition to Higher Education",
    citation:
      "Cohen, Isaiah F. A., Justin Berg, and Pema Sherpa. “Schooled at Home…Prepared for College? Educational Pathways and the Transition to Higher Education.” Manuscript under review.",
  },
  {
    section: "Manuscripts Under Review",
    type: "Manuscript Under Review",
    category: "Education",
    title: "“Hands Off My School”: Exploring State Regulation of Homeschooling",
    citation:
      "Cohen, Isaiah F. A., and Matthew Fairholm. “‘Hands Off My School’: Exploring State Regulation of Homeschooling.” Manuscript under review.",
  },
  {
    section: "Works in Progress",
    type: "Work in Progress",
    category: "Technology",
    title: "American Society Perspectives on AI and its Applications.",
    citation:
      "Aheed, Muhammad D., Isaiah F. A. Cohen, and Rodrigue Rizk. “Public Trust, AI Literacy, and the Social Consequences of Artificial Intelligence.” Collaborative manuscript in development.",
  },
  {
    section: "Works in Progress",
    type: "Work in Progress",
    category: "Health",
    title: "Coverage ≠ Utilization ≠ Quality: Intersectional Inequalities in Healthcare Access in the Philippines.",
    citation:
      "Peña, Cerise and Isaiah F. A. Cohen. “Coverage ≠ Utilization ≠ Quality: Intersectional Inequalities in Healthcare Access in the Philippines.” Collaborative manuscript in development.",
  },
];

const allTags = [
  "All",
  "Education",
  "Pedagogy",
  "Health",
  "Technology",
  "Inequality",
  "Public Scholarship",
];

const sectionOrder: PublicationSection[] = [
  "Peer-Reviewed Publications",
  "Public Scholarship and Applied Writing",
  "Manuscripts Under Review",
  "Works in Progress",
];

const sectionDescriptions: Record<PublicationSection, string> = {
  "Peer-Reviewed Publications": "Published peer-reviewed scholarship.",
  "Public Scholarship and Applied Writing": "Public-facing reports, applied writing, and other scholarly outreach.",
  "Manuscripts Under Review": "Current manuscripts under journal review or revise-and-resubmit.",
  "Works in Progress": "Selected developing projects and manuscripts in preparation.",
};

const typeColors: Record<Publication["type"], string> = {
  "Peer-Reviewed Article": "text-primary",
  "Public Scholarship": "text-muted-foreground",
  "Report, Public Scholarship, and Applied Writing": "text-muted-foreground",
  "Revise and Resubmit": "text-primary",
  "Manuscript Under Review": "text-muted-foreground",
  "Work in Progress": "text-muted-foreground",
};

const Publications = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [expandedTitle, setExpandedTitle] = useState<string | null>(null);

  const filtered =
    activeTag === "All"
      ? publications
      : publications.filter((publication) => publication.category === activeTag);

  return (
    <Layout>
      <div className="container py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Publications</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Published work, public scholarship, and selected current manuscripts. Manuscripts under
          review and works in progress are clearly identified by status.
        </p>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setActiveTag(tag);
                setExpandedTitle(null);
              }}
              className={`px-3 py-1.5 text-sm rounded-md border transition-colors font-sans ${
                activeTag === tag
                  ? "bg-primary text-primary-foreground border-primary"
                  : "text-muted-foreground border-border hover:border-foreground/30"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grouped List */}
        <div className="space-y-12">
          {sectionOrder.map((section) => {
            const sectionPublications = filtered.filter((publication) => publication.section === section);

            if (sectionPublications.length === 0) {
              return null;
            }

            return (
              <section key={section}>
                <div className="mb-4">
                  <h2 className="text-xl md:text-2xl font-semibold font-sans">{section}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{sectionDescriptions[section]}</p>
                </div>

                <div className="space-y-4">
                  {sectionPublications.map((pub) => (
                    <div key={pub.title} className="border rounded-lg p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <span
                            className={`text-xs font-medium uppercase tracking-wider ${
                              typeColors[pub.type]
                            }`}
                          >
                            {pub.type}
                          </span>
                          <h3 className="font-medium mt-1 font-sans">
  {pub.url ? (
    <a
      href={pub.url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary hover:underline"
    >
      {pub.title}
    </a>
  ) : (
    pub.title
  )}
</h3>
                          <p className="text-sm text-muted-foreground mt-1">{pub.citation}</p>
                        </div>

                        {(pub.url || pub.doi) && (
                          <a
                            href={pub.url || pub.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 mt-1 flex-shrink-0"
                            aria-label="External link"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>

                      {pub.abstract && (
                        <>
                          <button
                            onClick={() =>
                              setExpandedTitle(expandedTitle === pub.title ? null : pub.title)
                            }
                            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground mt-3 transition-colors font-sans"
                          >
                            <ChevronDown
                              className={`h-3.5 w-3.5 transition-transform ${
                                expandedTitle === pub.title ? "rotate-180" : ""
                              }`}
                            />
                            {expandedTitle === pub.title ? "Hide abstract" : "Show abstract"}
                          </button>

                          {expandedTitle === pub.title && (
                            <p className="text-sm text-foreground mt-3 leading-relaxed border-t pt-3">
                              {pub.abstract}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Publications;