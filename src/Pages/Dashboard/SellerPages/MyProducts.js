import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { MdDelete } from 'react-icons/md';
import toast from 'react-hot-toast';
const MyProducts = () => {
    const {user}=useContext(AuthContext)
    const [allProducts,setallProducts]=useState()
    const [refresh,setRefresh] = useState(false)
    const router=useParams();
    console.log("my products",router)
    useEffect(()=>{
        fetch(`http://localhost:5000/dashboard/seller/my-products/${router.email}`)
        .then(res=>res.json())
        .then(data=>{
            setallProducts(data)
            setRefresh(true)
        })
        .catch(err=>console.log(err));
    },[refresh])

    const handleDelete=(id)=>{
        console.log("id",id)
        fetch(`http://localhost:5000/dashboard/seller/my-products/deletes/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0){
                    toast.success("Deleted Successfully")
                }
            })
            .catch(err => {console.log("Delete roducts error",err)})

            // alert("Delete btn")
    }
    return (
        <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
      
        <th className='text-center'>Product Name</th> 
        <th className='text-center'>Product Category</th> 
        <th className='text-center'>Price</th> 
        <th className='text-center'>Sale Status</th> 
        <th className='text-center'>Advertise</th> 
        <th className='text-center'>Delete</th>
      </tr>
    </thead> 
    <tbody>
      
      {/* <tr>
        <th>18</th> 
        <td>Aland Wilber</td> 
        <td>Quality Control Specialist</td> 
        <td>Kshlerin, Rogahn and Swaniawski</td> 
        <td>Czech Republic</td> 
        <td>9/29/2020</td> 
        <td>Purple</td>
      </tr> */}
      {
        allProducts?.map((data)=>{
            return(
                <>
                <tr>
                    <th className='text-center'>
                        {data.name}
                    </th>
                    <th className='text-center'>
                        {data.categoryName}
                    </th>
                    <th className='text-center'>
                       {data.price}
                    </th>
                    <th className='text-center'>
                        Available
                    </th>
                    <th className='text-center'>
                        <button className='text-red-700'>
                            Advertised
                        </button>
                    </th>
                    <th className='text-center'>
                   <button onClick={()=>handleDelete(data._id)}>
                   <MdDelete className='inline text-3xl text-red-700'></MdDelete>
                   </button>
                    </th>
                </tr>
                </>
            )
        })
      }
      
    </tbody> 
   
  </table>
</div>
    );
};

export default MyProducts;