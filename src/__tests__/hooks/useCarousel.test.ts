import { renderHook, act } from '@testing-library/react';
import { useCarousel } from '@/lib/hooks/useCarousel';

describe('useCarousel', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('initializes with currentIndex at 0', () => {
    const { result } = renderHook(() =>
      useCarousel({ itemCount: 3 })
    );

    expect(result.current.currentIndex).toBe(0);
  });

  it('initializes with progress at 0', () => {
    const { result } = renderHook(() =>
      useCarousel({ itemCount: 3 })
    );

    expect(result.current.progress).toBe(0);
  });

  it('initializes as playing', () => {
    const { result } = renderHook(() =>
      useCarousel({ itemCount: 3 })
    );

    expect(result.current.isPlaying).toBe(true);
  });

  it('goToNext increments currentIndex', () => {
    const { result } = renderHook(() =>
      useCarousel({ itemCount: 3 })
    );

    act(() => {
      result.current.goToNext();
    });

    expect(result.current.currentIndex).toBe(1);
  });

  it('goToNext wraps around at end', () => {
    const { result } = renderHook(() =>
      useCarousel({ itemCount: 3 })
    );

    act(() => {
      result.current.goToNext();
      result.current.goToNext();
      result.current.goToNext();
    });

    expect(result.current.currentIndex).toBe(0);
  });

  it('goToPrev decrements currentIndex', () => {
    const { result } = renderHook(() =>
      useCarousel({ itemCount: 3 })
    );

    act(() => {
      result.current.goToNext(); // Go to 1
      result.current.goToPrev(); // Go back to 0
    });

    expect(result.current.currentIndex).toBe(0);
  });

  it('goToPrev wraps around at beginning', () => {
    const { result } = renderHook(() =>
      useCarousel({ itemCount: 3 })
    );

    act(() => {
      result.current.goToPrev();
    });

    expect(result.current.currentIndex).toBe(2);
  });

  it('goToIndex sets specific index', () => {
    const { result } = renderHook(() =>
      useCarousel({ itemCount: 3 })
    );

    act(() => {
      result.current.goToIndex(2);
    });

    expect(result.current.currentIndex).toBe(2);
  });

  it('pause stops auto-play', () => {
    const { result } = renderHook(() =>
      useCarousel({ itemCount: 3 })
    );

    act(() => {
      result.current.pause();
    });

    expect(result.current.isPlaying).toBe(false);
  });

  it('resume starts auto-play', () => {
    const { result } = renderHook(() =>
      useCarousel({ itemCount: 3 })
    );

    act(() => {
      result.current.pause();
      result.current.resume();
    });

    expect(result.current.isPlaying).toBe(true);
  });

  it('resets progress when navigating', () => {
    const { result } = renderHook(() =>
      useCarousel({ itemCount: 3, autoPlayInterval: 5000 })
    );

    // Advance time to build up progress
    act(() => {
      jest.advanceTimersByTime(2500);
    });

    // Navigate
    act(() => {
      result.current.goToNext();
    });

    expect(result.current.progress).toBe(0);
  });

  it('provides touch handlers', () => {
    const { result } = renderHook(() =>
      useCarousel({ itemCount: 3 })
    );

    expect(result.current.handlers).toHaveProperty('onMouseEnter');
    expect(result.current.handlers).toHaveProperty('onMouseLeave');
    expect(result.current.handlers).toHaveProperty('onTouchStart');
    expect(result.current.handlers).toHaveProperty('onTouchEnd');
  });

  it('auto-advances after interval', () => {
    const { result } = renderHook(() =>
      useCarousel({ itemCount: 3, autoPlayInterval: 5000 })
    );

    expect(result.current.currentIndex).toBe(0);

    act(() => {
      jest.advanceTimersByTime(5100); // Just over 5 seconds
    });

    expect(result.current.currentIndex).toBe(1);
  });
});
