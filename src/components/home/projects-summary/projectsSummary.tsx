import { projectsSummaryStyles } from "./projectsSummary.styles";
import portfolioLight from "../../../assets/Portfolio-WIP-LightMode.png";
import portfolioDark from "../../../assets/Portfolio-WIP-DarkMode.png";
import profileImage from "../../../assets/portfolio-picture.png";
import { Link } from "react-router-dom";

const projects = [
  {
    image: portfolioLight,
    title: "Portfolio Redesign",
    description:
      "A refreshed personal site focused on cleaner navigation, stronger hierarchy, and improved readability.",
  },
  {
    image: portfolioDark,
    title: "Theme System",
    description:
      "Light and dark theme support using shared design tokens and consistent component-level styling.",
  },
  {
    image: profileImage,
    title: "Project Showcase",
    description:
      "A card-based project section that highlights key work with visual previews and concise summaries.",
  },
];

export const ProjectsSummary = () => {
  return (
    <div style={projectsSummaryStyles.projectsSummaryContainer}>
      <h1 style={projectsSummaryStyles.sectionTitle}>Projects</h1>
      <div style={projectsSummaryStyles.inner}>
        {projects.map((project) => (
          <article key={project.title} style={projectsSummaryStyles.projectCard}>
            <img
              src={project.image}
              alt={project.title}
              style={projectsSummaryStyles.projectImage}
            />
            <div style={projectsSummaryStyles.projectBody}>
              <h3 style={projectsSummaryStyles.projectTitle}>{project.title}</h3>
              <p style={projectsSummaryStyles.projectDescription}>
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div style={projectsSummaryStyles.ctaRow}>
        <Link to="/projects" style={projectsSummaryStyles.ctaButton}>
          View All Projects
        </Link>
      </div>
    </div>
  );
};
