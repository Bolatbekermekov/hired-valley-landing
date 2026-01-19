// src/components/Plasma.tsx
'use client';

import { useEffect, useRef } from 'react';

interface PlasmaProps {
  speed?: number;
  opacity?: number;
}

export default function Plasma({ speed = 0.5, opacity = 1 }: PlasmaProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Устанавливаем размер canvas
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let time = 0;

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      time += 0.003 * speed;

      // Создаём gradient для каждого кадра
      for (let y = 0; y < height; y += 3) {
        for (let x = 0; x < width; x += 3) {
          // Plasma алгоритм с множественными синусоидами
          const value1 = Math.sin(x * 0.01 + time);
          const value2 = Math.sin(y * 0.01 + time);
          const value3 = Math.sin((x + y) * 0.008 + time);
          const value4 = Math.sin(Math.sqrt(x * x + y * y) * 0.008 + time * 0.5);
          
          const plasma = (value1 + value2 + value3 + value4) / 4;
          
          // Конвертируем в диапазон 0-1
          const normalized = (plasma + 1) / 2;

          // Цветовая палитра - фиолетовые тона
          let r, g, b;
          
          if (normalized < 0.33) {
            // Тёмно-фиолетовый -> Средний фиолетовый
            const t = normalized / 0.33;
            r = Math.floor(60 + t * 80);   // 60 -> 140
            g = Math.floor(20 + t * 30);   // 20 -> 50
            b = Math.floor(80 + t * 80);   // 80 -> 160
          } else if (normalized < 0.66) {
            // Средний фиолетовый -> Яркий фиолетовый
            const t = (normalized - 0.33) / 0.33;
            r = Math.floor(140 + t * 60);  // 140 -> 200
            g = Math.floor(50 + t * 70);   // 50 -> 120
            b = Math.floor(160 + t * 60);  // 160 -> 220
          } else {
            // Яркий фиолетовый -> Светло-фиолетовый
            const t = (normalized - 0.66) / 0.34;
            r = Math.floor(200 + t * 55);  // 200 -> 255
            g = Math.floor(120 + t * 100); // 120 -> 220
            b = Math.floor(220 + t * 35);  // 220 -> 255
          }

          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
          ctx.fillRect(x, y, 3, 3);
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity }}
    />
  );
}
