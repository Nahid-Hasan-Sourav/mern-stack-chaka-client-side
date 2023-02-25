import React from 'react';
import DownloadBrochure from '../DownloadBrochure/DownloadBrochure';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import WhyTrust from '../WhyTrust/WhyTrust';
import Advertise from '../Advertise/Advertise';
import DeliveryUpdate from '../DeliveryUpdate/DeliveryUpdate';
import BuyingAndSelling from '../BuyingAndSelling/BuyingAndSelling';
import FiftyDiscount from '../Discount/FiftyDiscount/FiftyDiscount';

const Home = () => {
    return (
      <div>
        <section className="w-[100%]">
          <Banner></Banner>
        </section>
        
        <section className="py-8">
          <div>
            <h3 className="font-extrabold text-3xl my-8 " data-aos="fade-right">
              Why Trust <span className="text-[#E22937]">Chaka?</span>
            </h3>
            <WhyTrust></WhyTrust>
          </div>
        </section>


        <section className='py-8'>
        <FiftyDiscount></FiftyDiscount>
        </section>

        <section>
          <div>
            <h3 className="font-extrabold text-3xl my-8" data-aos="fade-right">
              Select Your <span className="text-[#E22937]">Categories</span>
            </h3>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-4 my-8">
            <Categories></Categories>
          </div>
        </section>

        <section>
          
          <Advertise></Advertise>
        </section>
           <section>
            <BuyingAndSelling />
            </section>
        <section>
          <DownloadBrochure></DownloadBrochure>
        </section>
       
        <section>
          <DeliveryUpdate/>
        </section>
        
       
      </div>
    );
};

export default Home;