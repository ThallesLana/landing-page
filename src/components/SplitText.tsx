import { useEffect, useState } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  animationType?: 'fadeUp' | 'fadeIn' | 'slideIn' | 'bounce';
}

const SplitText = ({ 
  text, 
  className = '', 
  delay = 0,
  staggerDelay = 50,
  animationType = 'fadeUp'
}: SplitTextProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getAnimationClass = (index: number) => {
    const baseClasses = 'inline-block transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (animationType) {
        case 'fadeUp':
          return `${baseClasses} opacity-0 translate-y-4`;
        case 'fadeIn':
          return `${baseClasses} opacity-0`;
        case 'slideIn':
          return `${baseClasses} opacity-0 -translate-x-4`;
        case 'bounce':
          return `${baseClasses} opacity-0 scale-50`;
        default:
          return `${baseClasses} opacity-0 translate-y-4`;
      }
    }

    switch (animationType) {
      case 'fadeUp':
        return `${baseClasses} opacity-100 translate-y-0`;
      case 'fadeIn':
        return `${baseClasses} opacity-100`;
      case 'slideIn':
        return `${baseClasses} opacity-100 translate-x-0`;
      case 'bounce':
        return `${baseClasses} opacity-100 scale-100`;
      default:
        return `${baseClasses} opacity-100 translate-y-0`;
    }
  };

  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={getAnimationClass(index)}
          style={{
            transitionDelay: isVisible ? `${index * staggerDelay}ms` : '0ms'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default SplitText;
