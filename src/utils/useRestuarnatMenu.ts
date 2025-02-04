'use client'
import { useEffect, useState } from "react";

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

const useRestuarnatMenu = () =>{
    const [resinfo, setResinfo] = useState<FoodItem[]>([]);

    const fetchData = async () =>{
        const result = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9334382&lng=77.56086719999999&restaurantId=394084&catalog_qa=undefined&submitAction=ENTER")
        const data = await result.json();
        setResinfo(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards);
    }

    useEffect(() => {
        fetchData()
    },[])

    return resinfo;

}

export default useRestuarnatMenu;