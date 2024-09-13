import React, { useState, useEffect } from "react";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
}

function FadeUp({ children, delay = 0 }: FadeUpProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}

export default FadeUp;
