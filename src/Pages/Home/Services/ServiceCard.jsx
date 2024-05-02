import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
  const { title, img, price, description, facility, _id } = service;


  return (
    <div>
      <div className="card card-compact  m-2 md:m-5 bg-base-100 shadow-xl">
        <figure>
          <img className="p-2 lg:p-4 rounded-3xl w-full h-60"
            src={img}
            alt=""
          />
        </figure>
        <div className="mx-2 lg:mx-5">
          <h2 className="card-title text-3xl">{title}</h2>
          <div className="textOrange flex justify-between items-center my-3 text-xl font-bold">
            <p> Price : {price} </p>
            <Link to={`/checkout/${_id}`}><button ><FaLongArrowAltRight/></button></Link>
          </div>

      
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
