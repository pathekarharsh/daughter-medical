import Wrapper from "../utils/Wrapper";
import { Link } from "react-router-dom";


const Service = () => {
  const services = [
    {
      title: "Digital Radiography (DR)",
      description: "High-resolution wireless DR panels with DICOM compatibility for instant image capture and transfer.",
      icon: "🖥️"
    },
    {
      title: "Computed Radiography (CR)",
      description: "Advanced CR systems with high-sensitivity imaging plates and efficient workflow solutions.",
      icon: "📷"
    },
    {
      title: "X-ray Machines",
      description: "Complete X-ray systems with cutting-edge technology for various clinical applications.",
      icon: "⚡"
    },
    {
      title: "DICOM Printers",
      description: "High-quality medical grade printers for precise hard copy outputs of diagnostic images.",
      icon: "🖨️"
    },
    {
      title: "Service & Maintenance",
      description: "Comprehensive support including installation, calibration, and preventive maintenance.",
      icon: "🔧"
    },
    {
      title: "Training & Support",
      description: "Onsite and remote training programs to ensure optimal use of your equipment.",
      icon: "🎓"
    }
  ];

  return (
    <div className="mt-[80px] md:mt-[120px]">
      <Wrapper className="py-8 md:py-16">
        <div className="text-center mb-12">
          <div className="w-fit bg-orange_bg px-6 py-1 rounded-full mx-auto">
            <p className="text-orange text-sm">Our Services</p>
          </div>
          <h1 className="mt-4 font-bold text-dark leading-tight text-4xl sm:text-5xl md:text-6xl">
            Comprehensive Imaging Solutions
          </h1>
          <p className="text-gray text-lg mt-6 max-w-3xl mx-auto">
            We offer a complete range of medical imaging products and services designed to meet the needs of modern diagnostic facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
              <p className="text-gray">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-orange rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Upgrade Your Imaging Equipment?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-3xl mx-auto">
            Contact our specialists today to discuss your needs and find the perfect solution for your facility.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-orange px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Service;