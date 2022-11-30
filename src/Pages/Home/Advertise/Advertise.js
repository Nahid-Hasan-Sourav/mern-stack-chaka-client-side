import { useQuery } from "@tanstack/react-query";
import React from "react";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { FaCheckCircle } from "react-icons/fa";

const Advertise = () => {
  const { data: itemData = [], isLoading } = useQuery({
    queryKey: ["advertiseProduct"],
    queryFn: async () => {
      const res = await fetch(
        `https://a-12-chakka-server-side.vercel.app/advertiseProduct`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  // console.log("Advertised Product",advertise)

  // if(isLoading){
  //   return <LoadingSpinner></LoadingSpinner>
  // }
  return (
    <>
      {itemData?.length > 0 ? (
        <>
          <div>
            <div>
              <h2 className="text-[#E22937] font-bold text-3xl my-8">
                Advertise Product
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-4 my-8">
              <>
                {itemData.map((data) => {
                  return (
                    <div className="card bg-base-100 shadow-xl" key={data._id}>
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
                                {data?.sellerStatus ? (
                                  <button className="btn btn-[#808080] btn-xs">
                                    <FaCheckCircle className="text-success inline"></FaCheckCircle>
                                    <span className="mx-2 text-success ">
                                      {" "}
                                      {data.sellerStatus}
                                    </span>
                                  </button>
                                ) : (
                                  <button className="btn btn-[#808080] btn-xs">
                                    UNVERIFIED
                                  </button>
                                )}
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
                          // onClick={(e) => setspecificItemsData(data, e)}
                          // disabled={
                          //   userRole && userRole === "user" ? false : true
                          // }
                        >
                          Book Now
                        </label>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Advertise;
