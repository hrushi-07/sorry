import React from 'react';

interface FloatingHeartProps {
  delay: string;
  left: string;
  scale: string;
  duration: string;
}

export const FloatingHeart: React.FC<FloatingHeartProps> = ({ delay, left, scale, duration }) => {
  return (
    <div 
      className="absolute bottom-[-50px] text-rose-200 opacity-60 animate-float pointer-events-none select-none z-0"
      style={{
        left: left,
        animationDelay: delay,
        transform: `scale(${scale})`,
        animationDuration: duration,
        bottom: '10%',
      }}
    >
      <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    </div>
  );
};