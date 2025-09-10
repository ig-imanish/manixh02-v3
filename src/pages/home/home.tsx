import "./home.css"
import HeroSection from "../../components/heroSection/HeroSection"
import SkillSection from "../../components/skillSection/SkillSection"
import Experience from "../../components/experience/Experience"
import Projects from "../../components/projects/Projects"
import Footer from "../../components/footer/Footer"
export default function Home() {
    return (
        <div className="home-container">
            <HeroSection />
            <SkillSection />
            <Experience />
            <Projects />
            <Footer />
        </div>
    )
}
