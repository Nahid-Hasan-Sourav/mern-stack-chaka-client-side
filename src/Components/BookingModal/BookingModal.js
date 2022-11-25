import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const BookingModal = ({specificItemsData,setspecificItemsData}) => {

    // const current = new Date();
    // // By default US English uses 12hr time with AM/PM
    // const time = current.toLocaleTimeString("en-US");
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   

    const handleSubmit =(e)=>{
        e.preventDefault()
        const form=e.target
        const itemName=form.itemName.value;
        const userName=form.userName.value;
        const email=form.email.value;
        const price=form.price.value;
        const phoneNumber=form.phoneNumber.value;
        const meetingLocation=form.meetingLocation.value;
       
        const BookingInfo={
            itemName,
            userName,
            email,
            price,
            phoneNumber,
            meetingLocation,
            time,
            date
        }

        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(BookingInfo)  
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                toast.success("CONGRATULATION !! THE ITEM IS BOOKED");
            }
        })




        // console.log("BookingInfo",BookingInfo);
        // set empty string in this state for closeing the modal
        setspecificItemsData('')
    }
    return (
      <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="card flex-shrink-0 w-full">
                  <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                      
                      <input
                        disabled
                        type="text"
                        name='itemName'
                        value={specificItemsData.name}
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                     
                      <input
                        type="text"
                        disabled
                        name='userName'
                        value={`User Name : Mnjvjh `}
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      
                      <input
                        disabled
                        name='email'
                        type="email"
                        value={`bbbbbb@gmail.com`}
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      
                      <input
                      name='price'
                        type="text"
                        disabled
                        value={specificItemsData.price}
                        className="input input-bordered"
                      />
                      
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Mobile Number</span>
                      </label>
                      <input
                      required
                        type="phone"
                        name='phoneNumber'
                        className="input input-bordered"
                      />
                      
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Meeting Location</span>
                      </label>
                      <input
                      required
                        type="text"
                        name='meetingLocation'
                        className="input input-bordered"
                      />
                      
                    </div>
                    <div className="flex flex-col  mt-6 justify-evenly">
                      <button className="btn btn-primary" type='submit'>Submit</button>
                     
                    </div>
                  </form>
                </div>
          </div>
        </div>
      </>
    );
};

export default BookingModal;