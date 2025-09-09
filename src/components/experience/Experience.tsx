import { RiShareBoxFill } from "react-icons/ri";
import SectionTitle from "../sectionTitle/SectionTitle";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
    return (
        <div>
            <section className="experience-section">
                <SectionTitle>Places I’ve Made an Impact</SectionTitle>
                <ExperienceCard
                    logoUrl="/jabsz.png"
                    company="Jabsz Gaming Studios"
                    links={[{ url: "https://www.jabszgamingstudios.com/", icon: <RiShareBoxFill /> }]}
                    status="Working"
                    role="Full Stack Developer"
                    dates="May 2025 - Present"
                    location="India (Remote)"
                />

            </section>
        </div>
    )
}
