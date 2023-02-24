import React from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { TbRefresh } from 'react-icons/tb';
import { SlCalender } from 'react-icons/sl';
import { BiSupport } from 'react-icons/bi';
const DeliveryUpdate = () => {
        const data=[
            {
                "Title":"FREE SHIPPING",
                "subTitle":"On order over $500.00"
            },
            {
                "Title":"FREE RETURN",
                "subTitle":"Free 90 days return policy"
            },
            {
                "Title":"DAILY UPDATE",
                "subTitle":"Check our store for latest items"
            },
            {
                "Title":"SUPPORT 24/7",
                "subTitle":"Hotline: 0123 456789"
            }
        ]
    
    return (
        <div className=' bg-[#132C4E] border-b'>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
               { 
               data?.map((item,index)=>{
                return(
                    <div className='p-6'>
                        <div className='flex p-4'>
                           <div>
                                {
                                    index===0 ? <MdLocalShipping className='text-4xl text-white'/>
                                     :
                                    
                                    index===1 ? <TbRefresh className='text-4xl text-white'/> 
                                    :
                                    index===2 ? <SlCalender className='text-4xl text-white'/> 
                                    :
                                    <BiSupport className='text-4xl text-white'/> 
                                }
                            </div>
                            <div className='text-white ml-3'>
                                <h4>                          
                                  {item.Title}
                                </h4>
                                <p>{item.subTitle}</p>
                            </div>
                        </div>
                    </div>
                )
               })
               }
            </div>
        </div>
    );
};

export default DeliveryUpdate;