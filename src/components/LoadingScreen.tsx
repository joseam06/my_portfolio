"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const shapes = [
  { top: "8%", left: "4%", size: 40, rotate: 12, diamond: false },
  { top: "14%", left: "10%", size: 22, rotate: 45, diamond: true },
  { top: "10%", right: "6%", size: 34, rotate: 20, diamond: true },
  { top: "18%", right: "12%", size: 26, rotate: -10, diamond: false },
  { bottom: "10%", left: "6%", size: 30, rotate: 30, diamond: true },
  { bottom: "16%", left: "14%", size: 20, rotate: 15, diamond: false },
  { bottom: "8%", right: "8%", size: 42, rotate: -15, diamond: false },
  { bottom: "20%", right: "16%", size: 24, rotate: 10, diamond: true },
];

export default function LoadingScreen({
  onComplete,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const duration = 1800;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = 100 / totalSteps;

    let current = 0;

    const interval = setInterval(() => {
      current += increment;

      if (current >= 100) {
        setProgress(100);
        clearInterval(interval);

        setTimeout(() => {
          setVisible(false);
        }, 350);
      } else {
        setProgress(Math.round(current));
      }
    }, stepTime);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence
      onExitComplete={onComplete}
    >
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#080808]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          {/* Formas decorativas */}
          {shapes.map((shape, index) => (
            <motion.div
              key={index}
              className="absolute border border-white/10"
              style={{
                top: shape.top,
                left: shape.left,
                right: shape.right,
                bottom: shape.bottom,
                width: shape.size,
                height: shape.size,
                transform: `rotate(${shape.rotate}deg)`,
              }}
              animate={{
                y: [0, -12, 0],
                rotate: [
                  shape.rotate,
                  shape.rotate + 8,
                  shape.rotate,
                ],
              }}
              transition={{
                duration: 4 + index * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Contenido central */}
          <div className="relative flex flex-col items-center">
            
            {/* J + círculo */}
            <div className="relative flex items-center justify-center">
              
              <span className="absolute -left-14 select-none text-7xl font-bold text-white/[0.08]">
                J
              </span>

              <motion.div
                className="h-40 w-40 rounded-full border border-white/10"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="absolute h-28 w-28 rounded-full border border-white/[0.05]"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Información de carga */}
            <div className="mt-8 w-56">
              
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                  Cargando
                </span>

                <span className="text-[10px] text-white/50">
                  {progress}%
                </span>
              </div>

              {/* Barra */}
              <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full bg-white"
                  animate={{
                    width: `${progress}%`,
                  }}
                  transition={{
                    duration: 0.05,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Puntos */}
              <div className="mt-4 flex justify-center gap-1">
                {[0, 1, 2].map((index) => (
                  <motion.span
                    key={index}
                    className="h-1 w-1 rounded-full bg-white/60"
                    animate={{
                      opacity: [0.2, 1, 0.2],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}