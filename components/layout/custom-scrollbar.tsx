'use client';

import React, { useState, useEffect } from 'react';

export const CustomScrollbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Calculate scroll progress
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      
      setScrollProgress(progress);
      setIsScrolling(true);

      // Hide scrollbar after scrolling stops
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    const handleMouseMove = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 2000);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const handleScrollbarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const scrollbar = e.currentTarget;
    const rect = scrollbar.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const scrollbarHeight = rect.height;
    const clickPercentage = clickY / scrollbarHeight;
    
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const maxScroll = documentHeight - windowHeight;
    
    window.scrollTo({
      top: maxScroll * clickPercentage,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-[60] transition-opacity duration-300 ${
        isScrolling ? 'opacity-100' : 'opacity-30 hover:opacity-100'
      }`}
    >
      {/* Scrollbar Track */}
      <div 
        className="w-2 h-64 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full cursor-pointer relative overflow-hidden border border-white/30 dark:border-white/20"
        onClick={handleScrollbarClick}
      >
        {/* Scrollbar Thumb */}
        <div 
          className="w-full bg-[#2368AB] rounded-full transition-all duration-200 ease-out shadow-lg"
          style={{
            height: `${Math.max(scrollProgress * 0.8, 8)}%`,
            transform: `translateY(${scrollProgress * 1.2}%)`,
          }}
        />
        
        {/* Glow effect */}
        <div 
          className="absolute w-full bg-blue-300/50 dark:bg-blue-400/60 rounded-full blur-sm"
          style={{
            height: `${Math.max(scrollProgress * 0.8, 8)}%`,
            transform: `translateY(${scrollProgress * 1.2}%)`,
          }}
        />
      </div>
      
      {/* Progress indicator */}
      {/* <div className="mt-2 text-center">
        <span className="text-xs text-white/80 dark:text-white/70 font-mono bg-black/20 dark:bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
          {Math.round(scrollProgress)}%
        </span>
      </div> */}
    </div>
  );
};