import { useEffect, useState } from 'react';

const useWindowScroll = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollTop / docHeight;

      setScrollOffset(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize the value

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollOffset;
};

export default useWindowScroll;
