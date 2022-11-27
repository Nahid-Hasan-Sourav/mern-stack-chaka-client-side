import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { getRole } from '../../Api/UserRole';
import BookingModal from '../../Components/BookingModal/BookingModal';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SpecificCategoryItems = () => {
    const {user}=useContext(AuthContext)

    const [userRole,setuserRole]=useState('')

  useEffect(()=>{
      getRole(user?.email)
      .then((data)=>{
        console.log("User Role from sidebar :",data.role)
        setuserRole(data.role)
      })
      .catch(err=>console.log("Error",err))
  },[user])

    const itemData=useLoaderData()
    console.log("SpecificCategoryItems",itemData[0].categoryName)
    const [specificItemsData,setspecificItemsData]=useState(null)
    console.log("specificItemsData",specificItemsData)
    return (
       <div className='bg-gray-300 py-10'>
        <div className='p-6'>
        <h3 className='text-black font-bold text-3xl'>
           Available Items For <span className='text-[#E22937]'>{itemData[0].categoryName}</span>
        </h3>
        <p className='mt-4 font-bold'>Total Results Found :<span className='text-[#E22937] mx-1'>{itemData.length}</span></p>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-4 my-8'>
         <>
            {itemData.map((data)=>{
                return (
                  <div
                    className="card w-96 bg-base-100 shadow-xl"
                    key={data._id}
                  >
                    <figure>
                      <img src={data.imgUrl} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {data.name}
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <p>
                        {data.description.slice(0, 180)}...
                        <button className="btn btn-sm bg-[#E22937]">
                          Read More
                        </button>
                      </p>
                      <div className="card-actions justify-around">
                        <div className="badge badge-outline">
                          Price : {data.price}
                        </div>
                        <div className="badge badge-outline">
                          Condition : {data.condition}
                        </div>
                        <div className="badge badge-outline">
                          Location :{data.location}{" "}
                        </div>
                        <div className="badge badge-outline">
                          Fuel Type : {data.FuelType}{" "}
                        </div>
                        <div className="badge badge-outline">
                          Milage : {data.Milage}
                        </div>
                        <br></br>
                        <div className="badge badge-outline">
                          Year of purchase : {data.Yearofpurchase}
                        </div>
                      </div>

                      {/* <button
                        className="btn btn-primary fw-bold"
                        onClick={() => setspecificItemsData(data)}
                      >
                        Book Now
                      </button> */}
                      <label htmlFor="booking-modal"  className="btn bg-[#E22937] fw-bold"
                       onClick={(e) => setspecificItemsData(data,e)}

                       disabled={userRole && userRole==='user' ? false : true}
                      >
                         Book Now
                      </label>
                    </div>
                  </div>
                );
            })}
        </>
       </div>
       {specificItemsData && 
       <BookingModal
       specificItemsData={specificItemsData}
       setspecificItemsData={setspecificItemsData}
       ></BookingModal>
     
      
      }
       </div>
    );
};

export default SpecificCategoryItems;