import React from 'react';
import img1 from '../../../../public/assets/images/about_us/person.jpg'
import img2 from '../../../../public/assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen  bg-base-200">
        <div className="hero-content mb-10 flex-col md:gap-24 lg:flex-row">
          <div className='relative lg:w-1/2'>
          <img src={img1} className="w-5/5 rounded-lg shadow-2xl" />
          <img src={img2} className="w-3/5 rounded-lg shadow-2xl -right-14  border-8 border-base-200 absolute top-[50%] " />
          </div>
          <div className='lg:w-1/2 md:mx-10 mt-5'>
            <p className='text-2xl  font-bold text-[#FF3811]'>About </p>
            <h1 className="text-5xl mt-2 font-bold">We are qualified & of experience in this field</h1>
            <p className="py-6 text-md text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

            <p className='text-md text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

            <button className="btn btnPrimary btn-primary my-4">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default About;