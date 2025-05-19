import React from "react";
import ProductCard from "./ProductCard";
import XrayUnitsHighlight from "./XrayUnitsHighlight";

import computedRadiographyBg from "../../assets/CR.png";
import medicalXrayFilm from "../../assets/Xrayfilm.png";
import wirelessDrPanel from "../../assets/Xraypanel.png";
import digitalRadiographyBg from "../../assets/DR.png";
import xrayUnitsMachine from "../../assets/xray.png";

const ProductsSection = () => {
  const productsData = [
    {
      id: 1,
      layoutType: "default",
      title: "Computed",
      subtitle: "RADIOGRAPHY",
      tags: ["Affordable digital imaging", "reusable plates"],
      bgImageUrl: computedRadiographyBg,
      knowMoreLink: "#computed-radiography",
      backgroundColorToken: "lightGray",
    },
    {
      id: 2,
      layoutType: "imageLeft",
      title: "Medical X-Ray Dry Film For CT,CR,DR SCAN",
      tags: [
        "High-quality dry imaging film",
        "CT, CR, DR scans",
        "Compatible with thermal printers",
        "fast processing",
        "sharp image contrast",
      ],
      imageUrl: medicalXrayFilm,
      imageAlt: "Medical X-Ray Dry Film",
      knowMoreLink: "#dry-film",
      backgroundColorToken: "beige",
    },
    {
      id: 3,
      layoutType: "imageLeft",
      title: "Wireless digital X-ray DR panel",
      tags: [
        "Superior Diagnostic Clarity",
        "Instant Image Acquisition",
        "Optimized for Low Dose",
        "Seamless Digital Integration",
      ],
      imageUrl: wirelessDrPanel,
      imageAlt: "Wireless digital X-ray DR panel",
      knowMoreLink: "#dr-panel",
      backgroundColorToken: "brown",
    },
    {
      id: 4,
      layoutType: "default",
      title: "Digital",
      subtitle: "RADIOGRAPHY",
      tags: [],
      bgImageUrl: digitalRadiographyBg,
      knowMoreLink: "#digital-radiography",
      backgroundColorToken: "lightGray",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 lg:-mt-[30vw]">
      <div className="container mx-auto px-4">
        <header className="text-center mb-10 md:mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-dark">
            Products
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray max-w-3xl mx-auto">
            Your One-Stop Destination for Premium Imaging Technology – Featuring
            DR Panels, CR Systems, DICOM-Compatible Printers, and
            High-Performance X-ray Machines to Support Diagnostic Centers,
            Hospitals, and Imaging Labs
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              subtitle={product.subtitle}
              tags={product.tags}
              imageUrl={product.imageUrl}
              imageAlt={product.imageAlt}
              knowMoreLink={product.knowMoreLink}
              layoutType={product.layoutType}
              backgroundColorToken={product.backgroundColorToken}
              bgImageUrl={product.bgImageUrl}
            />
          ))}
        </div>

        <XrayUnitsHighlight
          titlePart1="XRAY"
          titlePart2="Units"
          description="Reliable and high-performance X-ray machines designed for general radiography. Suitable for clinics, hospitals, and diagnostic centers needing consistent image quality and durable operation."
          imageUrl={xrayUnitsMachine}
          imageAlt="XRAY Units Machine"
          knowMoreLink="#xray-units"
        />
      </div>
    </section>
  );
};

export default ProductsSection;
