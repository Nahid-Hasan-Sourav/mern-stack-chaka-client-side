import React from 'react';
import buy from '../../../Assets/bg-image-buy-sell.webp';
import { MdCall } from 'react-icons/md';
import { IoMdMail } from 'react-icons/io';

const BuyingAndSelling = () => {
    
    return (
        <div>
           <div className='grid lg:grid-cols-2 md:grid-cols-2 p-8 pb-0'>
           <div className='pb-8'
           data-aos="fade-right"
           >
                <h4 className='text-center text-2xl mt-3 mb-5'>BUYING & SELLING JUST GOT EASIER!</h4>
                <p className='text-center mt-5'>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
                <div className='flex lg:flex-row md:flex-col sm:flex-col flex-col justify-center items-center  lg:mt-8 py-4'>
                    <div className=' border p-6 rounded-tl-[30%]  rounded-bl-[30%] rounded-tr-[30%] rounded-br-[30%]'>
                        <h5>Call the customer support</h5>
                        <p className='flex items-center'>
                            <span className='mr-2'><MdCall/></span>
                            <span>0123 456 789</span>
                        </p>
                    </div>
                    <div className='lg:mx-3 md:my-3'>
                       <p> OR</p>
                    </div>
                    <div  className='border p-6 rounded-tl-[30%]  rounded-bl-[30%] rounded-tr-[30%] rounded-br-[30%]'>
                        <h5>Send us a message</h5>
                        <p className='flex items-center'>
                            <span className='mr-2'><IoMdMail/></span>
                            <span>contact@apollotheme.com</span>
                        </p>
                    </div>
                </div>
            </div>
            <div  className=''
             data-aos="fade-left"
            >
               <img src={buy} className='h-full text-center mx-auto'/>
            </div>
           </div>
        </div>
    );
};

export default BuyingAndSelling;