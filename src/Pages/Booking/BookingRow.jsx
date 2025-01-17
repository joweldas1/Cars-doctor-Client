import React from 'react';

const BookingRow = ({data , handleDelete,handleUpdate}) => {
    const{customerName,date,email,price,img,serviceTitle,_id,status}=data

   

    return (
        <tr>
        <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img?img:' '} />
              </div>
            </div>
            <div>
            </div>
          </div>
        </td>
        <td>{customerName}</td>
        <td>
      {email}
        </td>
        <td>
      {serviceTitle}
        </td>
        <td>{price}</td>
        <th>
            {
                status==="confirm"? <span className='text-bold text-red-500 bg-blue-700 p-2'>Confirmed</span>  :   <button onClick={()=>handleUpdate(_id)} className="btn btn-ghost btn-xs">Confirm</button> 
            }
        
        </th>
              </tr>
    );
};

export default BookingRow;