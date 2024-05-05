import React, { useEffect, useState } from "react";
import UseAuth from "../Provider/UseAuth";
import BookingRow from "./BookingRow";
import axios from "axios";

const Booking = () => {
  const [bookingData, setBooking] = useState([]);
  const { user } = UseAuth();
  const urlCom=user?.email
  const url = `https://cars-doctor-server-eta.vercel.app/booking?email=${urlCom}`;
  useEffect(() => {
    axios.get(url,{withCredentials:true})
    .then(res=>{
      console.log(res);
      setBooking(res.data)
    })

  }, []);

  
  const handleDelete = (id) => {
    const isDelete = confirm("Are you sure want to delete?");
    if (isDelete) {
      fetch(`https://cars-doctor-server-eta.vercel.app/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingData = bookingData.filter((d) => d._id !== id);
            setBooking(remainingData);
            alert("deleted successful");
          }
          console.log(data);
        });
    }
  };


  const handleUpdate=id=>{
    const isUpdate=confirm("Are are sure?")
    if(isUpdate){
        fetch(`https://cars-doctor-server-eta.vercel.app/booking/${id}`,{
            method:"PATCH",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({status:"confirm"})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                alert('data updated')

                const remaining=bookingData.filter(d=>d._id!==id)
                const update = bookingData.find(f=>f._id===id)
                update.status   = "confirm"

                const newBooking = [update , ...remaining]
                setBooking(newBooking)

            }
        })
    }
  }
console.log(bookingData);
  return (
    <div>
      <h1 className="text-3xl text-center">
        Your Booking: {bookingData?.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>Delete</label>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Gmail</th>
              <th>Service</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((data) => (
              <BookingRow
                data={data}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                key={data._id}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
