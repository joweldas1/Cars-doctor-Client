import img1 from "../../../../public/assets/icons/check.svg";
import img2 from "../../../../public/assets/icons/deliveryt.svg";
import img3 from "../../../../public/assets/icons/Group38729.svg";
import img4 from "../../../../public/assets/icons/group.svg";
import img5 from "../../../../public/assets/icons/quote.svg"
import img6 from "../../../../public/assets/icons/Wrench.svg"


const ChooseUs = () => {
  return (
    <div className="my-10">
      <div className="text-center">
        <p className="text-2xl  font-bold textOrange">Core Features</p>
        <h1 className="text-5xl mt-2 font-bold">Why Choose Us</h1>
        <p className="py-6 mx-2 text-md  text-[#737373]">The majority have suffered alteration in some form, by injected humour, or randomised words which don't <br className="hidden md:block " /> ChooseUs; look even slightly believable. 
        </p>
      </div>


      <div className="grid font-bold grid-cols-2  lg:grid-cols-6 mx-auto">
        <div className="text-black hover:text-white bg-red-100   text-center p-8 customShadow2 mx-auto hover:bg-[#FF3811] transition delay-50 transform hover:scale-110 ease-in-out rounded-xl">
            <img src={img1} alt="" className="mx-auto"/>
            <p>Expert Team</p>
        </div>

        <div className="text-black hover:text-white bg-red-100  text-center p-8 customShadow2 mx-auto hover:bg-[#FF3811] transition delay-50 transform hover:scale-110 ease-in-out rounded-xl">
            <img src={img1} alt="" className="mx-auto"/>
            <p>Expert Team</p>
        </div>

        <div className="text-black hover:text-white bg-red-100 text-center p-8 customShadow2 mx-auto hover:bg-[#FF3811] transition delay-50 transform hover:scale-110 ease-in-out rounded-xl">
            <img src={img2} alt="" className="mx-auto"/>
            <p>Timely Delivery</p>
        </div>

        <div className="text-black hover:text-white bg-red-100 text-center p-8 customShadow2 mx-auto hover:bg-[#FF3811] transition delay-50 transform hover:scale-110 ease-in-out rounded-xl">
            <img src={img1} alt="" className="mx-auto"/>
            <p>24/7 Support</p>
        </div>

        <div className="text-black hover:text-white bg-red-100  text-center p-8 customShadow2 mx-auto hover:bg-[#FF3811] transition delay-50 transform hover:scale-110 ease-in-out rounded-xl">
            <img src={img2} alt="" className="mx-auto"/>
            <p>Best Equipment</p>
        </div>

        <div className="text-black hover:text-white bg-red-100 text-center p-8 customShadow2 mx-auto hover:bg-[#FF3811] transition delay-50 transform hover:scale-110 ease-in-out rounded-xl">
            <img src={img1} alt="" className="mx-auto"/>
            <p>100% Guranty</p>
        </div>

       
       
      </div>
      


    </div>
  );
};

export default ChooseUs