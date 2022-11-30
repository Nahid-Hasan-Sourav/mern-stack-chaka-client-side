import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Chekout from './Chekout';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log("Payments",stripePromise)

const Payments = () => {
    const data=useLoaderData()
    return (
      <div>
        <div className='lg:w-96 lg:mx-auto'>
        <h2  className='md:text-xl'>Payment For <span className='text-success'>{data.itemName}</span></h2>
        <div className='lg:w-96 mt-10 bg-slate-800'>
        <Elements stripe={stripePromise}
        className='mt-8'
        >
         <Chekout
         data={data}
         ></Chekout>
        </Elements>
        </div>
        </div>
      </div>
    );
};

export default Payments;