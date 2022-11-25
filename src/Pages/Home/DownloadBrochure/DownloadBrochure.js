import React from 'react';

const DownloadBrochure = () => {
    return (
        <div className='bg-[#E22937] py-12 flex lg:justify-evenly items-center lg:flex-row md:flex-col flex-col lg:px-0 md:px-0 px-5'>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h4 className='text-white font-bold text-3xl'>Download Our Corporate Brochure            
            </h4>
            <p className='mt-3 text-white text-xl'>If you interested in out theme don't wait to purchase or call us</p>
            </div>
            <button className="btn btn-active lg:mt-0 mt-8 animate-bounce">Download Now </button>
        </div>
    );
};

export default DownloadBrochure;