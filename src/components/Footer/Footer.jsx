import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
// import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.youtube.com",
    icon: <AiFillFacebook className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.youtube.com",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.youtube.com",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
];

const quickLinks02 = [
  {
    path: "/appointments",
    display: "Book Appointment",
  },
  {
    path: "/contact",
    display: "Find us on Maps",
  },
  {
    path: "/contact",
    display: "Contact us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer__color pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between px-[6rem] flex-col md:flex-row lg:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="footer-logo" />
            <p className="text-[14px] leading-5 font-[400] text-textColor mt-2">
              Developed by{" "}
              <a
                className="text-primaryColor font-[600]"
                href="https://www.linkedin.com/in/ans-afroz-438483115/"
              >
                Anas Afroz
              </a>{" "}
              <br /> Copyright © {year} all rights reserved.
            </p>

            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="border__Radius w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-2 text-headingColor">
              Quick Links
            </h2>

            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-1">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-2 text-headingColor">
              I want to:
            </h2>

            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-1">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
