import React from "react";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

const Footer = () => {
  const quickLinks1 = [
    { name: "About", href: "/#/about" },
    { name: "Product", href: "/#/product" },
    { name: "Service", href: "/#/service" },
    { name: "Contact", href: "/#/contact" },
    { name: "Blog", href: "/#/blog" },
  ];

  const quickLinks2 = [...quickLinks1];

  const contactInfo = [
    {
      icon: PhoneIcon,
      lines: ["+91 902 214 0014", "+91 762 069 8897"],
      hrefs: ["tel:+919022140014", "tel:+917620698897"],
    },
    {
      icon: MapPinIcon,
      lines: [
        "Shop No. G/005,",
        "Indravati Apartment, M. B. Estate,",
        "Near Aakar Nagar, Katol Road, ",
        "Nagpur - 440013"
      ],

      hrefs: [
        "https://maps.app.goo.gl/FuBizxdgucQJ6o2o8, Indravati Apartment, Aakar Nagar, Katol Road, Nagpur - 440013",
      ],
    },
    {
      icon: EnvelopeIcon,
      lines: ["info.daughtermedical@gmail.com"],
      hrefs: ["mailto:info.daughtermedical@gmail.com"],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      {" "}
      {/* Dark background */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Quick Links Column 1 */}
          <div>
            <h3 className="text-lg font-semibold text-orange-500 mb-4">
              Quick links
            </h3>
            <ul className="space-y-2">
              {quickLinks1.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-orange-400 transition-colors duration-200 flex items-center text-sm"
                  >
                    {link.name}
                    <ChevronRightIcon className="w-3 h-3 ml-1 opacity-70" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-orange-500 mb-4">
              Quick links
            </h3>
            <ul className="space-y-2">
              {quickLinks2.map((link) => (
                <li key={`${link.name}-2`}>
                  <a
                    href={link.href}
                    className="hover:text-orange-400 transition-colors duration-200 flex items-center text-sm"
                  >
                    {link.name}
                    <ChevronRightIcon className="w-3 h-3 ml-1 opacity-70" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            {contactInfo
              .filter((info) => info.icon === PhoneIcon)
              .map((item, index) => (
                <div
                  key={`contact-phone-${index}`}
                  className="flex items-start mb-0"
                >
                  <item.icon className="w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    {item.lines.map((line, lineIndex) => (
                      <a
                        key={lineIndex}
                        href={item.hrefs[lineIndex]}
                        className="block text-sm hover:text-orange-400 transition-colors duration-200 leading-relaxed"
                      >
                        {line}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          <div className="lg:col-span-1">
            {" "}
            {contactInfo
              .filter((info) => info.icon !== PhoneIcon)
              .map((item, index) => (
                <div
                  key={`contact-other-${index}`}
                  className="flex items-start mb-5 last:mb-0"
                >
                  <item.icon className="w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    {item.lines.map((line, lineIndex) =>
                      item.hrefs && item.hrefs[lineIndex] ? (
                        <a
                          key={lineIndex}
                          href={item.hrefs[lineIndex]}
                          target={
                            item.icon === MapPinIcon ? "_blank" : undefined
                          }
                          rel={
                            item.icon === MapPinIcon
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="block text-sm hover:text-orange-400 transition-colors duration-200 leading-relaxed"
                        >
                          {line}
                        </a>
                      ) : (
                        <p
                          key={lineIndex}
                          className="block text-sm leading-relaxed"
                        >
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Daughter Medical. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
