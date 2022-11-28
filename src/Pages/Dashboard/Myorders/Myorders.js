import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Myorders = () => {
        
        const router=useParams()
        console.log("This email is from my orders pages",router.email)

        const { data: myProducts = [],refetch} = useQuery({
            queryKey: ['my-products'],
            queryFn: async () => {
                const res = await fetch(`http://localhost:5000/buyers/my-products/${router.email}`);
                const data = await res.json();
                return data
            }
    
        });

   console.log("This is from my orders",myProducts)
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
      
     {
        myProducts?.map((data)=>{
            return(
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
                <td>
                  {data.itemName}
                 
                </td>
                <td>{data.price}</td>
                
                <th>
                  <button className="btn btn-ghost btn-xs">Payment</button>
                </th>
              </tr>
            )
        })
     }
      
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default Myorders;