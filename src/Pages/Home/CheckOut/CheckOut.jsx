import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import UseAuth from "../../Provider/UseAuth";

const CheckOut = () => {
  const data = useLoaderData();
  const {_id,img}=data
  const { user } = UseAuth();
  console.log(data);

const handleOnSubmit=(e)=>{
    e.preventDefault()
    
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const date=form.date.value;
    const price=form.price.value;

    const booking={
        customerName : name ,
        email: email,
        date,
        img,
        serviceTitle:title,
        service:_id,
        price:price

    }

    fetch('http://localhost:5000/booking',{
            method:"POST",
            headers:{"content-type":"application/JSON"},
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert("submit done")
            }
        })




}



  const { title, price } = data;
  return (
    <div className="w-full mx-auto">
      <h1>Book Service :{title} </h1>

      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto  bg-blue-300">
      <form className="card-body " onSubmit={handleOnSubmit}>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name"defaultValue={user?.displayName} name="name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date"  placeholder="date" name="date" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input type="text" placeholder="Service name" name="service" defaultValue={title} className="input input-bordered" required />
        </div>

        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" placeholder="Price" name="price" defaultValue={`$`+ price} className="input input-bordered" required />
        </div>




        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
      </div>



     
    </div>
  );
};

export default CheckOut;
