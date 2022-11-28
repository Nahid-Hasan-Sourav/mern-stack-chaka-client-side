import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { getRole } from "../../Api/UserRole";
import BookingModal from "../../Components/BookingModal/BookingModal";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SpecificCategoryItems = () => {
  const { user } = useContext(AuthContext);
  console.log("object", user);
  const [userRole, setuserRole] = useState("");

  useEffect(() => {
    getRole(user?.email)
      .then((data) => {
        console.log("User Role from sidebar :", data.role);
        setuserRole(data.role);
      })
      .catch((err) => console.log("Error", err));
  }, [user]);

  const itemData = useLoaderData();
  console.log("SpecificCategoryItems", itemData[0].categoryName);
  console.log("SpecificCategoryItems", itemData);
  const [specificItemsData, setspecificItemsData] = useState(null);
  console.log("specificItemsData", specificItemsData);

  const handleWishlist = (data) => {
    // alert("Wishlist");
    console.log("Wish List", data);

    const wishList = {
      email: user.email,
      productName: data.name,
      categoryName: data.categoryName,
      productImage: data.imgUrl,
      price: data.resalePrice,
    };

    fetch("https://a-12-chakka-server-side.vercel.app/wish-list", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("chaka-token")}`,
      },

      body: JSON.stringify(wishList),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("CONGRATULATION !! PRODUCT IS ADDED IN WISH LIST");
        } else {
          toast.success("PRODUCT IS ALREADY ADEED IN YOUR WISH LIST");
        }
      });

    // console.log("wish list product",wishList);
  };

  return (
    <div className="bg-gray-300 py-10">
      <div className="p-6">
        <h3 className="text-black font-bold text-3xl">
          Available Items For{" "}
          <span className="text-[#E22937]">{itemData[0].categoryName}</span>
        </h3>
        <p className="mt-4 font-bold">
          Total Results Found :
          <span className="text-[#E22937] mx-1">{itemData.length}</span>
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-4 my-8">
        <>
          {itemData.map((data) => {
            return (
              <div className="card w-96 bg-base-100 shadow-xl" key={data._id}>
                <figure>
                  <img src={data.imgUrl} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {data.name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <div className="text-sm opacity-50">
                    posted on : <span>{data?.date}</span>{" "}
                    <span>{data?.time}</span>
                  </div>
                  <p>
                    {data.description.slice(0, 180)}...
                    <button className="btn btn-sm bg-[#E22937]">
                      Read More
                    </button>
                  </p>
                  <div className="card-actions flex-col justify-around">
                    <div className="badge badge-secondary">
                      Orginal Price : {data.price}
                    </div>
                    <div className="badge badge-secondary">
                      Resale Price : {data.resalePrice}
                    </div>

                    <div className="flex ">
                      <div className="badge badge-outline lg:mr-6">
                        Condition : {data.condition}
                      </div>
                      <div className="badge badge-outline">
                        Location :{data.location}{" "}
                      </div>
                    </div>

                    <div className="">
                      <div className="badge badge-outline lg:mr-6">
                        Fuel Type : {data.FuelType}{" "}
                      </div>
                      <div className="badge badge-outline">
                        Milage : {data.Milage}
                      </div>
                    </div>

                    <div>
                      <div className="badge badge-outline lg:mr-3">
                        Year of purchase : {data.Yearofpurchase}
                      </div>
                      <div className="badge badge-outline">
                        Used : {data.Yearofuse}
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={data?.userInfo?.userPhoto} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {data?.userInfo?.userName}
                        </div>
                        <div className="text-sm opacity-50">
                          {data.userRole}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <button
                        className="btn btn-primary fw-bold"
                        onClick={() => setspecificItemsData(data)}
                      >
                        Book Now
                      </button> */}
                  <label
                    htmlFor="booking-modal"
                    className="btn bg-[#E22937] fw-bold"
                    onClick={(e) => setspecificItemsData(data, e)}
                    disabled={userRole && userRole === "user" ? false : true}
                  >
                    Book Now
                  </label>
                  <Link>
                    <button
                      className="btn btn-primary w-[100%]"
                      disabled={userRole && userRole === "user" ? false : true}
                      onClick={() => handleWishlist(data)}
                    >
                      Add To My WishList
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </>
      </div>
      {specificItemsData && (
        <BookingModal
          specificItemsData={specificItemsData}
          setspecificItemsData={setspecificItemsData}
        ></BookingModal>
      )}
    </div>
  );
};

export default SpecificCategoryItems;
