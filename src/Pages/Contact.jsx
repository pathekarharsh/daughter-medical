import Wrapper from "../utils/Wrapper";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="mt-[80px] md:mt-[120px]">
      <Wrapper className="py-8 md:py-16">
        <div className="text-center mb-12">
          <div className="w-fit bg-orange_bg px-6 py-1 rounded-full mx-auto">
            <p className="text-orange text-sm">Get in Touch</p>
          </div>
          <h1 className="mt-4 font-bold text-dark leading-tight text-4xl sm:text-5xl md:text-6xl">
            Contact Us
          </h1>
          <p className="text-gray text-lg mt-6 max-w-3xl mx-auto">
            Have questions about our products or services? Reach out to our team
            for expert advice and support.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          <div className="lg:w-1/2 bg-orange_bg rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange text-white p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-dark">Phone</h3>
                  <p className="text-gray">+91 902 214 0014</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange text-white p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-dark">Email</h3>
                  <p className="text-gray">info@daughtermedical.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange text-white p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-dark">Address</h3>
                  <p className="text-gray">
                    Indravati Apartment, M. B. Estate, Near Aakar Nagar
                    <br />
                    Katol Road, Nagpur - 440013
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-dark mb-4">
                Business Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray">Monday - Friday</span>
                  <span className="text-dark font-medium">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray">Saturday</span>
                  <span className="text-dark font-medium">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray">Sunday</span>
                  <span className="text-dark font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-stone-50 rounded-3xl border border-gray-200 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange outline-none transition"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange outline-none transition"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange outline-none transition"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Contact;
