'use client'

import { useEffect, useState } from "react";
import styles from "./index.module.css"


type Restaurant = {
    id: string;
    name: string;
    image: string;
    locality: string;
    area: string;
    costForTwo: string;
    cuisines: string[];
    avgRating: number;
    totalRatings: string;
    availability?: {
      nextCloseTime: string;
      opened: boolean;
    };
    badges?: string[];
    discount?: string;
    imageURL?: string;
  };


  type RestaurantListProps = {
    data: Restaurant[];
  };

const Card = (props: RestaurantListProps) => {
    const { data } = props;

    const [filterData, setFilterData] = useState<Restaurant[]>(data)

    const topRatedList = () => {
        const res = data.filter((rating: any) => rating?.avgRating > 4.3)
        setFilterData(res);
    }

    useEffect(() => {

    }, [filterData])
   
  return (

   
    <>
    <div>
    <button className="btn btn-accent m-5" 
    onClick={topRatedList}
    >Top Rated Restuarnts</button>

    </div>
    <div className={`flex flex-wrap gap-4 `}>
      
        {filterData.map((res: any) => (
            <div key={res?.id} className={`card bg-base-100 w-86 shadow-sm m-4 h-100 ${styles.cardDiv}`}>
            <figure>
            <img
              src={res?.imageURL}
              alt="Shoes" />
          </figure>
          <div className="card-body bg-orange-100 p-2 h-55">
            <h1 className="card-title">{res?.name}</h1>
            <p>{res?.cuisines[0]}</p>
          <h4>{res?.area}</h4>
          <h4>{res?.avgRating} stars</h4>
          <h4>{res?.totalRatings} Ratings</h4>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
          </div>

        ))}
        </div>
        
    
  </>
  
  )
}

export default Card;
