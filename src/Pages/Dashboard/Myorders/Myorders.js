import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

const Myorders = () => {
  const router = useParams();
  console.log("This email is from my orders pages", router.email);

  const { data: myProducts = [], refetch } = useQuery({
    queryKey: ["my-products"],
    queryFn: async () => {
      const res = await fetch(
        `https://a-12-chakka-server-side.vercel.app/buyers/my-products/${router.email}`,
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

  console.log("This is from my orders pages", myProducts);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Product IMage</th>
              <th>Product Tille</th>
              <th>Price</th>
              <th>Payment</th>
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
                  <td>{data.itemName}</td>
                  <td>{data.price}</td>

                  <th>{
                    data.transactionId ?  <button className="btn btn-xs btn-success "
                   
                    >Payment</button> :
                    <Link to={`/dashboard/payment/${data._id}`}>
                    <button className="btn btn-xs btn-warning">Pay</button> 
                   </Link>
                    
                    }
                   
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myorders;
