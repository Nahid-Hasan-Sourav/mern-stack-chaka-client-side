import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const SpecificCategoryItems = () => {
    const data=useLoaderData()
    console.log("SpecificCategoryItems",data)
    const [specificItemsData,setspecificItemsData]=useState({})
    console.log("specificItemsData",specificItemsData)
    return (
       <div className='bg-gray-300 py-10'>
        <div className='p-6'>
        <h3 className='text-black font-bold text-3xl'>
           Available Items For <span className='text-[#E22937]'>{data[0].categoryName}</span>
        </h3>
        <p className='mt-4 font-bold'>Total Results Found :<span className='text-[#E22937] mx-1'>{data.length}</span></p>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-4 my-8'>
         <>
            {data.map((data)=>{
                return (
                  <div className="card w-96 bg-base-100 shadow-xl"
                  key={data._id}
                  >
                    <figure>
                      <img
                        src={data.imgUrl}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {data.name}
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <p>{data.description.slice(0,180)}...<button className='btn btn-sm bg-[#E22937]'>Read More</button></p>
                      <div className="card-actions justify-around">
                        <div className="badge badge-outline">Price : {data.price}</div>              
                        <div className="badge badge-outline">Condition : {data.condition}</div>
                        <div className="badge badge-outline">Location :{data.location} </div>
                        <div className="badge badge-outline">Fuel Type : {data.FuelType} </div>
                        <div className="badge badge-outline">Milage : {data.Milage}</div><br></br>
                        <div className="badge badge-outline">Year of purchase : {data.Yearofpurchase}</div>
                      </div>

                      <button className="btn btn-primary fw-bold" onClick={()=>setspecificItemsData(data)}>Book Now</button>
                    </div>
                  </div>
                );
            })}
        </>
       </div>
       </div>
    );
};

export default SpecificCategoryItems;