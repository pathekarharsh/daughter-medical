import Wrapper from "../utils/Wrapper";
import { Link } from "react-router-dom";
import computedRadiographyBg from "../assets/CR.jpg";
import medicalXrayFilm from "../assets/Xrayfilm.png";
import wirelessDrPanel from "../assets/Xraypanel.png";
import digitalRadiographyBg from "../assets/DR.png";

const Products = () => {
  const productsData = [
    {
      id: 1,
      layoutType: "default",
      title: "Computed",
      subtitle: "RADIOGRAPHY",
      tags: ["Affordable digital imaging", "Reusable plates"],
      bgImageUrl: computedRadiographyBg,
      knowMoreLink: "/products/computed-radiography",
      bgColorClass: "bg-gray-100",
    },
    {
      id: 2,
      layoutType: "imageLeft",
      title: "Medical X-Ray Dry Film",
      subtitle: "For CT, CR, DR SCAN",
      tags: [
        "High-quality dry imaging film",
        "CT, CR, DR scans compatible",
        "Works with thermal printers",
        "Fast processing",
        "Sharp image contrast",
      ],
      imageUrl: medicalXrayFilm,
      imageAlt: "Medical X-Ray Dry Film",
      knowMoreLink: "/products/dry-film",
      bgColorClass: "bg-beige-50",
    },
    {
      id: 3,
      layoutType: "imageLeft",
      title: "Wireless Digital X-ray",
      subtitle: "DR Panel",
      tags: [
        "Superior diagnostic clarity",
        "Instant image acquisition",
        "Optimized for low dose",
        "Seamless DICOM integration",
      ],
      imageUrl: wirelessDrPanel,
      imageAlt: "Wireless digital X-ray DR panel",
      knowMoreLink: "/products/dr-panel",
      bgColorClass: "bg-brown-50",
    },
    {
      id: 4,
      layoutType: "default",
      title: "Digital",
      subtitle: "RADIOGRAPHY",
      tags: [
        "High-resolution imaging",
        "Immediate results",
        "DICOM compatible",
      ],
      bgImageUrl: digitalRadiographyBg,
      knowMoreLink: "/products/digital-radiography",
      bgColorClass: "bg-gray-100",
    },
  ];

  return (
    <div className="mt-[80px] md:mt-[120px]">
      <Wrapper className="py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="w-fit bg-orange_bg px-6 py-1 rounded-full mx-auto mb-4">
            <p className="text-orange text-sm md:text-base font-medium">
              Our Products
            </p>
          </div>
          <h1 className="mt-2 font-bold text-dark leading-tight text-3xl sm:text-4xl md:text-5xl">
            Advanced Medical Imaging Solutions
          </h1>
          <p className="text-gray-600 text-base md:text-lg mt-4 max-w-3xl mx-auto">
            High-performance diagnostic equipment designed for precision,
            efficiency, and patient safety.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 md:gap-10">
          {productsData.map((product) => (
            <div
              key={product.id}
              className={`${product.bgColorClass} rounded-2xl md:rounded-3xl overflow-hidden border border-gray-200 transition-all duration-300`}
            >
              {product.layoutType === "default" ? (
                <div className="relative h-[320px] sm:h-[400px] md:h-[460px] bg-gray-200">
                  <img
                    src={product.bgImageUrl}
                    alt={`${product.title} ${product.subtitle}`}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gray-900/40 flex items-center justify-center p-6">
                    <div className="text-center text-white">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                        {product.title}
                      </h2>
                      {product.subtitle && (
                        <p className="text-xl sm:text-2xl md:text-3xl font-medium">
                          {product.subtitle}
                        </p>
                      )}
                      {product.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap justify-center gap-2">
                          {product.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="text-black bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1 text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image */}
                  <div className="md:w-1/2 h-[260px] md:h-[320px] flex justify-center items-center">
                    <img
                      src={product.imageUrl}
                      alt={product.imageAlt}
                      className="w-auto h-full object-fit object-center"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-dark mb-2">
                        {product.title}
                      </h2>
                      {product.subtitle && (
                        <p className="text-xl md:text-2xl font-medium text-gray-700 mb-4">
                          {product.subtitle}
                        </p>
                      )}
                      {product.tags.length > 0 && (
                        <ul className="mb-6 space-y-2">
                          {product.tags.map((tag, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-orange mr-2 mt-1">•</span>
                              <span className="text-gray-600">{tag}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <Link
                      to={product.knowMoreLink}
                      className="mt-4 md:mt-auto w-fit bg-orange text-white rounded-full px-6 py-2 text-sm md:text-base border-2 border-orange hover:bg-white hover:text-orange transition-colors duration-200"
                    >
                      Know More
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-orange rounded-2xl md:rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-orange-100 text-base md:text-lg mb-6 max-w-2xl mx-auto">
            Our specialists are ready to help you select the perfect imaging
            solution for your facility.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-orange px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors duration-300 text-sm md:text-base"
          >
            Contact Our Experts
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Products;
