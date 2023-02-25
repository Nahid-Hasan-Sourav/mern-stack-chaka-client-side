import React from 'react';
import img from '../../../../Assets/fifty-percent.webp';
import Clock from '../../../../Components/Clock/Clock';
import { BiRightArrowAlt } from 'react-icons/bi';


const FiftyDiscount = () => {
    return (
        <div className='bg-[#132C4E]'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3'>
                <div 
                 data-aos="fade-up"
                 
                >
                    <div className='flex flex-col items-center justify-center h-full'>
                    <p className='text-white tracking-[6px] font-bold'>DEAL OF THE MONTH</p>
                    <h1 className='text-white font-extrabold text-4xl text-center mt-2'>EXCLUSIVE DEALS?<br></br>
                        JOIN THE CLUB
                    </h1>
                    <p>Up to 25% Off Select big Car Care</p>
                    <Clock className='text-white text-2xl'/>
                    <button className="btn btn-md bg-[#E22937] mt-4">VIEW PRODUCT<BiRightArrowAlt className='text-[25px]'/></button>
                    </div>
                </div>
                <div
                
                data-aos="fade-right"
                >
                    <img src={img} />
                </div>
            </div>
        </div>
    );
};

export default FiftyDiscount;