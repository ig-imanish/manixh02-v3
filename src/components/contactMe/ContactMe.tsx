import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";
import "./ContactMe.css";

const socialLinks = [
    {
        name: "Twitter",
        url: "https://x.com/itz_Manish02",
        icon: <FaTwitter />,
        color: "#1DA1F2"
    },
    {
        name: "GitHub",
        url: "https://github.com/ig-imanish",
        icon: <FaGithub />,
        color: "#333"
    },
    {
        name: "Resume",
        url: "#", // Add your resume link here
        icon: <HiDocumentDownload />,
        color: "#FF6B6B"
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/imanish02",
        icon: <FaLinkedin />,
        color: "#0077B5"
    },
    // {
    //     name: "Discord",
    //     url: "#", // Add your Discord profile link here
    //     icon: <FaDiscord />,
    //     color: "#5865F2"
    // }
];

export default function ContactMe() {
    return (
        <section className="contact-me-section">
            <div className="contact-me-card">
                <h3 className="contact-me-title">Let's Connect</h3>
                <p className="contact-me-description">
                    Feel free to reach out through any of these platforms
                </p>
                <div className="contact-links">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link-btn"
                        >
                            <span className="contact-link-icon">{link.icon}</span>
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}