import { useState } from 'react';
import { getAllDecorations, type DecorationImage } from '../../utils/ImageDecoration';
import './DecorationTester.css';

interface DecorationTesterProps {
    onImageChange: (filename: string, info: DecorationImage) => void;
}

export default function DecorationTester({ onImageChange }: DecorationTesterProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const decorations = getAllDecorations();

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % decorations.length;
        setCurrentIndex(nextIndex);
        const decoration = decorations[nextIndex];
        onImageChange(decoration.filename, decoration);
    };

    const handlePrevious = () => {
        const prevIndex = currentIndex === 0 ? decorations.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
        const decoration = decorations[prevIndex];
        onImageChange(decoration.filename, decoration);
    };

    const handleSelect = (index: number) => {
        setCurrentIndex(index);
        const decoration = decorations[index];
        onImageChange(decoration.filename, decoration);
    };

    return (
        <div className="decoration-tester">
            <div className="decoration-tester-header">
                <h3>🧪 Decoration Tester</h3>
                <p>Testing: {decorations[currentIndex]?.name}</p>
            </div>

            <div className="decoration-controls">
                <button onClick={handlePrevious} className="decoration-btn">
                    ← Previous
                </button>
                <span className="decoration-counter">
                    {currentIndex + 1} / {decorations.length}
                </span>
                <button onClick={handleNext} className="decoration-btn">
                    Next →
                </button>
            </div>

            <div className="decoration-grid">
                {decorations.map((decoration, index) => (
                    <button
                        key={index}
                        onClick={() => handleSelect(index)}
                        className={`decoration-item ${index === currentIndex ? 'active' : ''}`}
                        title={`${decoration.name} - ${decoration.description}`}
                    >
                        <div className="decoration-day">{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][decoration.dayIndex]}</div>
                        <div className="decoration-name">{decoration.name}</div>
                    </button>
                ))}
            </div>
        </div>
    );
}
