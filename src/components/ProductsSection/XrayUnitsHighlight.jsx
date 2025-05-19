import React from "react";
import Button from "./Button";

const XrayUnitsHighlight = ({
  titlePart1,
  titlePart2,
  description,
  imageUrl,
  imageAlt,
  knowMoreLink = "#",
}) => {
  return (
    <section className="bg-gray-100 rounded-2xl  flex flex-col md:flex-row items-center justify-between gap-4  mt-8 overflow-hidden md:pl-12 pb-12 md:pb-0 ">
      {" "}
      {/* e.g. bg-brand-light-gray-bg */}
      <div className="flex-1 md:max-w-md lg:max-w-lg order-2 md:order-1 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          {titlePart1} <span className="text-orange-600">{titlePart2}</span>{" "}
          {/* e.g. text-brand-orange */}
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6 px-4 md:px-0">
          {description}
        </p>
        <Button href={knowMoreLink} variant="secondary">
          know more
        </Button>
      </div>
      {imageUrl && (
        <div className="flex-shrink-0 md:flex-1 h-[70vw] md:h-auto w-full md:max-w-md lg:max-w-lg order-1 md:order-2 overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-auto  object-cover"
          />
        </div>
      )}
    </section>
  );
};

export default XrayUnitsHighlight;
