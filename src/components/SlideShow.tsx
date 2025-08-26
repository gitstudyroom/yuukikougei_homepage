import React, { useState, useEffect } from 'react';

const IMG_7702 = require('../../images/IMG_7702.JPG');
const IMG_7703 = require('../../images/IMG_7703.JPG');
const IMG_7704 = require('../../images/IMG_7704.JPG');
const IMG_7705 = require('../../images/IMG_7705.JPG');
const IMG_7706 = require('../../images/IMG_7706.JPG');

const images: string[] = [
    IMG_7702,
    IMG_7703,
    IMG_7704,
    IMG_7705,
    IMG_7706
];

const SlideShow: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex: number) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <div className="slideshow">
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    className={index === currentImageIndex ? 'active' : ''}
                    alt={`Slide ${index + 1}`}
                />
            ))}
        </div>
    );
};

export default SlideShow;