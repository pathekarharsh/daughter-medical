import Hero from "../assets/hero.svg?react";
import HeroFull from "../assets/heroFull.svg?react";
import Arrow from "../assets/arrow.svg?react";
import Wrapper from "../utils/Wrapper";
import { Link } from "react-router-dom";
const HeroSection = (props) => {
  return (
    <div className="flex relative flex-col-reverse items-center lg:flex-row  lg:justify-between overflow-hidden mt-[56px] md:mt-[80px] lg:mt-0">
      <div />
      <div className="lg:hidden -mt-[6vw]">
        <div className="w-fit bg-orange_bg px-[4vw] py-1 rounded-full mx-auto ">
          <p className="text-orange text-xs">Medical</p>
        </div>
        <h1 className="mt-1 font-bold text-dark leading-7 sm:leading-10 text-4xl sm:text-5xl lg:text-xl w-fit text-center mx-auto">
          <span className="block">Smart Imaging</span>
          <span className="block">Seamless Diagnostics</span>
        </h1>
        <p className="w-[80vw] md:w-[60vw] text-[3vw] md:text-[1.8vw] text-gray text-center mt-2 mx-auto">
          Discover high-performance X-ray equipment and accessories—from
          wireless digital DR panels and CR systems to PET films and complete
          X-ray machines. Reliable, modern, and ready for clinical excellence.
        </p>
        <Link
          to="/contact"
          className="mx-auto w-fit bg-orange text-white flex  px-[4vw] py-[2vw] md:px-[3vw] md:py-[1vw] items-center text-[3vw] md:text-[2vw] rounded-xl cursor-pointer mt-8  border border-orange hover:text-orange hover:bg-white duration-300"
        >
          <p>Know more</p>
          <Arrow className="hover:stroke-orange w-[5vw] h-[5vw] md:w-[4vw] md:h-[4vw]" />
        </Link>
      </div>
      <Hero className="hidden lg:block md:w-[60vw] md:h-[60vw] lg:w-[100vw] lg:h-[100vw] xl:w-[85vw] xl:h-[85vw]" />
      <HeroFull className="lg:hidden w-[132vw] h-fit -mt-[4vw]" />
      <Wrapper className="absolute top-44  left-0 right-0 lg:block hidden">
        <div className="w-fit bg-orange_bg px-[2vmax] py-1 rounded-full">
          <p className="text-orange text-[.8vmax]">Medical</p>
        </div>
        <h1 className="mt-1 leading-[4vw] tracking-tight text-[4vw] font-bold text-dark w-fit">
          <span className="block">Smart Imaging</span>
          <span className="block">Seamless Diagnostics</span>
        </h1>
        <p className="w-[32vw] text-[1vmax] text-gray">
          Discover high-performance X-ray equipment and accessories—from
          wireless digital DR panels and CR systems to PET films and complete
          X-ray machines. Reliable, modern, and ready for clinical excellence.
        </p>

        <Link
          to="/contact"
          className="bg-orange w-fit text-white flex gap-2 px-[1.5vw] py-[0.8vw] items-center text-[1vw] rounded-xl cursor-pointer mt-8  border border-orange hover:text-orange hover:bg-white duration-300"
        >
          <p>Know more</p>
          <Arrow className="hover:stroke-orange w-[1.8vw] h-[1.8vw]" />
        </Link>
      </Wrapper>
    </div>
  );
};
export default HeroSection;
