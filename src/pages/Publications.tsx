import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

type Publication = {
  type: "Journal Article" | "Working Paper" | "Book Chapter" | "Report";
  title: string;
  citation: string;
  abstract: string;
  tags: string[];
  doi?: string;
};

const publications: Publication[] = [
  {
    type: "Journal Article",
    title: "Digital Capital and Educational Outcomes: A Multi-Level Analysis",
    citation: "Cohen, I. F. A. (2025). Digital Capital and Educational Outcomes. Sociology of Education, 98(2), 112–134.",
    abstract: "This study introduces and operationalizes the concept of 'digital capital' to examine how technology-related resources and skills contribute to educational stratification. Using multi-level modeling with a nationally representative dataset, findings reveal that digital capital operates as a distinct form of cultural capital that significantly predicts academic achievement beyond traditional indicators.",
    tags: ["Education", "Digital Capital"],
    doi: "https://doi.org/10.xxxx/xxxxx",
  },
  {
    type: "Journal Article",
    title: "Algorithmic Bias in Educational Assessment: A Critical Review",
    citation: "Cohen, I. F. A. & Smith, J. (2024). Algorithmic Bias in Educational Assessment. American Sociological Review, 89(4), 567–589.",
    abstract: "This critical review examines how algorithmic systems used in K-12 and higher education reproduce racial and socioeconomic disparities. We analyze 47 empirical studies and develop a framework for understanding bias at the data, model, and deployment stages.",
    tags: ["AI & Society", "Education"],
    doi: "https://doi.org/10.xxxx/xxxxx",
  },
  {
    type: "Working Paper",
    title: "AI in the Classroom: Teacher Perceptions and Pedagogical Adaptation",
    citation: "Cohen, I. F. A. (2025). AI in the Classroom: Teacher Perceptions and Pedagogical Adaptation. Under Review.",
    abstract: "Drawing on 42 in-depth interviews with K-12 teachers, this paper explores how educators perceive, adopt, and resist artificial intelligence tools in their classrooms. The analysis reveals three distinct orientations toward AI: instrumental adoption, critical engagement, and protective resistance.",
    tags: ["AI & Society", "Education"],
  },
  {
    type: "Book Chapter",
    title: "Family-School Interaction in the Digital Age",
    citation: "Cohen, I. F. A. (forthcoming). Family-School Interaction in the Digital Age. In A. Editor (Ed.), Handbook of Education and Society. Publisher.",
    abstract: "This chapter examines how digital communication platforms have transformed the relationship between families and schools, with implications for parental engagement, teacher workload, and educational equity.",
    tags: ["Education", "Digital Capital"],
  },
  {
    type: "Journal Article",
    title: "Community Governance and Social Hierarchies in Massively Multiplayer Online Games",
    citation: "Cohen, I. F. A. (2023). Community Governance in MMOs. New Media & Society, 25(8), 1890–1912.",
    abstract: "Using ethnographic methods within two MMO communities, this study analyzes the formal and informal governance structures that emerge in virtual worlds and how they reproduce or challenge offline social hierarchies.",
    tags: ["Gaming"],
    doi: "https://doi.org/10.xxxx/xxxxx",
  },
  {
    type: "Report",
    title: "Digital Equity in South Dakota Schools: A Policy Brief",
    citation: "Cohen, I. F. A. (2024). Digital Equity in South Dakota Schools. USD Center for Policy Research.",
    abstract: "This policy brief presents findings from a statewide survey of technology access and digital literacy among K-12 students in South Dakota, with recommendations for closing digital divides in rural communities.",
    tags: ["Education", "Digital Capital"],
  },
];

const allTags = ["All", "Education", "AI & Society", "Digital Capital", "Gaming"];

const typeColors: Record<string, string> = {
  "Journal Article": "text-primary",
  "Working Paper": "text-muted-foreground",
  "Book Chapter": "text-muted-foreground",
  Report: "text-muted-foreground",
};

const Publications = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const filtered = activeTag === "All" ? publications : publications.filter((p) => p.tags.includes(activeTag));

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
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Publications;
