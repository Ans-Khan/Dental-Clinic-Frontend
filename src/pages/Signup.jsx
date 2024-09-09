import React, { useState } from "react";
import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/doctor-img01.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const [selectedFile, useSelectedFile] = useState(null);
  const [previewURL, usePreviewURL] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
  };

  const submitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[870px] mx-auto">
        <div className=" grid grid-cols-1 lg:grid-cols-2">
          {/* ============== Image Box ============== */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          {/* ============== Sign Up Form ============== */}

          <div className="mobile__position rounded-l-lg lg:pl-16 py-0">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">Account!</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mobile__input mobile__input_signup mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input_color w-full pl-4 py-3 border border-solid border-[#00066ff61] focus:outline-none 
                  focus:border-[#5f5f5f] text-[16px] leading-6 text-headingColor
                  placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>

              <div className="mobile__input mobile__input_signup mb-5">
                <input
                  type="email"
                  placeholder="Enter Your Email..."
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input_color w-full pl-4 py-3 border border-solid border-[#00066ff61] focus:outline-none 
                  focus:border-[#5f5f5f] text-[16px] leading-6 text-headingColor
                  placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>

              <div className="mobile__input mobile__input_signup mb-5">
                <input
                  type="password"
                  placeholder="Create Your Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="input_color w-full pl-4 py-3 border border-solid border-[#00066ff61] focus:outline-none 
                  focus:border-[#5f5f5f] text-[16px] leading-6 text-headingColor
                  placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>

              <div className="mobile__label mb-5 flex items-center justify-between">
                <label className="text-headingColor font-bold text-[0.9rem] leading-7">
                  Are you a:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="text-textColor rounded font-semibold text-[0.9rem] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label className="text-headingColor font-bold text-[0.9rem] leading-7">
                  Gender:
                  <select
                    name="role"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-textColor rounded font-semibold text-[0.9rem] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className="mobile__label mb-5 flex items-center gap-3">
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                  <img src={avatar} alt="" className="w-full rounded-full" />
                </figure>

                <div className="relative w-[8rem] h-[3rem]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff64] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mobile__btn mt-7">
                <button
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[1.125rem] leading-[1.5rem] rounded-lg px-4 py-3"
                >
                  Sign Up
                </button>
              </div>

              <p className="mt-5 text-textColor text-center">
                Already have an account?
                <Link
                  to="/login"
                  className="text-primaryColor font-medium ml-1"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
