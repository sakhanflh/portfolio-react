import React, { useState, useEffect } from 'react';

const RunningText = ({ texts }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(200); // Kecepatan ketik dalam milidetik
    const [pauseTime, setPauseTime] = useState(1000); // Waktu jeda sebelum menghapus dalam milidetik

    useEffect(() => {
        const text = texts[currentIndex];
        if (!isDeleting && charIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText((prevText) => prevText + text[charIndex]);
                setCharIndex((prevIndex) => prevIndex + 1);
            }, typingSpeed);
            return () => clearTimeout(timer);
        } else if (!isDeleting && charIndex === text.length) {
            setIsDeleting(true);
            setPauseTime(1500);
        } else if (isDeleting && charIndex > 0) {
            const timer = setTimeout(() => {
                setDisplayedText((prevText) => prevText.substring(0, prevText.length - 1));
                setCharIndex((prevIndex) => prevIndex - 1);
            }, typingSpeed / 1); // Kecepatan penghapusan setengah dari kecepatan ketik
            return () => clearTimeout(timer);
        } else {
            setIsDeleting(false);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setCharIndex(0);
            setDisplayedText('');
            setPauseTime(3000); // Waktu jeda setelah selesai menghapus
        }
    }, [texts, currentIndex, charIndex, isDeleting, typingSpeed, pauseTime]);

    return <span style={{ color: '#FFD95A' }}>{displayedText}</span>;
};

export default RunningText;