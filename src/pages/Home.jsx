import React from "react";
import heroImg01 from "../assets/images/Hero Image00.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
// import faqImg from "../assets/images/faq-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import FaqList from "../components/Faq/FaqList";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      {/* =============Hero Section============*/}

      <section className="hero__section pt-[1.8rem] 2xl:h-[800px]">
        <div className="container ">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* =============Hero Content LEFT============*/}
            <div>
              <div className="lg:w-[570px]">
                {/*Made Changes to this Settings to Adjust Content on the
                  HOMEPAGE Title Size etc*/}
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[2.2rem] md:leading-[3.2rem]">
                  We help you live with a Beautiful Smile
                </h1>
                <h3 className="text__para text-[18px] leading-[26px] text-headingColor font-[600] md:text-[1.4rem] md:leading-[2rem]">
                  Dr. M Younis Baloch
                  {/* <span className="text-[14px] leading-[20px] text-headingColor font-[400] md:text-[0.85rem] md:leading-[1rem]">
                      <span> : </span>Friendly, modern, and science-based
                      Dentist in Rawalpindi & Islamabad
                    </span> */}
                </h3>

                <p className="text__para">
                  “Do you have anxiety about going to the dentist? Have ever
                  felt rushed or like you’re a number and not a person at
                  another office? I guarantee that won’t happen here. We take
                  the time to partner with you, review all of your options, and
                  create a plan that meets your goals. At Family Dental Clinic,
                  we are trailblazers when it comes to clinical care and
                  utilizing technology, but traditional in the sense that we
                  maintain the personal touch of a private, dentist-owned
                  practice.”
                </p>

                <Link to="/appointments">
                  <button className="btn">Book Appointment</button>
                </Link>
              </div>

              {/* =============Hero Counter ============*/}

              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44] lg:leading-[54px] font-[700] text-headingColor">
                    17+
                  </h2>
                  <span className="w-[3.5rem] h-2 bg-yellowColor rounded-full block mt-[-1rem]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44] lg:leading-[54px] font-[700] text-headingColor">
                    5000+
                  </h2>
                  <span className="w-[7.3rem] h-2 bg-purpleColor rounded-full block mt-[-1rem]"></span>
                  <p className="text__para">Patients Treated</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[6.3rem] h-2 bg-irisBlueColor rounded-full block mt-[-1rem]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/* =============Hero Content RIGHT============*/}

            <div className="Hero__Right flex gap-[30px] justify-end">
              <div>
                <img
                  className="Hero__Image rounded-lg"
                  src={heroImg01}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============Hero Section End============*/}

      {/* =============== Services Section start ===============*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto mt-[1rem]">
            <h2 className="heading text-center">Our Dental Services</h2>
            <p className="text__para text-center">
              World-Class care for everyone. Our system offers Unmatched, Expert
              Dental-care.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>
      {/* =============== Services Section END ===============*/}

      <About />

      {/* =============== FAQ Section Start ===============*/}
      <section>
        <div className="container">
          {/* <div className="flex justify-between gap-[50px] lg:gap-0"> */}
          <div className="flex justify-center">
            {/* <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div> */}

            <div className="W-full md:w-1/1">
              <h2 className="heading">Frequently Asked Questions</h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* =============== FAQ Section END ===============*/}

      {/* =============== Connect with US Section Start ===============*/}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">Connect with us!</h2>
            <p className="text__par text-center">
              Want to know more about us?
              <br />
              Reach-out to us through following methods...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="card__hover py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Contact us
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Contact us through Phone Call or Email or Pay us a visit at
                  Family Dental Clinic.
                </p>
                <Link
                  to="/contact"
                  className="link__btn w-[50px] h-[50px] rounded-full border border-solid border-{#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="card__hover py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Our Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Gulzar-e-Quaid main entrance road, opposite to CNG station,
                  Rawalpindi.
                </p>
                <Link
                  to="/contact"
                  className="link__btn w-[50px] h-[50px] rounded-full border border-solid border-{#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="card__hover py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Book your Appointment Now to get the best Dental-care, From
                  lab to the Clinic.
                </p>
                <Link
                  to="/appointments"
                  className="link__btn w-[50px] h-[50px] rounded-full border border-solid border-{#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============== Connect with US Section END ===============*/}

      {/* =============== FAQ Section Start ===============*/}
      {/* <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>

            <div className="W-full md:w-1/2">
              <h2 className="heading">Frequently Asked Questions</h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section> */}
      {/* =============== FAQ Section END ===============*/}

      {/* =============== Testimonials Section Start ===============*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our Patients say!</h2>
            <p className="text__para text-center">
              5000+ Satisfied Patients. Meet a few of our happy patients to get
              their feedback.
            </p>
          </div>

          <Testimonials />
        </div>
      </section>
      {/* =============== Testimonials Section END ===============*/}
    </>
  );
};

export default Home;
