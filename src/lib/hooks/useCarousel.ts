'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface UseCarouselOptions {
  itemCount: number;
  autoPlayInterval?: number;
  pauseOnHover?: boolean;
}

interface UseCarouselReturn {
  currentIndex: number;
  progress: number;
  isPlaying: boolean;
  goToNext: () => void;
  goToPrev: () => void;
  goToIndex: (index: number) => void;
  pause: () => void;
  resume: () => void;
  handlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onTouchStart: (e: React.TouchEvent) => void;
    onTouchEnd: (e: React.TouchEvent) => void;
  };
}

export function useCarousel({
  itemCount,
  autoPlayInterval = 5000,
  pauseOnHover = true,
}: UseCarouselOptions): UseCarouselReturn {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const startTimeRef = useRef<number>(0);
  const touchStartRef = useRef<number>(0);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize startTime on mount
  useEffect(() => {
    startTimeRef.current = Date.now();
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % itemCount);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, [itemCount]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, [itemCount]);

  const goToIndex = useCallback((index: number) => {
    setCurrentIndex(index);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  const pause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const resume = useCallback(() => {
    setIsPlaying(true);
    startTimeRef.current = Date.now() - (progress / 100) * autoPlayInterval;
  }, [progress, autoPlayInterval]);

  // Auto-play effect
  useEffect(() => {
    if (!isPlaying || (pauseOnHover && isHovered)) {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
      return;
    }

    startTimeRef.current = Date.now() - (progress / 100) * autoPlayInterval;

    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const newProgress = Math.min((elapsed / autoPlayInterval) * 100, 100);

      if (newProgress >= 100) {
        goToNext();
      } else {
        setProgress(newProgress);
      }
    }, 50);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isPlaying, isHovered, pauseOnHover, autoPlayInterval, goToNext, progress]);

  // Touch handlers for swipe support
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStartRef.current - touchEnd;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  }, [goToNext, goToPrev]);

  const handlers = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
  };

  return {
    currentIndex,
    progress,
    isPlaying: isPlaying && !(pauseOnHover && isHovered),
    goToNext,
    goToPrev,
    goToIndex,
    pause,
    resume,
    handlers,
  };
}
