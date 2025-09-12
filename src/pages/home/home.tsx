import Experience from "../../components/experience/Experience"
import Footer from "../../components/footer/Footer"
import HeroSection from "../../components/heroSection/HeroSection"
import Projects from "../../components/projects/Projects"
import SkillSection from "../../components/skillSection/SkillSection"
import ContactMe from "../../components/contactMe/ContactMe"
import "./home.css"
export default function Home() {
    return (
        <div className="home-container">
            <HeroSection />
            <SkillSection />
            <Experience />
            <Projects />
            <ContactMe />
            <Footer />
        </div>
    )
}
