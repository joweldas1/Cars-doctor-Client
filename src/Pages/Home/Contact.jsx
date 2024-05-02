import React from 'react';
import { IoIosAlarm } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMap } from "react-icons/gr";




const Contact = () => {
    return (
        <div>
            <div className='bg-[#151515] w-full customShadow rounded-xl'>
                <div className='flex justify-around py-20 px-10'>
                <div className='flex items-center gap-2'>
                    <div className='textOrange text-5xl'><IoIosAlarm /></div>
                    <div className='text-white'>
                        <p className='text-md font-regular'>We are open monday-friday</p>
                        <h2 className='font-bold text-2xl'>7:00 am - 9:00 pm</h2>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='textOrange text-4xl'><BsFillTelephoneFill/></div>
                    <div className='text-white'>
                        <p className='text-md font-regular'>Have a question?</p>
                        <h2 className='font-bold text-2xl'>+2546 251 2658</h2>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='textOrange text-4xl'><GrMap/></div>
                    <div className='text-white'>
                        <p className='text-md font-regular'>Need a repair? our address</p>
                        <h2 className='font-bold text-2xl'>Liza Street, New York</h2>
                    </div>
                </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;