import { useEffect, useState } from 'react';

interface LetterGlitchProps {
  className?: string;
  density?: 'low' | 'medium' | 'high';
  speed?: 'slow' | 'medium' | 'fast';
  opacity?: number;
  centerVignette?: boolean;
  outerVignette?: boolean;
  smooth?: boolean;
}

const LetterGlitch = ({ 
  className = '', 
  density = 'medium',
  speed = 'medium',
  opacity = 0.1,
  centerVignette = false,
  outerVignette = false,
  smooth = false
}: LetterGlitchProps) => {
  const [glitchLetters, setGlitchLetters] = useState<Array<{
    char: string;
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
    id: string;
  }>>([]);

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  useEffect(() => {
    const densityMap = {
      low: 20,
      medium: 40,
      high: 60
    };

    const speedMap = {
      slow: { min: 3000, max: 6000 },
      medium: { min: 1500, max: 3000 },
      fast: { min: 500, max: 1500 }
    };

    const generateLetters = () => {
      const letterCount = densityMap[density];
      const speedRange = speedMap[speed];
      
      const letters = Array.from({ length: letterCount }, (_, i) => {
        let x, y;
        
        if (centerVignette) {
          // Concentrate letters towards center using normal distribution
          const centerX = 50 + (Math.random() - 0.5) * 40; // 30-70% range
          const centerY = 50 + (Math.random() - 0.5) * 40; // 30-70% range
          x = Math.max(0, Math.min(100, centerX));
          y = Math.max(0, Math.min(100, centerY));
        } else {
          x = Math.random() * 100;
          y = Math.random() * 100;
        }
        
        return {
          char: characters[Math.floor(Math.random() * characters.length)],
          x,
          y,
          size: Math.random() * 20 + 10,
          delay: Math.random() * 2000,
          duration: Math.random() * (speedRange.max - speedRange.min) + speedRange.min,
          id: `letter-${i}-${Date.now()}`
        };
      });
      
      setGlitchLetters(letters);
    };

    generateLetters();
    
    const interval = setInterval(() => {
      setGlitchLetters(prev => 
        prev.map(letter => {
          let x, y;
          
          if (centerVignette) {
            const centerX = 50 + (Math.random() - 0.5) * 40;
            const centerY = 50 + (Math.random() - 0.5) * 40;
            x = Math.max(0, Math.min(100, centerX));
            y = Math.max(0, Math.min(100, centerY));
          } else {
            x = Math.random() * 100;
            y = Math.random() * 100;
          }
          
          return {
            ...letter,
            char: characters[Math.floor(Math.random() * characters.length)],
            x,
            y
          };
        })
      );
    }, smooth ? 4000 : 2000);

    return () => clearInterval(interval);
  }, [density, speed, centerVignette, smooth]);

  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ opacity }}
    >
      {glitchLetters.map((letter) => {
        // Calculate distance from center for outerVignette effect
        const distanceFromCenter = outerVignette ? 
          Math.sqrt(Math.pow(letter.x - 50, 2) + Math.pow(letter.y - 50, 2)) / 50 : 0;
        const vignetteOpacity = outerVignette ? 
          Math.max(0.1, 1 - distanceFromCenter * 0.8) : 1;
        
        return (
          <div
            key={letter.id}
            className={`absolute text-white/80 font-mono select-none ${smooth ? 'transition-all duration-1000 ease-in-out' : 'animate-pulse'}`}
            style={{
              left: `${letter.x}%`,
              top: `${letter.y}%`,
              fontSize: `${letter.size}px`,
              animationDelay: `${letter.delay}ms`,
              animationDuration: `${letter.duration}ms`,
              filter: 'blur(0.5px)',
              textShadow: '0 0 10px rgba(255,255,255,0.3)',
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: vignetteOpacity
            }}
          >
            {letter.char}
          </div>
        );
      })}
      
      {/* Additional glitch overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 255, 198, 0.1) 0%, transparent 50%)
          `,
          animation: 'glitchMove 8s ease-in-out infinite alternate'
        }}
      />
    </div>
  );
};

export default LetterGlitch;
