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
            <div className="exp-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                    <div className="exp-logo">
                        {logoUrl ? (
                            <img src={logoUrl} alt={company + ' logo'} className="exp-logo-img" />
                        ) : (
                            logo
                        )}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '-10px' }}>
                        <div className="exp-company-row">
                            <span className="exp-company-name">{company}</span>
                            <div className="exp-company-icons">
                                {links && links.map((link, idx) => (
                                    <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', opacity: 0.7, display: 'flex', alignItems: 'center' }}>
                                        {link.icon}
                                    </a>
                                ))}
                                {status && (
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#091D11', fontWeight: 400, fontSize: '0.75em', borderRadius: '6px', padding: '2px 8px', height: '22px', color: '#b3b3b3' }}>
                                        <span style={{ color: '#02ff67ff', fontWeight: 400, fontSize: '0.85em', borderRadius: '6px' }}>●</span> {status}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="exp-role" style={{ fontSize: '1rem', marginTop: '2px', color: '#b3b3b3' }}>{role}</div>
                    </div>
                </div>
                <div className="exp-meta" >
                    <span>{dates}</span>
                    <span>{location}</span>
                </div>
            </div>
        </div>
    );
}
