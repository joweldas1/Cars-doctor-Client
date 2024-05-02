import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices]=useState([])
    const [show,setShow]=useState(false)
    

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    


  return (
    <div className="md:my-20">
      <div className="text-center">
        <p className="text-2xl  font-bold textOrange">Services</p>
        <h1 className="text-5xl mt-2 font-bold">Our Service Area</h1>
        <p className="py-6 text-md  text-[#737373]">The majority have suffered alteration in some form, by injected humour, or randomised words <br /> which don't look even slightly believable.  </p>
      </div>

     <div className="grid grid-cols-1 md:grid-cols-3 bg-base-200">
     {!show ?
     services.slice(0,3).map((service)=>( <ServiceCard key={service._id} service={service}></ServiceCard>  ))
     :
     services.map((service)=>( <ServiceCard key={service._id} service={service}></ServiceCard>  ))

 } 
     {
      }
      
     </div>
    <div className="text-center">
    <button onClick={()=>setShow(!show)} className="bgOrange btn text-white  ">{!show?"Show more services":"Hide"}</button>
    </div>




    </div>
  );
};

export default Services;
