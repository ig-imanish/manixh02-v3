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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div className="exp-logo">
                        {logoUrl ? (
                            <img src={logoUrl} alt={company + ' logo'} className="exp-logo-img" />
                        ) : (
                            logo
                        )}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
                        <div style={{ fontSize: '1rem', marginTop: '2px', color: '#b3b3b3' }}>{role}</div>
                    </div>
                </div>
                <div style={{ textAlign: 'right', minWidth: '180px', alignSelf: 'center' }}>
                    <div style={{ color: '#b3b3b3', fontSize: '0.9em' }}>{dates}</div>
                    <div style={{ color: '#b3b3b3', fontSize: '0.9em' }}>{location}</div>
                </div>
            </div>
        </div>
    );
}
