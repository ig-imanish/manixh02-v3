import './Footer.css'
import { useVisitorCounter } from '../../hooks/useVisitorCounter'

export default function Footer() {
    const { visitorCount, loading } = useVisitorCounter();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-quote">
                    "The only way to do great work is to love what you do."
                </div>
                <div className="footer-info">
                    <div className="footer-made">
                        Designed & Made with ❤️
                    </div>
                    <div className="footer-bottom">
                        <span className="footer-copyright">2025. All rights reserved</span>
                        <span className="footer-visitors">
                            {loading ? 'Loading...' : `Visitors #${visitorCount}`}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}