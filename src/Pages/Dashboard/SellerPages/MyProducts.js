import React, { useContext, useEffect, useRef, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
const MyProducts = () => {
  const { user } = useContext(AuthContext);
  // const [allProducts,setallProducts]=useState()
  // console.log("All products",allProducts)
  const [refresh, setRefresh] = useState(false);
  // const [btnDisabled,setbtnDisabled]=useState(false)
  const buttonRef = useRef();

  const router = useParams();
  // console.log("my products",router)
  // useEffect(()=>{
  //     fetch(`https://a-12-chakka-server-side.vercel.app/dashboard/seller/my-products/${router.email}`)
  //     .then(res=>res.json())
  //     .then(data=>{
  //         setallProducts(data)

  //     })
  //     .catch(err=>console.log(err));
  // },[refresh])

  const { data: allProducts = [], refetch } = useQuery({
    queryKey: ["my-products"],
    queryFn: async () => {
      const res = await fetch(
        `https://a-12-chakka-server-side.vercel.app/dashboard/seller/my-products/${router.email}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("chaka-token")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    console.log("id", id);
    fetch(
      `https://a-12-chakka-server-side.vercel.app/dashboard/seller/my-products/deletes/${id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("chaka-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted Successfully");
          refetch();
          // setRefresh(!refresh)
        }
      })
      .catch((err) => {
        console.log("Delete roducts error", err);
      });

    // alert("Delete btn")
  };

  const handleAdvertise = (data) => {
    alert("Advertise button is working");
    console.log("This is for advertise from My Products", data);

    fetch(
      "https://a-12-chakka-server-side.vercel.app/advertiseProductCollection",
      {
        method: "post",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("chaka-token")}`,
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success(
            "CONGRATULATION !! YOUR PRODUCT IS ADDED FOR ADVERTISE"
          );
          buttonRef.current.disabled = true;
        }
      });

    // e.currentTarget.disabled=true;
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th className="text-center">Product Name</th>
              <th className="text-center">Product Category</th>
              <th className="text-center">Price</th>
              <th className="text-center">Sale Status</th>
              <th className="text-center">Advertise</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {allProducts?.length === 0 ? (
              <>
                <div className="w-[100%]">
                  <marquee className="block">
                    <h2 className="font-bold text-center text-3xl text-red-700">
                      Sorry You have no products
                    </h2>
                  </marquee>
                </div>
              </>
            ) : (
              <>
                {allProducts?.map((data) => {
                  return (
                    <>
                      <tr>
                        <td className="text-center">{data.name}</td>
                        <td className="text-center">{data.categoryName}</td>
                        <td className="text-center">{data.price}</td>
                        <td className="text-center">Available</td>
                        <td className="text-center">
                          <button
                            className="text-red-700 btn btn-ghost btn-xs"
                            onClick={() => handleAdvertise(data)}
                          >
                            Advertised
                          </button>
                        </td>
                        <td className="text-center">
                          <button
                            onClick={() => handleDelete(data._id)}
                            ref={buttonRef}
                          >
                            <MdDelete className="inline text-3xl text-red-700"></MdDelete>
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
