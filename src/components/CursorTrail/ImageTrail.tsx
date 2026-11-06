import React, { useEffect, useRef } from 'react';

interface ImageTrailProps {
  images: string[];
  distance?: number;
  size?: number;
  radius?: number;
  life?: number;
  className?: string;
  children?: React.ReactNode;
}

export const ImageTrail: React.FC<ImageTrailProps> = ({
  images,
  distance = 110,
  size = 140,
  radius = 16,
  life = 1.3,
  className = '',
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trailContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const trailEl = trailContainerRef.current;
    if (!container || !trailEl || !images.length) return;

    // Check pointer capabilities and reduced motion preferences
    try {
      const isFinePointer = window.matchMedia('(pointer: fine)').matches;
      const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!isFinePointer || isReducedMotion) return;
    } catch {
      return;
    }

    // Preload images into browser cache
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    let lastPos = { x: -9999, y: -9999 };
    let spawnCounter = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Bound check
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

      const dx = x - lastPos.x;
      const dy = y - lastPos.y;

      // Distance squared check
      if (dx * dx + dy * dy < distance * distance) return;

      lastPos = { x, y };

      // Spawn image element
      const img = document.createElement('img');
      img.src = images[spawnCounter % images.length];
      img.alt = '';
      img.draggable = false;

      // Natural tilt offset matching Wayfare formula: (s * 37) % 17 - 8
      const angle = (spawnCounter * 37) % 17 - 8;
      spawnCounter++;

      const driftX = Math.max(-40, Math.min(40, dx * 0.6));
      const height = Math.round(size * 1.25);

      Object.assign(img.style, {
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${height}px`,
        objectFit: 'cover',
        borderRadius: `${radius}px`,
        pointerEvents: 'none',
        boxShadow: '0 20px 45px rgba(0, 0, 0, 0.35)',
        willChange: 'transform, opacity',
        zIndex: '5',
      });

      trailEl.appendChild(img);

      // Web Animations API with exact Wayfare keyframe offsets
      const animation = img.animate(
        [
          {
            transform: `translate(-50%, -50%) scale(0.55) rotate(${angle - 6}deg)`,
            opacity: 0,
          },
          {
            transform: `translate(-50%, -50%) scale(1) rotate(${angle}deg)`,
            opacity: 1,
            offset: 0.18,
          },
          {
            transform: `translate(calc(-50% + ${driftX}px), -58%) scale(1) rotate(${angle}deg)`,
            opacity: 1,
            offset: 0.7,
          },
          {
            transform: `translate(calc(-50% + ${driftX * 1.3}px), -64%) scale(0.92) rotate(${angle + 3}deg)`,
            opacity: 0,
            offset: 1,
          },
        ],
        {
          duration: life * 1000,
          easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
          fill: 'forwards',
        }
      );

      // Controlled DOM cleanup: immediately detached when animation finishes
      animation.onfinish = () => {
        img.remove();
      };
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      if (trailEl) {
        trailEl.innerHTML = '';
      }
    };
  }, [images, distance, size, radius, life]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Floating Trail Layer (pointer-events none, absolute overlay) */}
      <div
        ref={trailContainerRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden z-20"
      />

      {children}
    </div>
  );
};

