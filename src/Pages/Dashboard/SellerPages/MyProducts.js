import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { MdDelete } from 'react-icons/md';
import toast from 'react-hot-toast';
const MyProducts = () => {
    const {user}=useContext(AuthContext)
    const [allProducts,setallProducts]=useState()
    console.log("All products",allProducts)
    const [refresh,setRefresh] = useState(false)
    const [btnDisabled,setbtnDisabled]=useState(false)
    const buttonRef = useRef();

    const router=useParams();
    console.log("my products",router)
    useEffect(()=>{
        fetch(`http://localhost:5000/dashboard/seller/my-products/${router.email}`)
        .then(res=>res.json())
        .then(data=>{
            setallProducts(data)
            
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
                    setRefresh(!refresh)
                }
            })
            .catch(err => {console.log("Delete roducts error",err)})

            // alert("Delete btn")
    }

    const handleAdvertise=(data)=>{
        alert("Advertise button is working")
        console.log("This is for advertise from My Products",data)

        fetch('http://localhost:5000/advertiseProductCollection',{
            method:'post',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)  
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                toast.success("CONGRATULATION !! YOUR PRODUCT IS ADDED FOR ADVERTISE");
                buttonRef.current.disabled = true; 
               
            }
        })



       
        // e.currentTarget.disabled=true;
    }

    return (
        <div>
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
      
     {
        allProducts?.length===0 ?
        <>
        <div className='w-[100%]'>
        {/* <h2 className='font-bold text-center'>Sorry You have no products</h2> */}
        <marquee className='block'><h2 className='font-bold text-center text-3xl text-red-700'>Sorry You have no products</h2></marquee>
        </div>
        </>

        :

        <>
        
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
                        <button className='text-red-700 btn' onClick={()=>handleAdvertise(data)}>
                            Advertised
                        </button>
                    </th>
                    <th className='text-center'>
                   <button onClick={()=>handleDelete(data._id)}
                   ref={buttonRef}
                   >
                   <MdDelete className='inline text-3xl text-red-700'></MdDelete>
                   </button>
                    </th>
                </tr>
                </>
            )
        })
      }
        </>
     }
      
    </tbody> 
   
  </table>
        </div>
        </div>
    );
};

export default MyProducts;