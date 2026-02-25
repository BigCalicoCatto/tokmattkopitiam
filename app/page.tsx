"use client";

import React, { useMemo } from 'react';

export default function NotFoundPage() {
  // Generate 200 random icons with different paths and speeds
  const icons = useMemo(() => {
    return Array.from({ length: 200 }).map((_, i) => ({
      id: i,
      type: i % 2 === 0 ? "fa-cat" : "fa-dog",
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${10 + Math.random() * 20}s`, 
      delay: `${Math.random() * -20}s`, 
      size: `${1 + Math.random() * 2}rem`,
      opacity: 0.1 + Math.random() * 0.3,
      direction: Math.random() > 0.5 ? 1 : -1,
    }));
  }, []);

  return (
    <>
      {/* Font Awesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" 
      />

      <main className="relative w-full h-screen overflow-hidden bg-slate-900 flex items-center justify-center">
        {/* Floating Icons Layer */}
        <div className="absolute inset-0 pointer-events-none">
          {icons.map((item) => (
            <i
              key={item.id}
              className={`fa-solid ${item.type} absolute animate-fly`}
              style={{
                top: item.top,
                left: item.left,
                fontSize: item.size,
                opacity: item.opacity,
                color: 'white',
                animationDuration: item.duration,
                animationDelay: item.delay,
                // @ts-ignore - custom property for CSS animation
                '--dir': item.direction,
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Center Card */}
        <div className="relative z-10 text-center p-12 bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-3xl shadow-2xl">
          <h1 className="text-5xl font-black text-white mb-4 tracking-tight">
            404
          </h1>
          <p className="text-xl text-slate-300 font-medium">
            There’s nothing to show here...
          </p>
          <div className="mt-6 h-1 w-20 bg-blue-500 mx-auto rounded-full" />
        </div>

        <style jsx global>{`
          @keyframes fly {
            0% {
              transform: translate(0, 0) rotate(0deg);
            }
            33% {
              transform: translate(calc(150px * var(--dir)), calc(100px * var(--dir))) rotate(120deg);
            }
            66% {
              transform: translate(calc(-100px * var(--dir)), calc(200px * var(--dir))) rotate(240deg);
            }
            100% {
              transform: translate(0, 0) rotate(360deg);
            }
          }
          .animate-fly {
            animation-name: fly;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
          }
        `}</style>
      </main>
    </>
  );
}
