import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

export const FadeIn: React.FC<FadeInProps & Omit<MotionProps, 'children'>> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  as = 'div',
  style,
  ...props
}) => {
  // Use motion.create if present, or fallback to motion[as]
  const MotionComponent = (typeof motion.create === 'function'
    ? motion.create(as as any)
    : (motion as any)[as] || motion.div);

  return (
    <MotionComponent
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default FadeIn;
