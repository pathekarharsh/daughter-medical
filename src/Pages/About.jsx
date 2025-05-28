import Wrapper from "../utils/Wrapper";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mt-[80px] md:mt-[120px]">
      <Wrapper className="py-8 md:py-16">
        <div className="text-center mb-12">
          <div className="w-fit bg-orange_bg px-6 py-1 rounded-full mx-auto">
            <p className="text-orange text-sm">About Us</p>
          </div>
          <h1 className="mt-4 font-bold text-dark leading-tight text-4xl sm:text-5xl md:text-6xl">
            Pioneering Medical Imaging Solutions
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
              alt="Medical equipment"
              className="rounded-3xl w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
              Our Story
            </h2>
            <p className="text-gray text-lg mb-6">
              Daughter Medical was founded in 2010 with a vision to
              revolutionize medical imaging technology. What began as a small
              startup has grown into a trusted name in diagnostic equipment,
              serving hospitals and clinics nationwide.
            </p>
            <p className="text-gray text-lg mb-8">
              Our team of engineers and medical professionals work tirelessly to
              develop innovative solutions that improve diagnostic accuracy
              while reducing patient exposure to radiation.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-orange_bg rounded-xl p-4 flex-1 min-w-[200px] border border-orange_bg hover:border-orange duration-200">
                <h3 className="text-orange font-bold text-xl mb-2">15+</h3>
                <p className="text-dark">Years Experience</p>
              </div>
              <div className="bg-orange_bg rounded-xl p-4 flex-1 min-w-[200px] border border-orange_bg hover:border-orange duration-200">
                <h3 className="text-orange font-bold text-xl mb-2">500+</h3>
                <p className="text-dark">Clients Served</p>
              </div>
              <div className="bg-orange_bg rounded-xl p-4 flex-1 min-w-[200px] border border-orange_bg hover:border-orange duration-200">
                <h3 className="text-orange font-bold text-xl mb-2">24/7</h3>
                <p className="text-dark">Support Available</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-orange_bg rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-gray text-lg text-center max-w-3xl mx-auto">
            To empower healthcare providers with cutting-edge imaging technology
            that delivers precise diagnostics, enhances workflow efficiency, and
            ultimately improves patient outcomes through innovation and
            reliability.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
