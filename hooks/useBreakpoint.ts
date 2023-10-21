import { useState, useEffect } from 'react';

type Breakpoint = 'sm' | 'md' | 'lg';

const breakpoints: Record<Breakpoint, number> = {
  sm: 576,
  md: 768,
  lg: 1440,
};

function useBreakpoint(): Breakpoint {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('sm');

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let newBreakpoint: Breakpoint = 'sm';

      for (const key in breakpoints) {
        if (screenWidth >= breakpoints[key as Breakpoint]) {
          newBreakpoint = key as Breakpoint;
        }
      }

      setCurrentBreakpoint(newBreakpoint);
    };

    // Initial call to set the breakpoint on component mount
    handleResize();

    // Listen to window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return currentBreakpoint;
}

export default useBreakpoint;
