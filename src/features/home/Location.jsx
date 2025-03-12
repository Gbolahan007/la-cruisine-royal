import { useState, useEffect, useRef } from 'react';

const Location = ({ targetNumber = 500, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const startCounting = () => {
      let start = 0;
      const increment = Math.ceil(targetNumber / (duration / 16)); // Smooth step
      const interval = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, 16);
    };

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
          observerRef.current.disconnect(); // Stop observing once triggered
        }
      },
      { threshold: 0.5 },
    );

    if (counterRef.current) {
      observerRef.current.observe(counterRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [targetNumber, duration]);

  return (
    <div ref={counterRef} className="relative py-40 text-5xl font-bold text-yellow-500">
      {count}
    </div>
  );
};

export default Location;
