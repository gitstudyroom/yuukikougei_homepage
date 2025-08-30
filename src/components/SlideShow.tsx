import React, { useState, useEffect } from 'react';

const importAll = (r: __WebpackModuleApi.RequireContext): string[] => r.keys().map(r) as string[];
const images: string[] = importAll(require.context('../../images/', false, /PRJ_\d{3}\.JPG$/));

const SlideShow: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex: number) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
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