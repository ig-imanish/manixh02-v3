import SectionTitle from '../sectionTitle/SectionTitle'
import "./Project.css"
import ProjectCard from './ProjectCard'
export default function Projects() {
    return (

        <section className="project-section">
            <SectionTitle>Places I’ve Made an Impact</SectionTitle>
            <ProjectCard
                banner="/src/assets/Secure2FA.png"
                name="Secure2FA"
                desc="A robust two-factor authentication system implementing Time-based One-Time Password (TOTP) for enhanced application security."
                tech={["JavaScript", "React", "Node.js", "MongoDB", "Java", "SpringBoot", "Spring Security"]}
                github="https://github.com/ig-imanish/Secure2FA"
                live="https://secure2-fa.vercel.app/"
            />
            <ProjectCard
                banner="/src/assets/BlogZone.png"
                name="BlogZone"
                desc="About Blog Zone Blog Zone is a modern platform designed to empower writers, bloggers, and content creators to share their stories with the world."
                tech={["Html", "CSS", "JavaScript", "Node.js", "MongoDB", "Express"]}
                github="https://github.com/ig-imanish/BlogZone-Clg-project"
                live="https://blogzone-clg.netlify.app/"
            />
        </section>

    )
}
