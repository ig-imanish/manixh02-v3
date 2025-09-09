import { DiMysql } from "react-icons/di";
import { FaCss3Alt, FaDocker, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact, FaWindows } from "react-icons/fa";
import { GrJava } from "react-icons/gr";
import { SiApachemaven, SiExpress, SiIntellijidea, SiJavascript, SiMongodb, SiNetlify, SiPostman, SiRender, SiSpringboot, SiSwagger, SiThymeleaf, SiTypescript } from "react-icons/si";
import "./SkillSection.css";
import { VscVscode } from "react-icons/vsc";
import { FcLinux } from "react-icons/fc";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNotionFill, RiSupabaseFill } from "react-icons/ri";
import { CgVercel } from "react-icons/cg";
import SectionTitle from "../sectionTitle/SectionTitle";

const technologies = [
    { name: "Java", icon: <GrJava color="#df3d14ff" /> },
    { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#2965f1" /> },
    { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
    { name: "React", icon: <FaReact color="#61dafb" /> },
    { name: "NodeJS", icon: <FaNodeJs color="#68a063" /> },
    {
        name: "Express", icon: <SiExpress color="#fff" />
    },
    { name: "Spring Security", icon: <SiSpringboot color="#6DB33F" /> },
    { name: "Spring Jpa", icon: <SiSpringboot color="#6DB33F" /> },
    { name: "Spring MVC", icon: <SiSpringboot color="#6DB33F" /> },
    { name: "Thymeleaf", icon: <SiThymeleaf color="#6DB33F" /> },
    { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> },
    { name: "MySQL", icon: <DiMysql color="#00758f" /> },
    { name: "MongoDB", icon: <SiMongodb color="#01ec64" /> },
];

const tools = [
    { name: "Git", icon: <FaGitAlt color="#f34f29" /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Postman", icon: <SiPostman color="#f34f29" /> },
    { name: "Swagger", icon: <SiSwagger color="#01ec64" /> },
    { name: "VsCode", icon: <VscVscode color="#007acc" /> },
    { name: "IntelliJ IDEA", icon: <SiIntellijidea color="#fff" /> },
    { name: "Linux", icon: <FcLinux /> },
    { name: "Windows", icon: <FaWindows color="#0078d4" /> },
    { name: "Docker", icon: <FaDocker color="#2496ed" /> },
    { name: "Maven", icon: <SiApachemaven color="#c71e3a" /> },
    {
        name: "Firebase", icon: <IoLogoFirebase color="#ffca28" />
    },
    { name: "Supabase", icon: <RiSupabaseFill color="#01ec64" /> },
    { name: "Vercel", icon: <CgVercel /> },
    { name: "Netlify", icon: <SiNetlify color="#00c58e" /> },
    {
        name: "Render", icon: <SiRender color="#fff" />
    },
    {
        name: "Notion", icon: <RiNotionFill color="#fff" />
    }
];

export default function SkillSection() {
    return (
        <section className="skill-section">
            <SectionTitle>Things I’ve Learnt & I know</SectionTitle>
            <div className="marquee-container">
                <div className="marquee">
                    {technologies.map((skill, idx) => (
                        <div className="skill-pill" key={idx}>
                            <span className="skill-icon">{skill.icon}</span>
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    ))}
                    {technologies.map((skill, idx) => (
                        <div className="skill-pill" key={idx + technologies.length}>
                            <span className="skill-icon">{skill.icon}</span>
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="marquee-container">
                <div className="marquee reverse">
                    {tools.map((tool, idx) => (
                        <div className="skill-pill" key={idx}>
                            <span className="skill-icon">{tool.icon}</span>
                            <span className="skill-name">{tool.name}</span>
                        </div>
                    ))}
                    {tools.map((tool, idx) => (
                        <div className="skill-pill" key={idx + tools.length}>
                            <span className="skill-icon">{tool.icon}</span>
                            <span className="skill-name">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}