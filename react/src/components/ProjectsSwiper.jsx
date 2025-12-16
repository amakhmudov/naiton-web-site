import { useEffect, useRef } from "react";
import { Swiper as SwiperClass } from "swiper";
import { Navigation, Keyboard, Mousewheel } from "swiper/modules";
import "swiper/css";

export default function ProjectsSwiper({ children }) {
  const swiperRef = useRef(null);
  const swiperInstance = useRef(null);

  useEffect(() => {
    if (swiperRef.current && !swiperInstance.current) {
      // Register modules
      SwiperClass.use([Navigation, Keyboard, Mousewheel]);

      // Initialize Swiper
      swiperInstance.current = new SwiperClass(swiperRef.current, {
        speed: 900,
        loop: false,
        spaceBetween: 24,
        autoHeight: true,
        mousewheel: true,
        slidesPerView: 1,
        keyboard: true,
        navigation: {
          nextEl: ".projects-navigation__next",
          prevEl: ".projects-navigation__prev",
        },
      });
    }

    return () => {
      // Cleanup on unmount
      if (swiperInstance.current) {
        swiperInstance.current.destroy(true, true);
        swiperInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="swiper projects-swiper w-full" ref={swiperRef}>
      <div className="swiper-wrapper">{children}</div>
    </div>
  );
}
