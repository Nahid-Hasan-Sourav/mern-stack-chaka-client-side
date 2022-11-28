import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';
const AllSellers = () => {
    const [sellerStatus,setSellerStatus]=useState('unverified')
    const { data: itemData = [],refetch} = useQuery({
        queryKey: ['all-seller'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/all-seller`);
            const data = await res.json();
            return data
        }

    });

    const handleVerifySeller=(id)=>{
        // alert("Verify btn working",id)
        // console.log("Verify btn working",id)
        fetch(`http://localhost:5000/users/seller/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Seller Verify successful.')
                refetch();
            }
            else{
                toast.success("Already Verified!")
            }
        })
    }

    const handleDelete=(id)=>{
        console.log("id",id)
        fetch(`http://localhost:5000/users/seller/deletes/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0){
                    toast.success("Deleted Successfully")
                    refetch();
                }
            })
            .catch(err => {console.log("Delete roducts error",err)})

            
    }

    return (
        <div>
           <div className="overflow-x-auto w-full">
  <table className="table w-full">
  
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Email</th>
        <th>Seller Status</th>
        <th>Verify Seller</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        
        {
            itemData?.map((data)=>{
                return(
                    <tr>
       
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={data?.image} alt='user'/>
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{data?.name}</div>                         
                        </div>
                      </div>
                    </td>
                    <td>
                    {data?.email}
                    </td>
                    <td>
                        <button>
                          {data?.sellerStatus ? <span className='btn btn-xs btn-success'>{data.sellerStatus}</span> : <span className='btn btn-xs btn-error'>unverified</span>}
                        </button>
                    </td>
                    <td>
                        <button className='btn  btn-xs' 
                        onClick={()=>handleVerifySeller(data._id)}>
                          Verify
                        </button>
                    </td>
                    <th>
                      <button className=""
                      onClick={()=>handleDelete(data._id)}
                      >
            
                      <MdDelete className='inline text-3xl text-red-700'></MdDelete>
                      </button>
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

export default AllSellers;