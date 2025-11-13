'use client';

import React from 'react';

// Simple animated component inspired by ReactBits
export function AnimatedCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div 
      className={`transition-all duration-300 hover:scale-105 hover:shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
