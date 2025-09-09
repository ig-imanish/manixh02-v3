import { FaGithub } from "react-icons/fa";
import "./Project.css";
import { HiExternalLink } from "react-icons/hi";

interface ProjectCardProps {
    banner: string;
    name: string;
    desc: string;
    tech: string[];
    github: string;
    live: string;
}

export default function ProjectCard({ banner, name, desc, tech, github, live }: ProjectCardProps) {
    return (
        <div className="project-card">
            <div className="banner">
                <img src={banner} alt={name} />
            </div>
            <div className="project-details">
                <div className="project-header-row">
                    <div className="project-name">
                        {name}

                    </div>
                    <div className="project-link-icons">
                        <a className="project-pill" href={live} target="_blank" rel="noopener noreferrer"><HiExternalLink />Live</a>

                        <a className="project-pill" href={github} target="_blank" rel="noopener noreferrer"><FaGithub />
                            GitHub</a>
                    </div>
                </div>
                <div className="project-desc">{desc}</div>
                <span className="project-tech-label">Technologies Used:</span>
                <div className="project-tech">
                    {tech.map((t, idx) => (
                        <span key={idx}>{t}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}
