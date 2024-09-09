import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* =============== About Image ===============*/}
          <div className=" relative w-3/4 lg:w-1/3 xl:w[770px] z-10 order-2 lg:order-1">
            <img className="About__Image" src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 2-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[-40%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>

          {/* =============== About Content ===============*/}
          <div className="w-full lg:w-1/2 xl:w-[580px] order-1 lg:order-2">
            <h2 className="heading">
              A Legacy of Excellence: Over 17 Years in Dentistry
            </h2>
            <p className="text__para">
              With over 17 years of dedicated experience in the field of
              dentistry, I have had the privilege of transforming the smiles and
              lives of more than 5,000 patients. My journey has been driven by a
              passion for providing exceptional dental care, grounded in the
              latest advancements in dental technology and patient-centered
              treatment approaches.
            </p>
            <p className="text__para mt-[0.88rem]">
              Each patient’s unique needs and concerns have guided my practice,
              allowing me to develop personalized care plans that ensure optimal
              oral health and aesthetic results. I am proud to be recognized as
              one of the nation's best doctors, committed to delivering
              excellence in every aspect of dental care.
            </p>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
