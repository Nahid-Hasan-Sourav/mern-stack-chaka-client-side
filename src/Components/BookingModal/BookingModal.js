import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const BookingModal = ({ specificItemsData, setspecificItemsData }) => {
  const { user } = useContext(AuthContext);

  console.log("This is from booking modal", specificItemsData);

  // const current = new Date();
  // // By default US English uses 12hr time with AM/PM
  // const time = current.toLocaleTimeString("en-US");
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("This is from booking modal",specificItemsData)
    const form = e.target;
    const itemName = form.itemName.value;
    const userName = form.userName.value;
    const email = form.email.value;
    const price = form.price.value;
    const phoneNumber = form.phoneNumber.value;
    const meetingLocation = form.meetingLocation.value;

    const BookingInfo = {
      itemName,
      userName,
      email,
      price,
      phoneNumber,
      meetingLocation,
      productImage: specificItemsData.imgUrl,
      time,
      date,
    };
    // e.currentTarget.disabled = true;

    fetch("https://a-12-chakka-server-side.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("chaka-token")}`,
      },
      body: JSON.stringify(BookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("CONGRATULATION !! THE ITEM IS BOOKED");
        }
      });

    // console.log("BookingInfo",BookingInfo);
    // set empty string in this state for closeing the modal
    setspecificItemsData("");
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm bg-[#E22937] btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="card flex-shrink-0 w-full">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <input
                  disabled
                  type="text"
                  name="itemName"
                  value={specificItemsData.name}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  disabled
                  name="userName"
                  value={user?.displayName}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  disabled
                  name="email"
                  type="email"
                  value={user?.email}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  name="price"
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
                  name="phoneNumber"
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
                  name="meetingLocation"
                  className="input input-bordered"
                />
              </div>
              <div className="flex flex-col  mt-6 justify-evenly">
                <button
                  className="btn bg-[#E22937] text-white font-bold"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
