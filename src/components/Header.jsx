import Brand from "../assets/brand.svg?react";
import Wrapper from "../utils/Wrapper";
import Menu from "../assets/menu.svg?react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const links_class =
    "text-dark font-medium text-md md:text-lg hover:font-bold duration-300  ";

  const menuHandler = (e) => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="absolute top-0 left-0 right-0 z-50">
      <Wrapper className="flex py-2 md:py-4 bg-white md:bg-transparent md:gap-18 justify-between md:justify-start relative z-10">
        <Link to="/" className="flex gap-2 items-center ">
          <Brand className="w-8 h-8 md:w-14 md:h-14" />
          <h1 className="text-primary text-lg md:text-2xl font-semibold leading-4 md:leading-6 tracking-tight">
            <span className="block">Daughter </span>{" "}
            <span className="block">Medical</span>
          </h1>
        </Link>
        <Menu className="block md:hidden w-12 h-12" onClick={menuHandler} />
        <div className="hidden gap-10 items-center md:flex ">
          <Link to="/about" className={links_class}>
            About
          </Link>
          <Link to="/product" className={links_class}>
            Product
          </Link>
          <Link to="/service" className={links_class}>
            Service
          </Link>
          <Link to="/blog" className={links_class}>
            Blog
          </Link>
          <Link
            to="/contact"
            className="bg-orange text-white rounded-full px-8 py-2 border border-orange hover:bg-white hover:text-orange duration-200"
          >
            Contact
          </Link>
        </div>
      </Wrapper>
      {isOpen && (
        <div className="flex flex-col gap-4 items-center md:hidden bg-gray-100 py-4">
          <Link to="/about" className={links_class}>
            About
          </Link>
          <Link to="/product" className={links_class}>
            Product
          </Link>
          <Link to="/service" className={links_class}>
            Service
          </Link>
          <Link to="/blog" className={links_class}>
            Blog
          </Link>
          <Link
            to="/contact"
            className="bg-orange text-md text-white rounded-full px-6 py-1 border border-orange hover:bg-white hover:text-orange duration-200"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};
export default Header;
