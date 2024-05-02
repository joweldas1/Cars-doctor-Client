import React from "react";
import img1 from "../../../../public/assets/images/team/1.jpg"
import img2 from "../../../../public/assets/images/team/2.jpg"
import img3 from "../../../../public/assets/images/team/3.jpg"
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const Team = () => {
  return (
    <div className="my-10 md:my-20">
      <div className="text-center">
        <p className="text-2xl  font-bold textOrange">Team</p>
        <h1 className="text-5xl mt-2 font-bold">Meet Our Team</h1>
        <p className="py-6 mx-2 text-md  text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or <br className="hidden md:block " /> randomised words which don't look even slightly
          believable.
        </p>

        <div className="mt-5">
          <div className="md:flex md:gap-5 md:mx-5">
            <div className=" mt-5 card-compact p-2  bg-base-100 shadow-xl">
              <figure><img src={img1} alt=""/></figure>

              <div className="card-body">
             <h1 className="text-[#444] text-xl font-bold">Car Engine Plug</h1>
             <p className="text-[#737373] text-md">Engine Expert</p>
             <div className="text-2xl flex justify-center gap-5">
                <FaFacebook/>
                <BsInstagram/>
                <LiaLinkedin/>
                <BsTwitterX/>
             </div>
              </div>
            </div>
            <div className="card mt-5 card-compact p-2 bg-base-100 shadow-xl">
              <figure><img src={img2} alt=""/></figure>

              <div className="card-body">
             <h1 className="text-[#444] text-xl font-bold">Car Engine Plug</h1>
             <p className="text-[#737373] text-md">Engine Expert</p>
             <div className="text-2xl flex justify-center gap-5">
                <FaFacebook/>
                <BsInstagram/>
                <LiaLinkedin/>
                <BsTwitterX/>
             </div>
              </div>
            </div>
            <div className="card mt-5 card-compact p-2 bg-base-100 shadow-xl">
              <figure><img src={img3} alt=""/></figure>

              <div className="card-body">
             <h1 className="text-[#444] text-xl font-bold">Car Engine Plug</h1>
             <p className="text-[#737373] text-md">Engine Expert</p>
             <div className="text-2xl flex justify-center gap-5">
                <FaFacebook/>
                <BsInstagram/>
                <LiaLinkedin/>
                <BsTwitterX/>
             </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
