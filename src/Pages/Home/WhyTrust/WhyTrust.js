import React from 'react';

const WhyTrust = () => {
    const trust=[
        {
            Number:"46+",
            value:"Premier Brands"
        },
        {
            Number:"46+",
            value:"Premier Brands"
        },
      
        {
            Number:"140K+",
            value:"Happy Users"
        },
        {
            Number:"8K+",
            value:"Total Registrations"
        }
    ]
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-6 bg-[#f9f5f5] p-3'>
          
           {
                trust.map((item)=>{
                    return (
                      <div className="card bg-base-100 shadow-xl "
                      data-aos="zoom-out-down"
                      >
                        <div className="card-body">
                          <div className="flex items-center justify-center">
                           <span className='mr-6 text-[#E22937] font-bold text-2xl'>{item.Number}</span>
                           <span className='ml-6 text-black font-bold'>{item.value}</span>
                          </div>                       
                        </div>
                      </div>
                    );
                })
            }
           
        </div>
    );
};

export default WhyTrust;