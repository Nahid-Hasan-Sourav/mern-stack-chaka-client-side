import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';

const Categories = () => {
    const { data: Categories = [], isLoading } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categories`);
            const data = await res.json();
            return data
        }
    });

    if(isLoading){
      return <LoadingSpinner></LoadingSpinner>
    }

    console.log("All categories",Categories);

    return (
        <>
        {
            Categories.map((categorie)=>{
                return (
                 
                    <Link 
                    className="card bg-base-100 shadow-xl hover:bg-[#e9858e]" 
                    key={categorie._id}
                    to={`/categorie/${categorie.categoryName}` }
                    >
                      <figure className="px-10 pt-10">
                        <img
                          src={categorie.categoryImageUrl}
                          alt="categorie"
                          className="rounded-xl"
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title text-black font-bold text-xl">
                          {categorie.categoryName}
                        </h2>
                      </div>
                    </Link>
                  
               
                );
            })
        }
        </>
    );
};

export default Categories;