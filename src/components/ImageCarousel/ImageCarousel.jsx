import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import spineImage from "../../assets/carousel-spine.jpg";
import xrayFilmsImage from "../../assets/carousel-xray-films.jpg";
import xrayUnitImage from "../../assets/carousel-xray-unit.jpg";
import ctScanImage from "../../assets/carousel-ct-scan.jpg";
import cr from "../../assets/CR.jpg";

const ArrowLeftIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
    />
  </svg>
);

const ArrowRightIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>
);

const imageData = [
  {
    id: 1,
    src: spineImage,
    alt: "Sagittal view of a spine MRI",
    caption: "Spine Imaging",
  },
  {
    id: 2,
    src: xrayFilmsImage,
    alt: "Doctor holding X-ray films",
    caption: "X-ray Dry Films",
  },
  {
    id: 3,
    src: xrayUnitImage,
    alt: "X-ray unit machine in a room",
    caption: "X-ray Units",
  },
  {
    id: 4,
    src: ctScanImage,
    alt: "Series of CT scan images of lungs",
    caption: "MRI",
  },
  {
    id: 5,
    src: cr,
    alt: "Series of CT scan images of lungs",
    caption: "CR",
  },
];

const ImageCarousel = () => {
  const swiperRef = useRef(null);
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  const [swiperLoaded, setSwiperLoaded] = useState(false);

  const navButtonBaseClasses =
    "absolute top-1/2 -translate-y-1/2 z-10 bg-orange_bg p-3 rounded-full transition-colors text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-orange disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.swiper &&
      swiperNavPrevRef.current &&
      swiperNavNextRef.current
    ) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.params.navigation.prevEl = swiperNavPrevRef.current;
      swiperInstance.params.navigation.nextEl = swiperNavNextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
      setSwiperLoaded(true);
    }
  }, []);

  return (
    <section className="py-12 md:py-16 text-white relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8 md:mb-12">
          <span className="bg-orange_bg text-orange px-6 py-2 rounded-full text-sm font-semibold ">
            Images
          </span>
        </div>

        <div className="relative">
          <button
            ref={swiperNavPrevRef}
            aria-label="Previous slide"
            className={`${navButtonBaseClasses} left-0 sm:-left-4 md:-left-6`}
          >
            <ArrowLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 stroke-orange" />
          </button>

          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={"auto"}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            navigation={{
              prevEl: swiperNavPrevRef.current,
              nextEl: swiperNavNextRef.current,
            }}
            className="image-swiper !pb-12"
          >
            {imageData.map((image) => (
              <SwiperSlide
                key={image.id}
                className="!w-[80vw] sm:!w-[60vw] md:!w-[45vw] lg:!w-[30vw] xl:!w-[25vw] rounded-xl overflow-hidden group"
              >
                <div className="relative aspect-[4/3]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-60 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap shadow-lg">
                    {image.caption}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={swiperNavNextRef}
            aria-label="Next slide"
            className={`${navButtonBaseClasses} right-0 sm:-right-4 md:-right-6`}
          >
            <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 stroke-orange" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
