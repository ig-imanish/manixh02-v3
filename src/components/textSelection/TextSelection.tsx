import { useEffect, useState } from 'react';
import { FaCopy, FaShare, FaSearch } from 'react-icons/fa';
import './TextSelection.css';

interface SelectionPosition {
    x: number;
    y: number;
    width: number;
    height: number;
}

export default function TextSelection() {
    const [selectedText, setSelectedText] = useState('');
    const [position, setPosition] = useState<SelectionPosition | null>(null);
    const [showActions, setShowActions] = useState(false);

    useEffect(() => {
        const handleSelection = () => {
            const selection = window.getSelection();
            const text = selection?.toString().trim();

            if (text && text.length > 0) {
                const range = selection?.getRangeAt(0);
                const rect = range?.getBoundingClientRect();

                if (rect) {
                    setSelectedText(text);
                    const actionBarHeight = 40;
                    const spacing = 20;

                    setPosition({
                        x: rect.left + rect.width / 2 + window.scrollX,
                        y: rect.top + window.scrollY - actionBarHeight - spacing,
                        width: rect.width,
                        height: rect.height
                    });
                    setShowActions(true);
                }
            } else {
                setShowActions(false);
                setSelectedText('');
                setPosition(null);
            }
        };

        const handleClickOutside = () => {
            setTimeout(() => {
                const selection = window.getSelection();
                if (!selection?.toString().trim()) {
                    setShowActions(false);
                    setSelectedText('');
                    setPosition(null);
                }
            }, 100);
        };

        document.addEventListener('mouseup', handleSelection);
        document.addEventListener('keyup', handleSelection);
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('mouseup', handleSelection);
            document.removeEventListener('keyup', handleSelection);
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(selectedText);
            console.log('Text copied to clipboard');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    text: selectedText,
                    title: 'Shared from Manixh02 Portfolio'
                });
            } catch (err) {
                console.error('Error sharing: ', err);
            }
        } else {
            handleCopy();
        }
    };

    const handleSearch = () => {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(selectedText)}`;
        window.open(searchUrl, '_blank');
    };

    if (!showActions || !position) return null;

    return (
        <div
            className="text-selection-actions"
            style={{
                left: position.x,
                top: position.y,
                transform: 'translateX(-50%)'
            }}
        >
            <button
                className="selection-action-btn"
                onClick={handleCopy}
                title="Copy text"
            >
                <FaCopy />
            </button>
            <button
                className="selection-action-btn"
                onClick={handleShare}
                title="Share text"
            >
                <FaShare />
            </button>
            <button
                className="selection-action-btn"
                onClick={handleSearch}
                title="Search on Google"
            >
                <FaSearch />
            </button>
        </div>
    );
}