// src/components/SpecialtySection/SpecialtySection.jsx
import React from "react";
import stethoscopeImage from "../assets/stethoscope.png"; // Replace with your actual image path

// Reusable Arrow Icon (or import from your icons folder)
const ArrowRightIcon = (
  { className = "w-4 h-4" } // Slightly smaller default for this button
) => (
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
  // Define colors (adjust these in your tailwind.config.js if they are brand colors)
  // For demonstration, I'll use generic Tailwind color names or describe them.
  // bg-peach: 'bg-orange-50' or 'bg-red-50' or a custom color like 'bg-peach-100'
  // feature-tag-bg: 'bg-orange-100' or 'bg-peach-200'
  // feature-tag-text: 'text-orange-600' or 'text-peach-700'
  // main-card-bg: 'bg-orange-600' (a strong orange)
  // button-bg: 'bg-white'
  // button-text: 'text-gray-700'

  return (
    <section className="py-10 bg-orange-50">
      {" "}
      {/* Light peach/beige background */}
      <div className="container mx-auto px-4">
        {/* Top "Feature" tag and "Our Specialty" Title */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block bg-orange_bg text-orange-600 px-5 py-2 rounded-full text-sm font-semibold   mb-4">
            Feature
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark">
            Our Specialty
          </h2>
        </div>

        {/* Main Content Card */}
        <div className="bg-orange-600 rounded-[40px] md:rounded-[60px] px-8 sm:px-10 md:px-12 lg:px-16 py-6 relative ">
          <div className="flex flex-col lg:flex-row items-center lg:gap-12">
            {/* Text Content */}
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
                href="#learn-more-specialty" // Replace with actual link
                className="inline-flex items-center bg-white text-gray-700 hover:bg-gray-100 px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition-colors duration-200 ease-in-out group"
              >
                learn more
                <ArrowRightIcon className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Image Content */}
            <div className="lg:w-2/5 relative flex justify-center lg:justify-end lg:-mt-44 ">
              {/* The image might need some negative margin or absolute positioning to "hang off" like in the design */}
              <img
                src={stethoscopeImage}
                alt="Stethoscope illustration"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none lg:w-[120%] lg:-mr-10 xl:-mr-20 object-contain drop-shadow-2xl"
                // Adjust lg:w-[120%] and lg:-mr-10 / xl:-mr-20 to make it larger and hang off the right edge
                // The drop-shadow-2xl adds a nice depth effect
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtySection;
