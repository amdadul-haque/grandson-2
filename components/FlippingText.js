import { useState, useEffect } from 'react';

const FlippingText = () => {
  const interval = 2000;
  const texts = ['Hello', 'World', 'This is', 'Flipping Text'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(textChangeInterval);
  }, [texts, interval]);

  return (
    <div className="relative h-40 w-full">
    <h2>Flipping</h2>
      {texts.map((text, index) => (
        <span
          key={index}
          className={`text-[100px] text-bold absolute inset-0 flex items-center justify-center transition-transform duration-700 ${index === currentTextIndex ? 'transform rotateX-0' : 'transform rotateX-90'
            }`}
        >
          {text}
        </span>
      ))}
    </div>
  );
};

export default FlippingText;
