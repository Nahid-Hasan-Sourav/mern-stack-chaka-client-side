import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllBuyers = () => {
  const { data: itemData = [], refetch } = useQuery({
    queryKey: ["all-buyers"],
    queryFn: async () => {
      const res = await fetch(
        `https://a-12-chakka-server-side.vercel.app/all-buyers`,
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

  const handleDelete = (id, e) => {
    // console.log("Running",e.target.innerHTML)
    // e.target.innerHTML="Deleted"
    // e.target.disabled='true'
    console.log("Id ", id);
    fetch(
      `https://a-12-chakka-server-side.vercel.app/users/buyers/delete/${id}`,
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
        }
      })
      .catch((err) => {
        console.log("Delete roducts error", err);
      });
  };

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {itemData?.map((data) => {
              return (
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={data?.image} alt="user" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{data?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{data?.email}</td>
                  <td>
                    <button
                      className="btn btn-xs btn-warning"
                      onClick={(e) => handleDelete(data._id, e)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
