'use client'

import { useEffect, useState } from "react";
import Loader from "../Loader";

type FoodItem = {
    card: {
      info: {
        id: string;
        name: string;
        category: string;
        description: string;
        imageId: string;
        inStock: number;
        variants: object;
        defaultPrice: number;
        ribbon: object;
        showImage: boolean;
        itemBadge: object;
        badgesV2: object;
        ratings: {
          aggregatedRating: {
            rating: string;
            ratingCount: string;
            ratingCountV2: string;
          };
        };
      };
    };
  };


const ResturantMenu = () =>{

    const [resinfo, setResinfo] = useState<FoodItem[]>([]);

    useEffect(() => {
        fetchMenu();
    }, [])


    const fetchMenu = async () => {
        const result = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9334382&lng=77.56086719999999&restaurantId=394084&catalog_qa=undefined&submitAction=ENTER")
        const data = await result.json();
        setResinfo(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards);
        console.log("data", data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards)
    }

    return  resinfo.length === 0 ? <Loader /> : (
        <>
    {resinfo.map((item:any, index: number) => (
        <div className="menu m-auto border-" key={item?.card?.info?.id}>
            {/* <h1>Name of resturant</h1>
            <h2>Menu</h2> */}
            <div className="card card-side bg-base-100 shadow-sm h-[180px] w-[850px] ">
             <figure>
             <img
             className="w-[180px]"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId} `} 
                 alt="Movie" />
            </figure>
  <div className="card-body p-[5px]">
    <h2 className="card-title">{item?.card?.info?.name}</h2>
    <h2 className="card-title">₹{ item?.card?.info?.defaultPrice ? item?.card?.info?.defaultPrice / 100 : item?.card?.info?.price / 100}</h2>
    <h2 className="card-title">{item?.card?.info?.ratings?.aggregatedRating?.rating}</h2>
    <p>{item?.card?.info?.description}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">ADD</button>
    </div>
  </div>
</div>
        </div>
    ))}
    </>
        
    )
}
export default ResturantMenu;