import { useEffect, useMemo, useRef } from "react";
import { Swiper as SwiperClass } from "swiper";
import { Navigation, Keyboard, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ProjectsSwiper({ children, nextSelector = ".projects-navigation__next", prevSelector = ".projects-navigation__prev", speed = 900, spaceBetween = 24, loop = false, autoHeight = true }) {
  const swiperRef = useRef(null);
  const swiperInstance = useRef(null);

  // Ensure each child has the 'swiper-slide' class
  const slides = useMemo(() => {
    return Array.isArray(children) ? children : [children];
  }, [children]);

  useEffect(() => {
    if (!swiperRef.current || swiperInstance.current) return;

    swiperInstance.current = new SwiperClass(swiperRef.current, {
      modules: [Navigation, Keyboard, Mousewheel],
      speed,
      loop,
      spaceBetween,
      autoHeight,
      slidesPerView: 1,
      keyboard: { enabled: true },
      mousewheel: { forceToAxis: true },
      navigation: {
        nextEl: nextSelector,
        prevEl: prevSelector,
      },
      // Helps when slides size/content changes dynamically
      observer: true,
      observeParents: true,
      resizeObserver: true,
    });

    return () => {
      if (swiperInstance.current) {
        swiperInstance.current.destroy(true, true);
        swiperInstance.current = null;
      }
    };
  }, [speed, spaceBetween, loop, autoHeight, nextSelector, prevSelector]);

  // Update when slide children change
  useEffect(() => {
    if (swiperInstance.current) {
      swiperInstance.current.update();
    }
  }, [slides]);

  return (
    <div className="swiper projects-swiper w-full" ref={swiperRef}>
      <div className="swiper-wrapper">
        {slides.filter(Boolean).map((child, idx) => {
          if (!child) return null;
          const existing = child.props?.className || "";
          const className = existing.includes("swiper-slide") ? existing : `${existing} swiper-slide`.trim();
          return { ...child, props: { ...child.props, className, key: child.key ?? idx } };
        })}
      </div>
    </div>
  );
}
