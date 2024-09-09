import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

// const servicesLinks = [
//   {
//     path: "/urgent-care",
//     display: "Urgent Care",
//   },
//   {
//     path: "/dental-implants",
//     display: "Dental Implants",
//   },
//   {
//     path: "/regular-check-ups",
//     display: "Regular Check Ups",
//   },
//   {
//     path: "/teeth-whitening",
//     display: "Teeth Whitening",
//   },
//   {
//     path: "/crowns",
//     display: "Crowns",
//   },
//   {
//     path: "/cosmetic-dentistry",
//     display: "Cosmetic Dentistry",
//   },
// ];

const ServiceCard = ({ item, index }) => {
  const { name, path, desc, bgColor, textColor } = item;

  return (
    <div className="service__card py-[30px] px-3 lg:px-5 ">
      <div className="flex items-center justify-around">
        <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
          {name}
        </h2>

        <span
          className="colored__numbers w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1}
        </span>
      </div>

      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
        {desc}
      </p>

      <div className="flex items-center justify-between mt-[30px]">
        <Link
          to={item.path}
          className="link__btn w-[50px] h-[50px] rounded-full border border-solid border-{#181A1E] mt-[0.5rem] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
