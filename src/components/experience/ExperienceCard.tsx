import React from "react";
import "./Experience.css"
interface ExperienceCardProps {
    logo?: React.ReactNode;
    logoUrl?: string;
    company: string;
    links?: { url: string; icon: React.ReactNode }[];
    status?: string;
    role: string;
    dates: string;
    location: string;
}

export default function ExperienceCard({ logo, logoUrl, company, links, status, role, dates, location }: ExperienceCardProps) {
    return (
        <div className="exp-card">
            <div className="exp-header">
                <div className="exp-header-left">
                    <div className="exp-logo">
                        {logoUrl ? (
                            <img src={logoUrl} alt={company + ' logo'} className="exp-logo-img" />
                        ) : (
                            logo
                        )}
                    </div>
                    <div className="exp-company-info">
                        <div className="exp-company-row">
                            <span className="exp-company-name">{company}</span>
                            <div className="exp-company-icons">
                                {links && links.map((link, idx) => (
                                    <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="exp-company-link">
                                        {link.icon}
                                    </a>
                                ))}
                                {status && (
                                    <span className="exp-status-badge">
                                        <span className="exp-status-dot">●</span> {status}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="exp-role-text">{role}</div>
                    </div>
                </div>
                <div className="exp-meta">
                    <span>{dates}</span>
                    <span>{location}</span>
                </div>
            </div>
        </div>
    );
}
