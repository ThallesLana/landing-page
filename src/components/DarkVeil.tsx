import { useEffect, useState } from 'react';

interface DarkVeilProps {
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
  animated?: boolean;
  particles?: boolean;
}

const DarkVeil = ({ 
  className = '', 
  intensity = 'medium',
  animated = true,
  particles = true
}: DarkVeilProps) => {
  const [particleElements, setParticleElements] = useState<Array<{
    id: string;
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
  }>>([]);

  const intensityMap = {
    light: 0.3,
    medium: 0.5,
    heavy: 0.7
  };

  useEffect(() => {
    if (!particles) return;

    const generateParticles = () => {
      const particleCount = 15;
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: `particle-${i}-${Date.now()}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 20 + 10
      }));
      
      setParticleElements(newParticles);
    };

    generateParticles();

    if (animated) {
      const interval = setInterval(() => {
        setParticleElements(prev => 
          prev.map(particle => ({
            ...particle,
            y: (particle.y + 0.5) % 100,
            x: particle.x + (Math.sin(Date.now() * 0.001 + particle.speed) * 0.1)
          }))
        );
      }, 100);

      return () => clearInterval(interval);
    }
  }, [particles, animated]);

  const veilOpacity = intensityMap[intensity];

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Main gradient veil overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(119deg, rgba(2, 0, 36, ${veilOpacity * 0.8}) 0%, rgba(9, 9, 121, ${veilOpacity * 0.6}) 35%, rgba(0, 212, 255, ${veilOpacity * 0.4}) 100%)
          `
        }}
      />
      
      {/* Animated gradient overlay */}
      {animated && (
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(9, 9, 121, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(2, 0, 36, 0.25) 0%, transparent 70%)
            `
          }}
        />
      )}

      {/* Floating gradient particles */}
      {particles && (
        <div className="absolute inset-0 overflow-hidden">
          {particleElements.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full blur-sm"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                background: `radial-gradient(circle, rgba(0, 212, 255, ${particle.opacity}) 0%, rgba(9, 9, 121, ${particle.opacity * 0.5}) 70%, transparent 100%)`,
                animation: animated ? `float ${particle.speed}s ease-in-out infinite alternate` : undefined
              }}
            />
          ))}
        </div>
      )}

      {/* Gradient noise texture */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(9, 9, 121, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }}
      />
    </div>
  );
};

export default DarkVeil;
