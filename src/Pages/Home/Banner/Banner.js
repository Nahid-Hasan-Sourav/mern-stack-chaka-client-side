import React from 'react';
import car from '../../../Assets/car.png'
import bg from '../../../Assets/slider_bg.png'

const Banner = () => {
    return (
      <div>
        <div className="hero lg:h-[480px] w-[100%] bg-base-200"
        style={{background:`url(${bg})`}}
        >
          <div className="hero-content flex-col-reverse lg:flex-row-reverse ">
            <img data-aos="fade-left"
              src={car}
              className="lg:max-w-xl md:max-w-lg rounded-lg"
              alt='banner'
            />
            <div className='text-center' data-aos="fade-right">
              <h1 className="text-4xl text-center font-bold text-[#E22937]">Sell Or Find your next car with us</h1>
              <p className="py-6 text-white">
              Buying and selling used cars can be an excellent way to add an extra source of income. Sure the initial investment may be a bit more than what most people may be comfortable with, but the profit you can potentially make it worthwhile
              </p>
              <button className="btn bg-[#E22937]">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;