import Footer from '../components/footer/Footer'
import AllProjects from '../components/projects/AllProjects'

export default function ProjectsLayout() {
    return (
        <div style={{ marginTop: '30px' }}>
            <AllProjects />
            <Footer />
        </div>
    )
}
