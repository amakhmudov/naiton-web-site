import { useEffect, useRef, useState } from "react";

export default function LazySection({ children, rootMargin = "0px", className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      {
        rootMargin, // Load content before entering viewport
        threshold: 0,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={sectionRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.6s ease-out",
        // Prevent layout shift by ensuring content is always rendered
        visibility: isVisible ? "visible" : "hidden",
        // Use content-visibility for better performance
        contentVisibility: isVisible ? "visible" : "auto",
      }}
    >
      {children}
    </div>
  );
}
