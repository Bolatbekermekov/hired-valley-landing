// src/components/AnimatedBackground.tsx
'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* Основной большой blob - левый верхний */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.9) 0%, rgba(126, 34, 206, 0.6) 30%, transparent 70%)',
          filter: 'blur(120px)',
          top: '-15%',
          left: '-10%',
        }}
        animate={{
          x: [0, 150, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Правый верхний blob */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, rgba(147, 51, 234, 0.5) 35%, transparent 70%)',
          filter: 'blur(110px)',
          top: '-10%',
          right: '-5%',
        }}
        animate={{
          x: [0, -120, 0],
          y: [0, 150, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Нижний правый blob */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '750px',
          height: '750px',
          background: 'radial-gradient(circle, rgba(126, 34, 206, 0.85) 0%, rgba(107, 33, 168, 0.6) 30%, transparent 65%)',
          filter: 'blur(130px)',
          bottom: '-20%',
          right: '-15%',
        }}
        animate={{
          x: [0, -100, 50, 0],
          y: [0, -80, 0],
          scale: [1, 1.1, 1.3, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      {/* Нижний левый blob */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, rgba(124, 58, 237, 0.5) 35%, transparent 70%)',
          filter: 'blur(100px)',
          bottom: '-10%',
          left: '-8%',
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -120, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6
        }}
      />

      {/* Центральный floating blob */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.7) 0%, rgba(147, 51, 234, 0.4) 40%, transparent 70%)',
          filter: 'blur(140px)',
          top: '40%',
          left: '50%',
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          x: [0, 80, -80, 0],
          y: [0, -60, 60, 0],
          scale: [1, 1.4, 0.8, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Дополнительный accent blob */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(192, 132, 252, 0.6) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 70%)',
          filter: 'blur(90px)',
          top: '25%',
          left: '30%',
        }}
        animate={{
          x: [0, -60, 60, 0],
          y: [0, 80, -40, 0],
          scale: [1, 1.2, 0.85, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Overlay для глубины */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
        }}
      />
    </div>
  );
}
