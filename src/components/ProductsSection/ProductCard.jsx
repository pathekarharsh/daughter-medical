import React from "react";
import Button from "./Button";

const ProductCard = ({
  title,
  subtitle,
  tags,
  imageUrl,
  imageAlt,
  knowMoreLink = "#",
  layoutType = "default",
  backgroundColorToken,
  bgImageUrl,
}) => {
  const cardBaseStyles =
    "rounded-2xl overflow-hidden shadow-lg flex flex-col min-h-[380px] md:min-h-[420px]";

  const bgClasses = {
    lightGray: "bg-gray-100 text-gray-800",
    beige: "bg-[#FFE5B4] text-[#5E4D2D]",
    brown: "bg-[#8C4E27] text-[#FFC5A1]",
  };

  const tagBgClasses = {
    lightGray: "bg-white text-black",
    beige: "bg-[#F7CC79] text-yellow-800",
    brown: "bg-[#BA774E] text-white",
  };

  const cardDynamicStyles =
    bgClasses[backgroundColorToken] || "bg-white text-gray-800";

  const cardStyle =
    layoutType === "default" && bgImageUrl
      ? { backgroundImage: `url(${bgImageUrl})` }
      : {};

  return (
    <article
      className={`${cardBaseStyles} ${cardDynamicStyles} ${
        layoutType === "imageLeft" ? "md:flex-row" : "bg-cover bg-center"
      }`}
      style={cardStyle}
    >
      {layoutType === "imageLeft" && imageUrl && (
        <div
          className={`flex-shrink-0 md:w-2/5 flex items-center justify-center p-4 ${
            backgroundColorToken === "beige" ? "bg-[#F7CC79]" : ""
          } ${backgroundColorToken === "brown" ? "" : ""}`}
        >
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full max-h-96 object-contain rounded-md"
          />
        </div>
      )}

      <div
        className={`flex flex-col p-6 ${
          layoutType === "default"
            ? "justify-between h-full  bg-opacity-40"
            : "flex-grow md:w-3/5 justify-center"
        }`}
      >
        <div>
          <div className="mb-4">
            {title && (
              <h3
                className={`font-bold leading-6
                ${
                  layoutType === "default"
                    ? "text-white text-3xl sm:text-4xl uppercase"
                    : ""
                }
                ${
                  layoutType === "imageLeft" &&
                  (backgroundColorToken === "beige" ||
                    backgroundColorToken === "brown")
                    ? "text-2xl"
                    : ""
                }
                ${
                  layoutType === "imageLeft" &&
                  backgroundColorToken === "lightGray"
                    ? "text-gray-800 text-3xl sm:text-4xl uppercase"
                    : ""
                }
              `}
              >
                {title}
              </h3>
            )}
            {subtitle && (
              <h4
                className={`mt-1 text-lg
                ${layoutType === "default" ? "text-gray-200" : ""}
                ${
                  layoutType === "imageLeft" && backgroundColorToken === "beige"
                    ? "text-gray-700"
                    : ""
                }
                ${
                  layoutType === "imageLeft" && backgroundColorToken === "brown"
                    ? "text-yellow-100"
                    : ""
                }
                ${
                  layoutType === "imageLeft" &&
                  backgroundColorToken === "lightGray"
                    ? "text-gray-600"
                    : ""
                }
              `}
              >
                {subtitle}
              </h4>
            )}
          </div>

          {tags && tags.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full ${
                    tagBgClasses[backgroundColorToken] ||
                    "bg-gray-200 text-gray-700"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <Button href={knowMoreLink} className="mt-auto self-start">
          know more
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
