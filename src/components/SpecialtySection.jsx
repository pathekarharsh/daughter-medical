import stethoscopeImage from "../assets/stethoscope.png";

const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const SpecialtySection = () => {
  return (
    <section className="py-10 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block bg-orange_bg text-orange-600 px-5 py-2 rounded-full text-sm font-semibold   mb-4">
            Feature
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark">
            Our Specialty
          </h2>
        </div>

        <div className="bg-orange-600 rounded-[40px] md:rounded-[60px] px-8 sm:px-10 md:px-12 lg:px-16 py-6 relative ">
          <div className="flex flex-col lg:flex-row items-center lg:gap-12">
            <div className="lg:w-3/5 text-white mb-10 lg:mb-0 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                Advanced Wireless Imaging Solutions for Modern Diagnostics
              </h3>
              <p className="text-base sm:text-lg text-orange-100 leading-relaxed mb-8">
                The specialty of our business is providing cutting-edge,
                wireless DR panels and CR systems that seamlessly integrate with
                DICOM technology, enabling faster, more accurate diagnostics and
                offering healthcare professionals high-performance, reliable
                imaging solutions for clinical excellence.
              </p>
              <a
                href="#learn-more-specialty"
                className="inline-flex items-center bg-white text-gray-700 hover:bg-gray-100 px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition-colors duration-200 ease-in-out group"
              >
                learn more
                <ArrowRightIcon className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

            <div className="lg:w-2/5 relative flex justify-center lg:justify-end lg:-mt-44 ">
              <img
                src={stethoscopeImage}
                alt="Stethoscope illustration"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none lg:w-[120%] lg:-mr-10 xl:-mr-20 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtySection;
