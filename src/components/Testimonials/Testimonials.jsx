import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";

const Testimonials = () => {
  return (
    <>
      <div className="mt-[30px] lg:mt-[25px] ">
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              SpaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              SpaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              SpaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <div className="py-[30px] px-5">
              <div className="swiper__border">
                <div className="flex items-center gap-[13px]">
                  <img src={patientAvatar} alt="" />
                  <div className="">
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                      Anas Afroz
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-[14px] leading-7 mt-4 text-textColor font-[400]">
                  I'm in my Sixties and I got my new dentures done from Family
                  Dental Clinic and I feel like I have new teeth now, just like
                  in my Thirties, I can eat anything and I got my smile back.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="py-[30px] px-5">
              <div className="swiper__border">
                <div className="flex items-center gap-[13px]">
                  <img src={patientAvatar} alt="" />
                  <div className="">
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                      Yasir Nouman
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-[14px] leading-7 mt-4 text-textColor font-[400]">
                  I'm in my Sixties and I got my new dentures done from Family
                  Dental Clinic and I feel like I have new teeth now, just like
                  in my Thirties, I can eat anything and I got my smile back.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="py-[30px] px-5">
              <div className="swiper__border">
                <div className="flex items-center gap-[13px]">
                  <img src={patientAvatar} alt="" />
                  <div className="">
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                      Tanzeel Rehman
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-[14px] leading-7 mt-4 text-textColor font-[400]">
                  I'm in my Sixties and I got my new dentures done from Family
                  Dental Clinic and I feel like I have new teeth now, just like
                  in my Thirties, I can eat anything and I got my smile back.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="py-[30px] px-5">
              <div className="swiper__border">
                <div className="flex items-center gap-[13px]">
                  <img src={patientAvatar} alt="" />
                  <div className="">
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                      Hina Aftab
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-[14px] leading-7 mt-4 text-textColor font-[400]">
                  I'm in my Sixties and I got my new dentures done from Family
                  Dental Clinic and I feel like I have new teeth now, just like
                  in my Thirties, I can eat anything and I got my smile back.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="py-[30px] px-5">
              <div className="swiper__border">
                <div className="flex items-center gap-[13px]">
                  <img src={patientAvatar} alt="" />
                  <div className="">
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                      Miss Kubra Saleem
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-[14px] leading-7 mt-4 text-textColor font-[400]">
                  I'm in my Sixties and I got my new dentures done from Family
                  Dental Clinic and I feel like I have new teeth now, just like
                  in my Thirties, I can eat anything and I got my smile back.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="py-[30px] px-5">
              <div className="swiper__border">
                <div className="flex items-center gap-[13px]">
                  <img src={patientAvatar} alt="" />
                  <div className="">
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                      Iftikhar Parvez
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-[14px] leading-7 mt-4 text-textColor font-[400]">
                  I'm in my Sixties and I got my new dentures done from Family
                  Dental Clinic and I feel like I have new teeth now, just like
                  in my Thirties, I can eat anything and I got my smile back.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
