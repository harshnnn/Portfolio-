import { motion } from "framer-motion";
import { styles } from "../styles";
import BadgeCard from "./BadgeCard";
import { Suspense, useEffect, useState } from "react";
import CanvasLoader from "./Loader";
import useWindowScroll from "./WindowScrollHook";

const Hero = () => {
  const scrollOffset = useWindowScroll();

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollPosition(scrollY);
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto bg-[#0e0e0f]">
      <div
        className={`absolute inset-0 top-[220px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center h-full">
          <div className='w-5 h-5 rounded-full bg-[#e6e6ec]' />
          <div className='w-1 sm:h-80 h-80 relative overflow-hidden white-gradient' >
            <div
              className='absolute  w-full top-0 left-0  h-5 white-gradient rounded-full'
              style={{ transform: `translateY(${scrollPosition}px)` }}
            ></div>
          </div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-gray-1000 text-[32px]/[32px] font-semibold tracking-tight lg:text-[56px]/[56px]`}>
            Hi, I'm Harsh
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop full stack applications,
            <br className='sm:block hidden' /> user interfaces and experiences
          </p>
        </div>
      </div>
      <div className="absolute inset-0 flex justify-end items-center">
        <div className="w-full h-full">
          <BadgeCard scrollOffset={scrollOffset} />

        </div>
      </div>
    </section>
  );
};

export default Hero;
