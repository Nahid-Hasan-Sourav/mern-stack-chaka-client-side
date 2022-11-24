import React from 'react';
import DownloadBrochure from '../../DownloadBrochure/DownloadBrochure';
import Banner from '../Banner/Banner';
import WhyTrust from '../WhyTrust/WhyTrust';

const Home = () => {
    return (
        <div>
           <section className='w-[100%]'>
               <Banner></Banner>
           </section>
           <section className='py-8'>
               <div>
                <h3 className='font-extrabold text-3xl my-8 ' data-aos="fade-right">
                    Why Trust <span className='text-[#E22937]'>Chaka?</span>
                </h3>
                <WhyTrust></WhyTrust>
               </div>
           </section>
           <section>
           <h3 className='font-extrabold text-3xl my-8'>
                  Select Your <span className='text-[#E22937]'>Categories</span>
            </h3>
           </section>
           <section>
            <DownloadBrochure></DownloadBrochure>
           </section>
        </div>
    );
};

export default Home;