import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';

const Mywishlist = () => {
    const router= useParams();
    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ["wish-list"],
        queryFn: async () => {
          const res = await fetch(
            `http://localhost:5000/dashboard/wishlist/${router.email}`,
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
      console.log("")
    return (
        <div>
            <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Product IMage</th>
              <th>Product Tille</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myProducts?.map((data) => {
              return (
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={data?.productImage} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{data.productName}</td>
                  <td>{data.price}</td>

                  <th>
                    <button className="btn btn-ghost btn-xs">Payment</button>
                  </th>
                  <th>
                    <button className="btn btn-ghost btn-xs">Delete</button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
        </div>
    );
};

export default Mywishlist;