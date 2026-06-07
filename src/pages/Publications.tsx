import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

type Publication = {
  type: "Peer-Reviewed Article" | "Public Scholarship" | "Report, Public Scholarship, and Applied Writing" | "Manuscript Under Review" | "Work in Progress";
  category: string;
  title: string;
  citation: string;
  abstract?: string;
  doi?: string;
};

const publications = [
  {
    type: "Peer-Reviewed Article",
    category: "Education",
    title: "Signals from the School: Do Positive and Negative Messages Shape Family Involvement?",
    citation:
      "Cohen, Isaiah F. A., and Mark Schafer. 2026. “Signals from the School: Do Positive and Negative Messages Shape Family Involvement?” The Sociological Quarterly.",
  },
  {
    type: "Peer-Reviewed Article",
    category: "Pedagogy",
    title: "Promoting Student Agency in the Social Sciences with the Digital Unessay",
    citation:
      "Cohen, Isaiah F. A., and Christopher Adamson. 2024. “Promoting Student Agency in the Social Sciences with the Digital Unessay.” Visualizing Objects, Places, and Spaces: A Digital Project Handbook.",
  },
  {
    type: "Peer-Reviewed Article",
    category: "Pedagogy",
    title: "Promoting Student Agency in the Humanities with the Digital Unessay",
    citation:
      "Adamson, Christopher, and Isaiah F. A. Cohen. 2024. “Promoting Student Agency in the Humanities with the Digital Unessay.” Visualizing Objects, Places, and Spaces: A Digital Project Handbook.",
  },
  {
    type: "Peer-Reviewed Article",
    category: "Education",
    title: "How Is Gentrification Associated with Changes in the Academic Performance of Neighborhood Schools?",
    citation:
      "Barton, Michael S., and Isaiah F. A. Cohen. 2019. “How Is Gentrification Associated with Changes in the Academic Performance of Neighborhood Schools?” Social Science Research.",
  },
  {
    type: "Peer-Reviewed Article",
    category: "Health",
    title: "Neighborhood Perception and Self-Rated Health among Mexican American Older Adults",
    citation:
      "Stroope, Samuel, Isaiah F. A. Cohen, Joshua Tom, and Kyriakos S. Markides. 2017. “Neighborhood Perception and Self-Rated Health among Mexican American Older Adults.” Geriatrics & Gerontology International.",
  },
  {
    type: "Peer-Reviewed Article",
    category: "Education",
    title: "The Impact of Homeschooling on the Adjustment of College Students",
    citation:
      "Drenovsky, Cynthia K., and Isaiah F. A. Cohen. 2012. “The Impact of Homeschooling on the Adjustment of College Students.” International Social Science Review.",
  },
  {
    type: "Public Scholarship",
    category: "Education",
    title: "Homeschooling Grows in Louisiana and the United States",
    citation:
      "Schafer, Mark J., and Isaiah F. A. Cohen. 2017. “Homeschooling Grows in Louisiana and the United States.” LSU AgCenter.",
  },
];

const allTags = ["All", "Education", "Pedagogy", "Health", "Public Scholarship"];

const typeColors: Record<string, string> = {
  "Peer-Reviewed Article": "text-primary",
  "Public Scholarship": "text-muted-foreground",
  "Report, Public Scholarship, and Applied Writing": "text-muted-foreground",
  "Manuscript Under Review": "text-muted-foreground",
  "Work in Progress": "text-muted-foreground",
};

const Publications = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const filtered = activeTag === "All" ? publications : publications.filter((p) => p.category === activeTag);

  return (
    <Layout>
      <div className="container py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Publications</h1>
        <p className="text-muted-foreground mb-8">Peer-reviewed articles, working papers, book chapters, and reports.</p>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
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

        {/* List */}
        <div className="space-y-4">
          {filtered.map((pub, idx) => (
            <div key={pub.title} className="border rounded-lg p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <span className={`text-xs font-medium uppercase tracking-wider ${typeColors[pub.type]}`}>{pub.type}</span>
                  <h3 className="font-medium mt-1 font-sans">{pub.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{pub.citation}</p>
                </div>
                {pub.doi && (
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 mt-1 flex-shrink-0"
                    aria-label="DOI link"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              {pub.abstract && (
  <>
    <button
      onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground mt-3 transition-colors font-sans"
    >
      <ChevronDown className={`h-3.5 w-3.5 transition-transform ${expandedIdx === idx ? "rotate-180" : ""}`} />
      {expandedIdx === idx ? "Hide abstract" : "Show abstract"}
    </button>
    {expandedIdx === idx && (
      <p className="text-sm text-foreground mt-3 leading-relaxed border-t pt-3">{pub.abstract}</p>
    )}
  </>
)}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Publications;
