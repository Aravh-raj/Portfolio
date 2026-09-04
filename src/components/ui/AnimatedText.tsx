import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}

const Character: React.FC<CharProps> = ({ char, progress, start, end }) => {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder for natural layout */}
      <span className="opacity-0 select-none">{char}</span>
      {/* Absolute positioned animated character */}
      <motion.span
        className="absolute left-0 top-0 select-none"
        style={{ opacity }}
      >
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const totalChars = text.length;
  // Split into words while keeping word boundaries
  const words = text.split(' ');
  let charCounter = 0;

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        const startIndex = charCounter;
        charCounter += word.length + 1; // +1 for space

        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {wordChars.map((char, charIdx) => {
              const globalIndex = startIndex + charIdx;
              const start = Math.max(0, (globalIndex / totalChars) * 0.95);
              const end = Math.min(1, start + 0.08);

              return (
                <Character
                  key={charIdx}
                  char={char}
                  progress={scrollYProgress}
                  start={start}
                  end={end}
                />
              );
            })}
            {wordIndex < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        );
      })}
    </p>
  );
};

export default AnimatedText;
