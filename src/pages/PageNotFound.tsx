import { HiHome, HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

export default function PageNotFound() {
    return (
        <div className="page-not-found">
            <div className="floating-elements">
                <div className="floating-element"></div>
                <div className="floating-element"></div>
                <div className="floating-element"></div>
                <div className="floating-element"></div>
            </div>

            <div className="error-container">
                <div className="error-code">404</div>
                <div className="error-message">
                    <h1>Page Not Found</h1>
                    <p>The page you're looking for doesn't exist or has been moved.</p>
                    <p className="error-description">
                        Don't worry, it happens to the best of us. Let's get you back on track.
                    </p>
                </div>

                <div className="error-actions">
                    <Link to="/" className="action-btn primary">
                        <HiHome className="btn-icon" />
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="action-btn secondary"
                    >
                        <HiArrowLeft className="btn-icon" />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}
