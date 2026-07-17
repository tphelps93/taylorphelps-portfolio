import { skillsStyles } from "./skills.styles";

type SkillCategory = {
  label: string;
  skills: string[];
};

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "Go", "C#", "Java", "PowerShell", "Bash"],
  },
  {
    label: "Front End",
    skills: ["React", "Redux"],
  },
  {
    label: "Back End",
    skills: ["Node.js", ".NET", "Spring Boot"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["Azure", "Docker", "Azure Bicep", "CI/CD Pipelines", "Rancher", "Porter"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MSSQL", "MySQL"],
  },
  {
    label: "Platforms & Tools",
    skills: ["SharePoint", "Elsa Workflows", "Grafana", "Keycloak", "F5", "K9s"],
  },
  {
    label: "Security & Compliance",
    skills: ["Tenable", "Prisma Cloud", "eMASS", "CMMC Reporting"],
  },
];

export const Skills = () => {
  return (
    <div style={skillsStyles.skillsContainer}>
      <div style={skillsStyles.inner}>
        <p style={skillsStyles.eyebrow}>Skills</p>
        <h2 style={skillsStyles.heading}>What I work with</h2>

        <div style={skillsStyles.grid}>
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.label} style={skillsStyles.categoryBlock}>
              <p style={skillsStyles.categoryLabel}>{`// ${category.label}`}</p>
              <div style={skillsStyles.tagRow}>
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    style={skillsStyles.tag}
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};