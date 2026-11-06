import React, { useEffect, useRef, useState, useMemo } from 'react';

interface TextFillProps {
  text: string;
  start?: number;
  end?: number;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p';
}

export const TextFill: React.FC<TextFillProps> = ({
  text,
  start = 0.85,
  end = 0.25,
  className = '',
  tag: Tag = 'h2',
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeCharsCount, setActiveCharsCount] = useState<number>(-1);

  // Split text into words and preserve spacing
  const words = useMemo(() => text.split(/\s+/).filter(Boolean), [text]);
  const totalChars = useMemo(
    () => words.reduce((acc, word) => acc + word.length, 0),
    [words]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) {
      setActiveCharsCount(totalChars);
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Wayfare progressive scroll calculation:
          const startPx = windowHeight * start;
          const endPx = windowHeight * end;
          const totalDistance = Math.max(1, (startPx - endPx) + rect.height);
          const currentDistance = startPx - rect.top;

          const progress = Math.min(1, Math.max(0, currentDistance / totalDistance));
          const currentChars = Math.round(progress * totalChars);
          setActiveCharsCount(currentChars);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [totalChars, start, end]);

  let charIndexCounter = 0;

  return (
    <Tag
      ref={containerRef as any}
      aria-label={text}
      className={`font-display font-medium text-balance ${className}`}
    >
      {words.map((word, wordIdx) => {
        const wordChars = word.split('');
        return (
          <span
            key={wordIdx}
            aria-hidden="true"
            className="inline-block whitespace-pre"
          >
            {wordChars.map((char, charIdx) => {
              const currentCharIdx = charIndexCounter++;
              const isFilled =
                activeCharsCount < 0 || currentCharIdx <= activeCharsCount;

              return (
                <span
                  key={charIdx}
                  className={`transition-colors duration-[350ms] ease-out ${
                    isFilled
                      ? 'text-[#211D16] dark:text-[#F3ECDF]'
                      : 'text-[#E0D6C4] dark:text-[#2F2A20]'
                  }`}
                >
                  {char}
                </span>
              );
            })}
            {wordIdx < words.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </Tag>
  );
};
